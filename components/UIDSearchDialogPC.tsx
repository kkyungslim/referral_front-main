'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import ArrowBottomIcon from '@/components/icons/ArrowBottomIcon';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import SearchIcon from '@/components/icons/SearchIcon';
import { MarketName, PartnerData } from '@/lib/types';
import partnerData from './partnerData';
import {
  removeNonAlphanumeric,
  validateMarketName,
  validateUid,
} from '@/lib/utils';
import { useCaptcha } from '@/lib/hooks/useCaptcha';
import { APIUidSearch, APIverifyCaptcha } from '@/lib/API';
import { div } from 'zrender/lib/core/vector';

function UIDSearchDialogPC({
  classList,
  uid,
  setUid,
  partnerActive,
  setPartnerActive,
  setUidValid,
  setError,
}: {
  partnerActive: PartnerData;
  setPartnerActive: (data: PartnerData) => void;
  setUidValid: (data: boolean) => void;
  uid: string;
  setUid: (data: string) => void;
  classList?: string;
  setError: (data: string) => void;
}) {
  const { showCaptcha, setOnCaptchaSuccess } = useCaptcha();
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (uid.trim().length === 0) {
      return;
    }

    if (!validateUid(uid)) {
      alert('올바르지 않은 UID입니다.');
      console.warn('올바르지 않은 UID입니다.', uid);
      return;
    }

    if (!validateMarketName(partnerActive.value)) {
      alert('올바르지 않은 거래소입니다.');
      console.warn('올바르지 않은 거래소입니다.', partnerActive.value);
      return;
    }

    setOnCaptchaSuccess(async (captchaRes) => {
      APIverifyCaptcha(captchaRes).then((res) => {
        if (res) {
          console.log('captcha Success');
          try {
            APIUidSearch({
              uid: uid,
              marketName: partnerActive.value as MarketName,
            }).then((res) => {
              if (!res) {
                throw new Error('APIUidSearch Error');
              }
              const { success, data, errors } = res;
              if (success === 'success') {
                setUidValid(true);
              } else {
                console.log(errors);
                setError(errors[0].message ?? '');
                // alert(errors[0].message);
              }
            });
          } catch (error) {
            console.log('error : ', error);
          }
        }
      });
    });

    showCaptcha();
  };

  return (
    <div
      className={`flex items-center bg-white py-2 px-4 rounded-lg gap-2 ${classList ?? ''}`}
    >
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger className="flex cursor-pointer items-center gap-2">
          {partnerActive.icon}
          <span>{partnerActive.name}</span>
          <span>
            <ArrowBottomIcon width={10} height={10} />
          </span>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-bold mb-5">
              <div className="flex items-center gap-1">
                <span className="inline-block w-[3px] h-[15px] bg-[#ffbb00]" />{' '}
                <strong>거래소 선택</strong>
              </div>
            </DialogTitle>
            <DialogDescription className={'hidden'}>
              거래소를 선택하면 UID 입력창이 활성화됩니다.
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-2 items-center justify-between flex-wrap gap-7">
            {partnerData.map((item) => {
              const isDisabled = item.name === 'OKX' || item.name === 'Bybit';
              return (
                <div
                  className={`flex justify-between relative ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:cursor-pointer'}`}
                  key={`partner-select-${item.id}`}
                  onClick={() => {
                    if (isDisabled) return;
                    setPartnerActive(item);
                    setDialogOpen(false);
                  }}
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <strong className="text-base text-black">
                      {item.name}
                    </strong>
                  </div>
                  {isDisabled && (
                    <div
                      className={
                        'flex items-center justify-center absolute w-full h-full left-0 top-0  bg-white/50'
                      }
                    >
                      <span className={'font-bold'}>준비중</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </DialogContent>
      </Dialog>

      <form
        id="uid-search-form"
        onSubmit={handleSearch}
        className="w-full flex"
      >
        <div className="w-full">
          <Input
            className="w-full font-bold border-none shadow-none placeholder-front2"
            placeholder="UID를 입력해주세요."
            onChange={(e) => {
              setUid(removeNonAlphanumeric(e.target.value));
              setUidValid?.(false);
              setError?.('');
            }}
            value={uid}
            type="text"
          />
        </div>
        <button type="submit" className="inline hover:cursor-pointer">
          <SearchIcon width={25} height={25} />
        </button>
      </form>
    </div>
  );
}

export default UIDSearchDialogPC;

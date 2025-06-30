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
import { useRouter } from 'next/navigation';
import { PartnerData } from '@/lib/types';
import partnerData from './partnerData';
import { removeNonAlphanumeric } from '@/lib/utils';
import { useCaptcha } from '@/lib/hooks/useCaptcha';
import { APIverifyCaptcha } from '@/lib/API';
import { div } from 'zrender/lib/core/vector';

function UIDSearchDialogMain({
  classList,
  uid,
  setUid,
  partnerActive,
  setPartnerActive,
}: {
  partnerActive: PartnerData;
  setPartnerActive: (data: PartnerData) => void;
  uid: string;
  setUid: (data: string) => void;
  classList?: string;
}) {
  const { showCaptcha, setOnCaptchaSuccess } = useCaptcha();
  const [dialogOpen, setDialogOpen] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setOnCaptchaSuccess(async (captchaRes) => {
      try {
        const verified = await APIverifyCaptcha(captchaRes);

        if (verified) {
          const partnerName = encodeURIComponent(partnerActive.name);
          const uidValue = encodeURIComponent(uid);

          // ✅ 이동 후에 /uidlink 에서 로직 수행
          router.push(`/uidlink?uid=${uidValue}&partner=${partnerName}`);
        } else {
          console.error('Captcha verification failed');
        }
      } catch (error) {
        console.error('Captcha error:', error);
      }
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
                <span className="inline-block w-[3px] h-[15px] bg-[#ffbb00]" />
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
                  className={`flex justify-between relative ${isDisabled ? ' cursor-not-allowed' : 'hover:cursor-pointer'}`}
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

      <form onSubmit={handleSearch} className="w-full flex">
        <div className="w-full">
          <Input
            className="w-full font-bold border-none shadow-none placeholder-front2 md:px-3 px-0"
            placeholder="UID를 입력해주세요."
            onChange={(e) => setUid(removeNonAlphanumeric(e.target.value))}
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

export default UIDSearchDialogMain;

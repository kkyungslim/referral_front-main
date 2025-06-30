'use client';

import UIDSearchDialogPC from '@/components/UIDSearchDialogPC';
import { useEffect, useState } from 'react';
import partnerData from '@/components/partnerData';
import { Badge } from '@/components/ui/badge';
import BalloonIcon from '@/components/icons/BalloonIcon';
import KeyIcon from '@/components/icons/KeyIcon';
import ExchangeIcon from '@/components/icons/ExchangeIcon';
import ArrowBottomIcon from '@/components/icons/ArrowBottomIcon';
import { Button } from '@/components/ui/button';
import { useRouter, useSearchParams } from 'next/navigation';
import { APIUidRegister, APIUidSearch } from '@/lib/API';
import { MarketName, User } from '@/lib/types';

function UidLinkPage({ user }: { user: User | undefined }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [hasValidated, setHasValidated] = useState(false);
  const [partnerActive, setPartnerActive] = useState(partnerData[0]);
  const [uid, setUid] = useState('');
  const [isUidValid, setIsUidValid] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const uidParam = searchParams.get('uid');
    const partnerParam = searchParams.get('partner');

    if (uidParam) setUid(uidParam);

    if (partnerParam) {
      const matched = partnerData.find(
        (p) => p.name.toLowerCase() === partnerParam.toLowerCase(),
      );
      if (matched) setPartnerActive(matched);
    }
    setIsUidValid(false);
    setError('');
    setHasValidated(false);
  }, [searchParams]);

  useEffect(() => {
    if (uid && partnerActive?.value && !hasValidated) {
      setHasValidated(true); //
      APIUidSearch({
        uid,
        marketName: partnerActive.value as MarketName,
      })
        .then((res) => {
          if (!res || res.success !== 'success') {
            setIsUidValid(false);
            setError(res?.errors?.[0]?.message ?? 'UID 검증 실패');
          } else {
            setIsUidValid(true);
            setError('');
          }
        })
        .catch((err) => {
          console.error('APIUidSearch Error:', err);
          setIsUidValid(false);
          setError('UID 검증 중 오류가 발생했습니다.');
        });
    }
  }, [uid, partnerActive, hasValidated]);

  return (
    <section>
      <div className="container mx-auto md:py-45 py-20">
        <UIDSearchDialogPC
          uid={uid}
          partnerActive={partnerActive}
          setPartnerActive={setPartnerActive}
          classList={'border-b-3 border-primary rounded-none'}
          setUidValid={setIsUidValid}
          setUid={setUid}
          setError={setError}
        />

        <div className={'flex md:flex-nowrap flex-wrap mt-8 gap-3'}>
          <div
            className={
              'flex flex-col gap-5 shrink-0 md:w-1/3 w-full md:items-start items-center'
            }
          >
            <Badge className={'text-base rounded-4xl px-5'}>CHECK</Badge>
            <h4 className={'font-bold'}>
              {isUidValid ? (
                <>
                  해당 UID는
                  <br /> 페이백을 받을 수 있습니다.
                  <br /> 페이백을 받으시겠습니까?
                </>
              ) : (
                <>
                  해당 UID는
                  <br /> 페이백을 받을 수 없습니다.
                  <br /> {error}
                </>
              )}
            </h4>
            {isUidValid ? (
              <Button
                onClick={() => {
                  if (!user) {
                    router.push('/login');
                    return;
                  }
                  APIUidRegister({
                    uid,
                    marketName: partnerActive.value as MarketName,
                  }).then((res) => {
                    if (!res) {
                      alert('통신에 문제가 발생했습니다.');
                      throw new Error('통신 오류');
                    }

                    const { success, data, errors } = res;

                    if (success === 'success') {
                      alert('연동에 성공했습니다.');
                      router.push('/');
                    } else {
                      alert(errors[0].message);
                    }
                  });
                }}
              >
                연동하기
              </Button>
            ) : (
              <p className={'font-semibold text-front2'}>
                거래소를 가입할 때<br />
                <span className={'text-primary'}>테더베이스</span> 코드를
                적용해야 합니다.
              </p>
            )}
          </div>

          <div className={'flex flex-col gap-5 md:w-2/3 w-full'}>
            <div
              className="flex items-center justify-between bg-bg1 p-4 rounded-2xl cursor-pointer"
              onClick={() => window.open('https://t.me/a0s2d3f4w1q', '_blank')}
            >
              <div className="flex items-center gap-4">
                <BalloonIcon width={50} height={50} />
                <div>
                  <p className="font-bold text-front2">24시간 고객센터 운영</p>
                  <p className="text-sm text-front2">
                    채팅 상담으로 24시간 테더베이스 고객 응대 가능
                  </p>
                </div>
              </div>
              <ArrowBottomIcon width={15} height={15} className="rotate-270" />
            </div>

            <div
              className="flex items-center justify-between bg-bg1 p-4 rounded-2xl cursor-pointer"
              onClick={() => router.push('/kycintro')}
            >
              <div className="flex items-center gap-4">
                <ExchangeIcon width={50} height={50} />
                <div>
                  <p className="font-bold text-front2">페이백 계정 전환 방법</p>
                  <p className="text-sm text-front2">
                    페이백이 가능한 계정으로 전환 가이드
                  </p>
                </div>
              </div>
              <ArrowBottomIcon width={15} height={15} className="rotate-270" />
            </div>

            <div
              className="flex items-center justify-between bg-primary p-4 rounded-2xl cursor-pointer"
              onClick={() => router.push('/payback')}
            >
              <div className="flex items-center gap-4">
                <KeyIcon width={50} height={50} />
                <div>
                  <p className="font-bold text-white">
                    나의 거래 수수료 환급액 확인하기
                  </p>
                  <p className="text-sm text-white">
                    테더베이스 사용자 평균 매 달 370 USDT 환급
                  </p>
                </div>
              </div>
              <ArrowBottomIcon
                width={15}
                height={15}
                color="#fff"
                className="rotate-270"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UidLinkPage;

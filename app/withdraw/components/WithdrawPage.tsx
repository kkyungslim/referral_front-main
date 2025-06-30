'use client';
import BybitBoxIcon from '@/components/icons/BybitBoxIcon';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { UserUIDResponse } from '@/lib/types';
import { getMarketIcon } from '@/components/icons/IconUtil';
import { useEffect, useState } from 'react';
import { APIWithdraw } from '@/lib/API';
import { useRouter } from 'next/navigation';

function WithdrawPage({ targetMarket }: { targetMarket: UserUIDResponse }) {
  const [withdrawAmount, setWithdrawAmount] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    if (withdrawAmount > targetMarket.reward) {
      setWithdrawAmount(targetMarket.reward);
    } else if (withdrawAmount < 0) {
      setWithdrawAmount(0);
    }
  }, [withdrawAmount]);

  function isEnable() {
    return targetMarket.reward >= 50;
  }

  return (
    <section>
      <div className="container mx-auto my-10">
        <div className={'relative flex justify-center mx-auto w-1/2'}>
          <div className={'text-center p-5 px-8 bg-white relative z-10'}>
            {isEnable() ? (
              <p className={'font-bold text-xl'}>출금이 가능해요!</p>
            ) : (
              <p className={'font-bold text-xl'}>
                출금하기 위해서는 <br />
                <span className={'text-primary'}>
                  {(50 - Number(targetMarket.reward)).toFixed(2)} USDT
                </span>
                가 더 필요해요
              </p>
            )}
            <p className={'text-front2 text-sm'}>
              TIP. 출금은 페이백{' '}
              <span className={'text-primary'}>50 USDT 이상</span>부터
              가능합니다.
            </p>
          </div>
          <div
            className={
              'w-full h-full absolute border-primary border-3 rounded-2xl'
            }
          ></div>
        </div>
        <div
          className={
            'flex items-center justify-between bg-bg1 p-3 px-7 rounded-lg mt-10'
          }
        >
          <div className={'flex items-center gap-8'}>
            <div className={'flex items-center gap-2'}>
              {getMarketIcon(targetMarket.marketName, 30, 30)}
              <p className={'font-semibold'}>UID {targetMarket.uid}</p>
            </div>
            <span className={'w-[2px] h-[20px] bg-front4'}></span>
          </div>
          <div className={'flex items-center font-semibold gap-3'}>
            <p>{targetMarket.reward.toFixed(2)} USDT</p>
            <Button
              className={'h-fit py-1 text-base'}
              disabled={!isEnable()}
              onClick={() => setWithdrawAmount(targetMarket.reward)}
            >
              전체 출금
            </Button>
          </div>
        </div>
        <div>
          <div
            className={
              'flex justify-between border-b-2 border-primary px-3 pb-1 my-15'
            }
          >
            <div className={'flex items-center '}>
              <p className={'text-front2 text-lg font-bold'}>출금 금액</p>
            </div>

            <div className={'flex items-center gap-2'}>
              <Input
                placeholder="시드를 입력해주세요."
                className="w-full border-none shadow-none placeholder-[#bfbfbf] font-semibold text-lg text-right"
                value={withdrawAmount}
                type="number"
                max={targetMarket.reward}
                onChange={(e) => setWithdrawAmount(Number(e.target.value))}
                disabled={!isEnable()}
              ></Input>
              <div>
                <p className={'text-primary text-lg font-bold'}>USDT</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Button
            className={'w-full text-base h-fit py-'}
            disabled={!isEnable() || (isEnable() && withdrawAmount === 0)}
            onClick={() => {
              if (confirm(`${withdrawAmount} USDT 를 출금 신청 하시겠어요?`)) {
                APIWithdraw(targetMarket.marketName, withdrawAmount).then(
                  (res) => {
                    if (res) {
                      alert('출금 신청이 완료되었습니다.');
                      router.push('/');
                    }
                  },
                );
              }
            }}
          >
            출금하기
          </Button>
        </div>
      </div>
    </section>
  );
}

export default WithdrawPage;

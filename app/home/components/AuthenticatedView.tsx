'use client';
import { Button } from '@/components/ui/button';
import CoinIcon from '@/components/icons/CoinIcon';
import ArrowBottomIcon from '@/components/icons/ArrowBottomIcon';
import { useRouter } from 'next/navigation';
import PlusIcon from '@/components/icons/PlusIcon';
import Link from 'next/link';
import { DefaultProps } from '@/lib/types';
import { getMarketIcon } from '@/components/icons/IconUtil';
import { useState } from 'react';

function AuthenticatedView({ userMarketInfo }: DefaultProps) {
  const router = useRouter();

  const [selected, setSelected] = useState<number>(0);
  const MARKET_NAME: Record<string, string> = {
    BITGET: 'Bitget',
    BINGX: 'BingX',
    HTX: 'HTX',
    GATEIO: 'Gate',
    OKX: 'OKX',
    BYBIT: 'Bybit',
  };
  if (!userMarketInfo) {
    return null;
  }
  console.log(userMarketInfo);
  return (
    <section>
      <div className="container mx-auto mt-5">
        <div
          className={
            'md:bg-primary rounded-2xl md:rounded-[50px] border-primary border-1  md:border-none overflow-hidden md:p-1 md:flex'
          }
        >
          <div
            className={
              'md:w-120 w-full flex items-center justify-between bg-white md:rounded-[50px] py-2 md:py-3 px-6'
            }
          >
            <p className={'text-primary font-bold text-sm md:text-lg'}>
              보유 리워드
            </p>
            <div className={'flex items-center gap-3'}>
              <div className={'text-front2 font-bold'}>
                <span className={'text-2xl'}>
                  {Number(userMarketInfo[selected].reward).toFixed(2)}
                </span>
                <span className={'text-lg'}>USDT</span>
              </div>
              <Button className={'text-md h-fit rounded-4xl py-1'}>
                <Link
                  href={`/withdraw?mk=${userMarketInfo[selected].marketName}`}
                >
                  출금
                </Link>
              </Button>
            </div>
          </div>
          <div
            className={
              'w-full md:w-80 bg-primary md:bg-transparent flex items-center justify-between py-2 md:py-0 px-7 cursor-pointer'
            }
            onClick={() =>
              router.push(`/history?mk=${userMarketInfo[selected].marketName}`)
            }
          >
            <CoinIcon width={35} height={35} />
            <p className={'text-white font-bold'}>나의 누적 환급액 확인하기</p>
            <ArrowBottomIcon
              width={15}
              height={15}
              className={'rotate-270'}
              color={'#fff'}
            />
          </div>
        </div>
        <div>
          <div
            className={
              'flex justify-between md:mx-7 mx-0 mt-5 pb-2 border-b border-b-front4 mb-2'
            }
          >
            <p className={'text-lg font-bold'}>제휴 거래소</p>
            <div
              className={'flex items-center gap-2 cursor-pointer'}
              onClick={() => router.push('/uidlink')}
            >
              <PlusIcon width={15} height={15} />
              <p className={'text-front2 font-semibold'}>거래소 추가</p>
            </div>
          </div>
          <ul className={'md:mx-7 mx-0'}>
            {userMarketInfo.map((item, index) => (
              <li
                className={'w-full flex items-center py-3 cursor-pointer'}
                key={index}
                onClick={() => {
                  setSelected(index);
                }}
              >
                <div className={'flex items-center md:gap-10 gap-2 mr-auto'}>
                  <div className={'flex items-center gap-2'}>
                    <div>{getMarketIcon(item.marketName, 30, 30)}</div>
                    <p
                      className={`font-semibold md:text-base text-sm ${selected === index ? 'text-primary' : ''}`}
                    >
                      {MARKET_NAME[item.marketName] || ''}
                    </p>
                  </div>
                  <span className={'block w-[2px] h-[20px] bg-front4'}></span>
                  <p className={'font-semibold md:text-base text-sm'}>
                    UID {item.uid}
                  </p>
                </div>

                <p className={'font-semibold md:text-base text-sm mr-2'}>
                  {item.reward.toFixed(2)} USDT
                </p>
                <p
                  className={
                    'cursor-pointer font-semibold text-primary md:text-base text-sm'
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    router.push(
                      `/history/exchangeLinkDetail?mk=${item.marketName}`,
                    );
                  }}
                >
                  정보 보기
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AuthenticatedView;

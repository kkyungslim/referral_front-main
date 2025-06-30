import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import Money from '@/components/icons/Money';
import BellIcon2 from '@/components/icons/BellIcon2';
import { gsap } from 'gsap';
import { getMarketButtonIcon } from '@/components/icons/IconUtil';
import { PaybackTestResultData } from '@/app/payback/components/PayBackResult';
import { formatNumber } from '@/lib/utils';

const markets: string[] = [
  'Bybit',
  'Bitget',
  'OKX',
  'BingX',
  'GateIO',
  'HTX',
] as const;

function getFreqStr(freq: number) {
  switch (freq) {
    case 1:
      return '하루 1회 미만';
    case 2:
      return '하루 1회 ~ 2회 거래';
    case 3:
      return '하루 2회 ~ 5회 거래';
    case 5:
      return '하루 5회 ~ 10회 거래';
    case 10:
      return '하루 10회 이상 거래';
  }

  return '데이터를 불러오지 못했습니다.';
}

function Result4({ resultData }: { resultData: PaybackTestResultData }) {
  const { resultValue, leverage, selectedMarket, seed, transactionFreq } =
    resultData;

  // cardDivRefs를 (HTMLDivElement | null)[]로 타입 지정
  const cardDivRefs = useRef<(HTMLDivElement | null)[]>([]);
  const usdRate = 1372;
  const usdtPerMonth = (resultValue * 30) / usdRate;
  useEffect(() => {
    // 카드 내 div들에 대해 애니메이션 적용
    cardDivRefs.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 }, // 시작 위치 (밑에서 위로)
          {
            opacity: 1,
            y: 0, // 끝 위치 (원래 위치)
            duration: 0.5,
            delay: index * 0.2, // 각 div마다 0.2초씩 지연
            ease: 'ease.out',
          },
        );
      }
    });
  }, []);

  return (
    <>
      <div className={'text-center'}>
        <h2 className={'md:text-3xl text-[28px]'}>
          6개월 간 나의 <span className={'text-primary'}>페이백 청구서</span>
        </h2>
        <p className={'text-front2 font-semibold mt-3'}>
          테더베이스 이용시, 아래 수수료를 아낄 수 있어요!
        </p>
      </div>
      <Card className={'gap-4 mt-7 mb-4'}>
        <div
          ref={(el) => {
            cardDivRefs.current[0] = el;
          }} // 첫 번째 카드 내 div
          className={'flex items-center justify-between '}
        >
          <p
            className={
              'max-w-[70px] py-1 w-full rounded-4xl font-semibold text-sm text-front2'
            }
          >
            거래소
          </p>
          {getMarketButtonIcon(markets[selectedMarket], 80, 37)}
        </div>
        <div
          ref={(el) => {
            cardDivRefs.current[1] = el;
          }} // 두 번째 카드 내 div
          className={'flex items-center justify-between '}
        >
          <p
            className={
              'max-w-[70px] py-1 w-full rounded-4xl font-semibold text-sm text-front2'
            }
          >
            레버리지
          </p>
          <p className={''}>{leverage} X</p>
        </div>
        <div
          ref={(el) => {
            cardDivRefs.current[2] = el;
          }} // 세 번째 카드 내 div
          className={'flex items-center justify-between '}
        >
          <p
            className={
              'max-w-[70px] py-1 w-full rounded-4xl font-semibold text-sm text-front2'
            }
          >
            시드
          </p>
          <p className="">{formatNumber(Math.floor(seed))} USDT</p>
        </div>
        <div
          ref={(el) => {
            cardDivRefs.current[3] = el;
          }} // 네 번째 카드 내 div
          className={'flex items-center justify-between '}
        >
          <p
            className={
              'max-w-[70px] py-1 w-full rounded-4xl font-semibold text-sm text-front2'
            }
          >
            거래빈도
          </p>
          <p className={''}>{getFreqStr(transactionFreq)}</p>
        </div>
        <div
          ref={(el) => {
            cardDivRefs.current[4] = el;
          }} // 다섯 번째 카드 내 div
          className={'border-t border-b py-3'}
        >
          <p className={'text-front2 font-semibold'}>
            6개월 기준 예상 페이백 금액
          </p>
          <div className={'flex items-center justify-end'}>
            <h3 className={'text-primary mt-2'}>
              {(resultValue * 180).toLocaleString(undefined, {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
              원
            </h3>
          </div>
        </div>
        <div
          ref={(el) => {
            cardDivRefs.current[5] = el;
          }} // 여섯 번째 카드 내 div
          className={'flex justify-between items-center'}
        >
          <p className={'text-front2 font-semibold'}>테더베이스 기준 금액</p>
          <p className={'font-bold'}>
            {(usdtPerMonth * 6).toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}{' '}
            USDT
          </p>
        </div>
      </Card>
      <Card className={'gap-4 flex-row items-center justify-start'}>
        <div
          ref={(el) => {
            cardDivRefs.current[6] = el;
          }} // 일곱 번째 카드 내 div
          className={'flex items-center gap-2'}
        >
          <BellIcon2 width={25} height={25} />
        </div>
        <div
          ref={(el) => {
            cardDivRefs.current[7] = el;
          }} // 여덟 번째 카드 내 div
          className={'flex items-center gap-1 '}
        >
          <p className={'font-semibold text-front2 text-sm'}>
            내가 받을 수 있는 페이백 꼭 확인해요! 페이백 없는 거래는 할 때마다
            손해를 보는 것과 같아요
          </p>
        </div>
      </Card>
    </>
  );
}

export default Result4;

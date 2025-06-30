import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import Money from '@/components/icons/Money';
import { gsap } from 'gsap';
import { PaybackTestResultData } from "@/app/payback/components/PayBackResult";

// 최근 N개월 'YY년 MM월' 배열 생성
function getRecentMonths(count = 6) {
  const result: string[] = [];
  const date = new Date();
  for (let i = 0; i < count; i++) {
    const year = String(date.getFullYear()).slice(2);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    result.unshift(`${year}년 ${month}월`);
    date.setMonth(date.getMonth() - 1);
  }
  return result;
}

function Result2({ resultData }: { resultData: PaybackTestResultData }) {
  const { resultValue, leverage, selectedMarket, seed, transactionFreq } = resultData;
  const cardDivRefs = useRef<(HTMLDivElement | null)[]>([]);
  const months = getRecentMonths(6);
  const usdRate = 1372;
  const usdtPerMonth = (resultValue * 30) / usdRate;

  const [visibleCount, setVisibleCount] = useState(3); // ★ 처음엔 3개월만

  useEffect(() => {
    gsap.utils.toArray('.dotBox span').forEach((dot: any, index) => {
      gsap.fromTo(
        dot,
        { backgroundColor: '#8f8f8f' },
        {
          backgroundColor: '#cccccf',
          repeat: -1,
          yoyo: true,
          duration: 1,
          delay: index * 0.3,
        },
      );
    });

    cardDivRefs.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: index * 0.2,
            ease: 'ease.out',
          },
        );
      }
    });
  }, [visibleCount]);

  return (
    <>
      <div className={'text-center'}>
        <h3>
          <span className={'text-primary'}>페이백</span>을 받지 않는다면 계속
          손실돼요.
        </h3>
        <p className={'text-front2 font-semibold mt-3'}>
          손실없이 환급액 계속 챙겨봐요.
        </p>
      </div>
      <Card className={'gap-4 mt-7'}>
        <p
          ref={(el) => {
            cardDivRefs.current[0] = el;
          }}
          className={'text-left text-front2 font-semibold'}
        >
          6개월 기준 예상 페이백 금액
        </p>
        <div
          ref={(el) => {
            cardDivRefs.current[1] = el;
          }}
          className={'flex items-center justify-between'}
        >
          <Money width={30} height={30} />
          <h3 className={'text-primary'}>
            {(resultValue * 180).toLocaleString(undefined, {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
            원
          </h3>
        </div>
        <div
          ref={(el) => {
            cardDivRefs.current[2] = el;
          }}
          className={'flex items-center justify-between pt-4 border-t'}
        >
          <p className={'font-semibold text-front2'}>테더베이스 기준 금액</p>
          <p className={'font-bold'}>
            {(usdtPerMonth * 6).toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}{' '}
            USDT
          </p>
        </div>
      </Card>
      <Card className={'gap-0 bg-transparent shadow-none border-none'}>
        {months.slice(0, visibleCount).map((month, idx) => (
          <div
            ref={(el) => {
              cardDivRefs.current[3 + idx] = el;
            }}
            key={month}
            className={
              'flex justify-between items-center border-b py-3' +
              (idx === visibleCount - 1 ? ' last:border-0' : '')
            }
          >
            <p className={'text-front2 font-semibold'}>{month}</p>
            <p className={'text-primary font-bold'}>
              -
              {usdtPerMonth.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}{' '}
              USDT
            </p>
          </div>
        ))}
      </Card>
      {/* dotBox는 visibleCount === 3일때만 표시 */}
      {visibleCount === 3 && (
        <div
          className="dotBox flex flex-col items-center gap-2 mb-6 cursor-pointer"
          onClick={() => setVisibleCount(6)}
        >
          {[...Array(3)].map((_, index) => (
            <span
              className={'w-[10px] h-[10px] rounded-4xl'}
              key={index}
            ></span>
          ))}
        </div>
      )}
      <p className={'text-center text-front2 text-sm'}>
        *실시간 환율이 적용된 금액입니다
      </p>
    </>
  );
}

export default Result2;

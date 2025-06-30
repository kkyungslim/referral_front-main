import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { gsap } from 'gsap';
import { PaybackTestResultData } from "@/app/payback/components/PayBackResult";

// N개월 전의 "YY년 MM월" 배열 만들기
function getRecentMonths(count: number): string[] {
  const arr = [];
  const now = new Date();
  for (let i = 0; i < count; i++) {
    const d = new Date(now.getFullYear(), now.getMonth() + i, 1);
    const yy = String(d.getFullYear()).slice(2); // 뒤 2자리
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    arr.push(`${yy}년 ${mm}월`);
  }
  return arr;
}

function Result2({ resultData }: { resultData: PaybackTestResultData }) {
  const { resultValue, leverage, selectedMarket, seed, transactionFreq } = resultData;
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  // 최근 6개월
  const months = getRecentMonths(6);

  useEffect(() => {
    contentRefs.current.forEach((el, index) => {
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
  }, []);

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
      <Card className={'gap-0 mt-7'}>
        {months.map((month, idx) => (
          <div
            ref={(el) => {
              contentRefs.current[idx] = el;
            }}
            className={
              'flex justify-between items-center border-b py-3' +
              (idx === months.length - 1 ? ' last:border-0' : '')
            }
            key={month}
          >
            <p className={'text-front2 font-semibold'}>{month}</p>
            <p className={'text-primary font-bold'}>
              -{((resultValue * 30) / 1372).toFixed(2)} USDT
            </p>
          </div>
        ))}
      </Card>
      <p className={'text-front2 text-sm text-center mt-8 mb-8'}>
        *본 금액은 고객님이 입력하신 거래 데이터를 기반으로 한 Bybit 거래소의
        일반적인 커미션 금액입니다
      </p>
    </>
  );
}

export default Result2;

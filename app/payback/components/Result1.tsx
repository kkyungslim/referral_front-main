import { useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import Money from '@/components/icons/Money';
import CheckIcon from '@/components/icons/CheckIcon';
import BellIcon2 from '@/components/icons/BellIcon2';
import { formatNumber } from '@/lib/utils';
import { gsap } from 'gsap';
import { getMarketIcon } from '@/components/icons/IconUtil';
import { PaybackTestResultData } from '@/app/payback/components/PayBackResult';

const markets: string[] = [
  'Bybit',
  'Bitget',
  'OKX',
  'BingX',
  'GateIO',
  'HTX',
] as const;

function Result1({ resultData }: { resultData: PaybackTestResultData }) {
  const { resultValue, leverage, selectedMarket, seed, transactionFreq } =
    resultData;
  console.log(markets);
  // contentRefs를 (HTMLDivElement | null)[]로 타입 명시
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  // 애니메이션 효과
  useEffect(() => {
    // 각 카드에 대해 애니메이션 설정
    contentRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 }, // 시작 위치
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: index * 0.2,
            ease: 'ease.out',
          }, // 애니메이션
        );
      }
    });
  }, []); // 컴포넌트가 처음 렌더링 될 때만 애니메이션 실행

  return (
    <>
      <div className={'text-center'}>
        <h2 className={'md:text-3xl text-[28px]'}>
          내 페이백 <span className={'text-primary'}>예상 금액</span>은?
        </h2>
        <p className={'text-front2 font-semibold mt-3'}>
          AI가 <span className={'text-black'}>43,132명</span>을 꼼꼼하게
          분석했어요.
        </p>
      </div>
      <div className={'flex flex-col gap-4 mt-7'}>
        {/* 첫 번째 카드 */}
        <div
          ref={(el) => {
            contentRefs.current[0] = el;
          }}
        >
          <Card className={'gap-4'}>
            <p className={'text-left text-front2 font-semibold'}>
              30일 기준 예상 페이백 금액
            </p>
            <div className={'flex items-center justify-between'}>
              <Money width={30} height={30} />
              <h3 className={'text-primary'}>
                {formatNumber((resultValue * 30).toFixed(0))}원
              </h3>
            </div>
            <div className={'flex items-center justify-between pt-4 border-t'}>
              <p className={'font-semibold text-front2'}>
                테더베이스 기준 금액
              </p>
              <p className={'font-bold'}>
                {formatNumber(((resultValue * 30) / 1372).toFixed(2))} USDT
              </p>
            </div>
          </Card>
        </div>

        {/* 두 번째 카드 */}
        <div
          ref={(el) => {
            contentRefs.current[1] = el;
          }}
        >
          <Card className={'gap-4 flex-row items-center justify-between'}>
            <div className={'flex items-center gap-2'}>
              {getMarketIcon(markets[selectedMarket], 35, 35)}
              <span className={'font-semibold'}>
                {markets[selectedMarket] === 'GateIO'
                  ? 'Gate'
                  : markets[selectedMarket]}
              </span>
            </div>
            <div className={'flex items-center gap-1'}>
              <CheckIcon width={25} height={25} />
              <p className={'font-semibold'}>일치율 90%</p>
            </div>
          </Card>
        </div>

        {/* 세 번째 카드 */}
        <div
          ref={(el) => {
            contentRefs.current[2] = el;
          }}
        >
          <Card className={'gap-4 flex-row items-center justify-start'}>
            <div className={'flex items-center gap-2'}>
              <BellIcon2 width={25} height={25} />
            </div>
            <div className={'flex items-center gap-1 '}>
              <p className={'font-semibold text-front2 text-sm'}>
                트레이더님과 비슷한 테더베이스 회원은 매 달{' '}
                <span className={'text-primary'}>
                  {formatNumber((resultValue * 30).toFixed(0))}
                </span>
                원을 페이백 받고 있어요.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Result1;

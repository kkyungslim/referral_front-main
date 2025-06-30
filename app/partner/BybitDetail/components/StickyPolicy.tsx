'use client';
import RocketSmallIcon from '@/components/icons/RocketSmallIcon';
import MoneyBagIcon from '@/components/icons/MoneyBagIcon';
import KeyIcon from '@/components/icons/KeyIcon';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import TooltipIcon from '@/components/icons/TooltipIcon';

// Tab 타입 정의
interface Tab {
  id: number;
  label: string;
}

interface StickyTabProps {
  tabRefs: React.RefObject<(HTMLDivElement | null)[]>; // RefObject 타입 정의
  tabs: Tab[]; // Tab 타입의 배열
}

const StickyPolicy: React.FC<StickyTabProps> = ({ tabRefs, tabs }) => {
  return (
    <div
      ref={(el: HTMLDivElement | null) => {
        if (el) {
          tabRefs.current[0] = el; // tabRefs에 el을 할당
        }
      }}
      data-value={tabs[0].id}
      className="my-6 py-6"
    >
      <h2 className={'mb-6'}>ByBit 페이백 정책</h2>
      <div className={'flex flex-col gap-3 mt-5 mb-10'}>
        <div className="flex gap-2 items-center">
          <div>
            <RocketSmallIcon width={50} height={50} />
          </div>
          <div>
            <p className="text-front2 font-bold">페이백 부스트</p>
            <h4 className="font-bold">
              수수료<span className="text-primary">40%</span> +{' '}
              <span className="text-primary">20%</span>(페이백 & 할인)
            </h4>
          </div>
        </div>
        <div className="flex gap-2 items-center mt-5">
          <div>
            <MoneyBagIcon width={50} height={50} />
          </div>
          <div>
            <div className="flex gap-2 items-center">
              <p className={'text-front2 font-bold'}>기본 페이백 혜택</p>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <TooltipIcon width={17} height={17} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className={'text-xs font-semibold'}>
                      대상: 선물거래 / USDT 거래쌍
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <h4 className="font-bold">
              수수료<span className="text-primary">40%</span> +{' '}
              <span className="text-primary">20%</span>(페이백 & 할인)
            </h4>
          </div>
        </div>
        <div className="flex gap-2 items-center mt-5">
          <div>
            <KeyIcon width={50} height={50} />
          </div>
          <div>
            <p className="text-front2 font-bold">페이백 혜택</p>
            <h4 className="font-bold">
              <span className="text-primary">VIP5</span> 수수료와 유사한 혜택
            </h4>
          </div>
        </div>
      </div>
      <div className={'relative'}>
        <div className={' grid grid-cols-3'}>
          <div className="flex flex-col">
            <div
              className={
                'bg-bg1 text-center min-h-[60px] flex items-center justify-center py-2'
              }
            >
              <span
                className={'text-front2 font-bold text-xs md:text-sm'}
              ></span>
            </div>
            <div
              className={
                'bg-bg1 text-center min-h-[60px] flex items-center justify-center py-2'
              }
            >
              <span className={'text-front2 font-semibold text-xs md:text-sm'}>
                30일
                <br />
                거래량 조건
              </span>
            </div>
            <div
              className={
                'bg-bg1 text-center min-h-[60px] flex items-center justify-center py-2'
              }
            >
              <span className={'text-front2 font-semibold text-xs md:text-sm'}>
                전일
                <br /> 보유자산 조건
              </span>
            </div>
            <div
              className={
                'bg-bg1 text-center min-h-[60px] flex items-center justify-center py-2'
              }
            >
              <span className={'text-front2 font-semibold text-xs md:text-sm'}>
                수수료
              </span>
            </div>
          </div>
          <div className={'flex flex-col'}>
            <div
              className={
                'bg-bg1 text-center min-h-[60px] flex items-center justify-center py-2'
              }
            >
              <span className={'text-front2 font-semibold text-sm md:text-lg'}>
                Bybit VIP5
              </span>
            </div>
            <div
              className={
                'text-center min-h-[60px] flex items-center justify-center py-2 border-b-3'
              }
            >
              <span className={'text-front2 font-semibold text-sm md:text-lg'}>
                $50,000,000
              </span>
            </div>
            <div
              className={
                'text-center min-h-[60px] flex items-center justify-center py-2 border-b-3'
              }
            >
              <span className={'text-front2 font-semibold text-sm md:text-lg'}>
                조건없음
              </span>
            </div>
            <div
              className={
                'text-center min-h-[60px] flex items-center justify-center py-2 border-b-3'
              }
            >
              <span className={'text-front2 font-semibold text-sm md:text-lg'}>
                0.0320%
              </span>
            </div>
          </div>
          <div className={'flex flex-col'}>
            <div
              className={
                'w-1/3 h-full border-3 border-primary absolute top-0 right-0 z-10'
              }
            ></div>
            <div
              className={
                'bg-bg1 text-center min-h-[60px] flex items-center justify-center py-2'
              }
            >
              <span className={'text-primary font-bold text-sm md:text-lg'}>
                테더베이스 페이백
              </span>
            </div>
            <div
              className={
                'text-center min-h-[60px] flex items-center justify-center py-2 border-b-3'
              }
            >
              <span className={'text-primary font-bold text-sm md:text-lg'}>
                조건 없음
              </span>
            </div>
            <div
              className={
                'text-center min-h-[60px] flex items-center justify-center py-2 border-b-3'
              }
            >
              <span className={'text-primary font-bold text-sm md:text-lg'}>
                조건 없음
              </span>
            </div>
            <div
              className={
                'text-center min-h-[60px] flex items-center justify-center py-2 border-b-3'
              }
            >
              <span className={'text-primary font-bold text-sm md:text-lg'}>
                0.0264%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyPolicy;

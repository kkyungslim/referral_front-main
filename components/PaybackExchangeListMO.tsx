'use client';
import GoodIcon from '@/components/icons/GoodIcon';
import TrophyIcon from '@/assets/icons/trophyIcon.svg';
import FireIcon from '@/components/icons/FireIcon';
import InfiniteIcon from '@/components/icons/InfiniteIcon';
import ChartIcon from '@/assets/icons/chartIcon.svg';
import { Badge } from '@/components/ui/badge';
import { PaybackExchangeData, Tab, TEvent } from '@/lib/types';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

function PaybackExchangeListMO({
                                 data,
                                 value,
                                 serverEventData,
                               }: {
  data: PaybackExchangeData[];
  value: Tab['value'];
  serverEventData: TEvent[];
}) {
  const router = useRouter();

  // ✅ 서버 거래소 이름 → 프론트 거래소 이름 매핑 테이블
  const eventNameMap: Record<string, string> = {
    GATEIO: 'Gate',
    BITGET: 'Bitget',
    BINGX: 'BingX',
    HTX: 'HTX',
    OKX: 'OKX'
  };

  const eventExchangeSet = new Set(
    (serverEventData ?? []).map((e) => {
      const upper = e.name.toUpperCase();
      return eventNameMap[upper] ?? e.name;
    })
  );

  return (
    <div className=" flex md:hidden flex-col gap-2">
      {(data ?? [])
        .filter((exchange) => {
          if (value === 'All') return true;
          if (value === 'Recommendation' && exchange.score > 9.5) return true;
          if (
            value === 'Event' &&
            eventExchangeSet.has(exchange.exchangeName)
          ) {
            return true;
          }
          if (
            value === 'Payback' &&
            parseInt(exchange.cashbackRate.replace('%', ''), 10) >= 60
          )
            return true;
          if (value === 'Designation' && exchange.limitPrice > 0.01)
            return true;
          if (value === 'Market' && exchange.marketPrice > 0.02) return true;
          return false;
        })
        .map((partner, index) => (
          <div
            className="flex justify-between items-center"
            key={index}
            onClick={() =>
              router.push(`/partner/${partner.exchangeName}Detail`)
            }
          >
            <div className="flex items-center gap-2">
              {partner.icon}
              <div>
                <strong>{partner.exchangeName}</strong>
                <p className="text-sm text-front2 flex items-center gap-1">
                  {partner.description}
                  {partner.description === '추천 거래소' ? (
                    <GoodIcon width={15} height={15} />
                  ) : partner.description === '최상위 거래소' ? (
                    <Image
                      src={TrophyIcon}
                      alt={'TrophyIcon'}
                      width={15}
                      height={15}
                    />
                  ) : partner.description === '인기 거래소' ? (
                    <FireIcon width={15} height={15} />
                  ) : partner.description === '100% 환급' ? (
                    <InfiniteIcon width={20} height={15} />
                  ) : partner.description === 'Rising 거래소' ? (
                    <Image
                      src={ChartIcon}
                      alt={'ChartIcon'}
                      width={15}
                      height={15}
                    />
                  ) : null}
                </p>
              </div>
            </div>
            {partner.mobilePaybackRate && (
              <div>
                <Badge>{partner.mobilePaybackRate}</Badge>
              </div>
            )}
          </div>
        ))}
    </div>
  );
}

export default PaybackExchangeListMO;

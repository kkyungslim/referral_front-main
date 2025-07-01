'use client';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import GoodIcon from '@/components/icons/GoodIcon';
import TrophyIcon from '@/components/icons/TrophyIcon';
import FireIcon from '@/components/icons/FireIcon';
import InfiniteIcon from '@/components/icons/InfiniteIcon';
import ChartIcon from '@/components/icons/ChartIcon';
import { Badge } from '@/components/ui/badge';
import { PaybackExchangeData, Tab, TEvent } from '@/lib/types';
import { useRouter } from 'next/navigation';

function PaybackExchangeListPC({
                                 data,
                                 value,
                                 serverEventData
                               }: {
  data: PaybackExchangeData[];
  value: Tab['value'];
  serverEventData: TEvent[];
}) {
  const router = useRouter();

  // ✅ 서버 이벤트 이름 → 프론트 이름 매핑 (필요 시 확장)
  const eventNameMap: Record<string, string> = {
    GATEIO: 'Gate',
    BITGET: 'Bitget',
    BINGX: 'BingX',
    HTX: 'HTX',
    OKX: 'OKX'
  };

  // ✅ 매핑된 프론트 거래소 이름으로 Set 생성
  const eventExchangeSet = new Set(
    (serverEventData ?? []).map((e) => {
      const upper = e.name.toUpperCase();
      return eventNameMap[upper] ?? e.name;
    })
  );

  return (
    <Table className={'md:table hidden'}>
      <TableHeader>
        <TableRow>
          <TableHead className="font-semibold text-black">거래소명</TableHead>
          <TableHead className="font-semibold text-black text-center">점수</TableHead>
          <TableHead className="font-semibold text-black text-center">페이백율%</TableHead>
          <TableHead className="font-semibold text-black text-center">거래 할인율%</TableHead>
          <TableHead className="font-semibold text-black text-center">1인 평균 환급금</TableHead>
          <TableHead className="font-semibold text-black text-center">지정가%</TableHead>
          <TableHead className="font-semibold text-black text-center">시장가%</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
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
            if (value === 'Market' && exchange.marketPrice > 0.02)
              return true;
            return false;
          })
          .map((partner, index) => (
            <TableRow
              className="cursor-pointer"
              key={index}
              onClick={() =>
                router.push(`/partner/${partner.exchangeName}Detail`)
              }
            >
              <TableCell className="flex -center gap-2">
                {partner.icon}
                <div>
                  <strong>{partner.exchangeName}</strong>
                  <p className="text-sm text-front2 flex items-center gap-1">
                    {partner.description}
                    {partner.description === '추천 거래소' ? (
                      <GoodIcon width={15} height={15} />
                    ) : partner.description === '최상위 거래소' ? (
                      <TrophyIcon width={18} height={15} />
                    ) : partner.description === '인기 거래소' ? (
                      <FireIcon width={15} height={15} />
                    ) : partner.description === '100% 환급' ? (
                      <InfiniteIcon width={20} height={15} />
                    ) : partner.description === 'Rising 거래소' ? (
                      <ChartIcon width={15} height={15} />
                    ) : null}
                  </p>
                </div>
              </TableCell>
              <TableCell className="text-center">
                <Badge className="min-w-8 rounded-4xl font-bold ">
                  {partner.score}
                </Badge>
              </TableCell>
              <TableCell className="font-semibold text-center">
                {partner.cashbackRate}
              </TableCell>
              <TableCell className="font-semibold text-center">
                {partner.discountRate}
              </TableCell>
              <TableCell className="font-semibold text-center">
                {partner.avgRefund}
              </TableCell>
              <TableCell className="font-semibold text-center">
                {partner.marketPrice}
              </TableCell>
              <TableCell className="font-semibold text-center">
                {partner.limitPrice}
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}

export default PaybackExchangeListPC;

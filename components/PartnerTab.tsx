import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BybitBoxIcon from '@/components/icons/BybitBoxIcon';
import BitgetBoxIcon from '@/components/icons/BitgetBoxIcon';
import GateIoBoxIcon from '@/components/icons/GateIoBoxIcon';
import BingXBoxIcon from '@/components/icons/BIngXBoxIcon';
import OKXBoxIcon from '@/components/icons/OKXBoxIcon';
import HTXBoxIcon from '@/components/icons/HTXBoxIcon';
import PaybackExchangeListPC from '@/components/PaybackExchangeListPC';
import PaybackExchangeListMO from '@/components/PaybackExchangeListMO';
import PaybackPartnerCarousel from '@/components/PaybackPartnerCarousel';
import { PaybackExchangeData, Tab, TEvent } from '@/lib/types';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { getMarketIcon } from '@/components/icons/IconUtil';

function PartnerTab({
  className,
  eventList,
}: {
  className?: string;
  eventList?: TEvent[];
}) {
  // const events = await APIEventList();
  const tabData: Tab[] = [
    {
      value: 'All',
      title: '전체',
    },
    {
      value: 'Recommendation',
      title: '추천',
    },
    {
      value: 'Event',
      title: '대회/이벤트 진행중',
    },
    {
      value: 'Payback',
      title: '페이백 많은',
    },
    {
      value: 'Designation',
      title: '지정가 순',
    },
    {
      value: 'Market',
      title: '시장가 순',
    },
  ];

  const data: PaybackExchangeData[] = [
    {
      exchangeName: 'Bitget',
      description: '100% 환급', // 새로운 description 추가
      score: 9.7,
      cashbackRate: '60%',
      discountRate: '50% 할인',
      avgRefund: '754,000 KRW',
      limitPrice: 0.012,
      marketPrice: 0.004,
      icon: <BitgetBoxIcon width={35} height={35} />,
      mobilePaybackRate: '60% 페이백 + 50% 할인',
    },
    {
      exchangeName: 'Gate',
      description: '100% 환급', // 새로운 description 추가
      score: 9.2,
      cashbackRate: '75%',
      discountRate: '-',
      avgRefund: '866,000 KRW',
      limitPrice: 0.01875,
      marketPrice: 0.005,
      icon: <GateIoBoxIcon width={35} height={35} />,
      mobilePaybackRate: '75% 페이백',
    },
    {
      exchangeName: 'BingX',
      description: '추천 거래소', // 새로운 description 추가
      score: 9.3,
      cashbackRate: '60%',
      discountRate: '-',
      avgRefund: '130,000 KRW',
      limitPrice: 0.0275,
      marketPrice: 0.011,
      icon: <BingXBoxIcon width={35} height={35} />,
      mobilePaybackRate: '60% 페이백',
    },
    {
      exchangeName: 'HTX',
      description: '추천 거래소', // 새로운 description 추가
      score: 9.0,
      cashbackRate: '54%',
      discountRate: '-',
      avgRefund: '44,000 KRW',
      limitPrice: 0.009,
      marketPrice: 0.028,
      icon: <HTXBoxIcon width={35} height={35} />,
      mobilePaybackRate: '54% 페이백',
    },
    {
      exchangeName: 'Bybit',
      description: '최상위 거래소',
      score: 9.9,
      cashbackRate: '40%',
      discountRate: '20% 할인',
      avgRefund: '266,000 KRW',
      limitPrice: 0.0264,
      marketPrice: 0.096,
      icon: <BybitBoxIcon width={35} height={35} />,
      mobilePaybackRate: '40% 페이백 + 20% 할인',
    },
    {
      exchangeName: 'OKX',
      description: 'Rising 거래소', // 새로운 description 추가
      score: 9.5,
      cashbackRate: '54%',
      discountRate: '-',
      avgRefund: '240,000 KRW',
      limitPrice: 0.009,
      marketPrice: 0.023,
      icon: <OKXBoxIcon width={35} height={35} />,
      mobilePaybackRate: '54% 페이백',
    },
  ];
  const serverEventData = eventList
    ? eventList.map((event) => {
        return {
          name: event.marketName,
          icon: getMarketIcon(event.marketName, 45, 45),
          title: event.name,
          description: event.description,
          category: event.type,
        };
      })
    : [];
  return (
    <div className={className}>
      <PaybackPartnerCarousel eventData={serverEventData} />
      <Tabs defaultValue="All" className="w-full overflow-hidden">
        <ScrollArea className={'w-full whitespace-nowrap '}>
          <TabsList className={` bg-transparent p-0 gap-3 `}>
            {tabData.map((item) => (
              <TabsTrigger
                value={item.value}
                key={item.value}
                className={`bg-bg1 border-0 h-auto rounded-4xl data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-none`}
              >
                {item.title}
              </TabsTrigger>
            ))}
          </TabsList>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        {tabData.map((item) => (
          <TabsContent value={item.value} key={item.value}>
            <PaybackExchangeListPC data={data} value={item.value} />
            <PaybackExchangeListMO data={data} value={item.value} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export default PartnerTab;

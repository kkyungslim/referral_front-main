'use client';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import ClockIcon from '@/components/icons/ClockIcon';
import { DefaultProps } from '@/lib/types';
import eventBanner from '@/assets/images/eventbanner.png';

const tabData = [

  { value: 'Bitget' },
  { value: 'Gate' },
  { value: 'BingX' },
  { value: 'HTX' },
  { value: 'OKX' },
  { value: 'ByBit' },
];

function EventTab({ eventList }: DefaultProps) {
  return (
    <section>
      <div className="container mx-auto pb-12">
        <div className="text-center mb-5">
          <h2>진행 중인 이벤트</h2>
          <p className="text-front2 font-semibold">
            거래소에서 진행하고 있는 이벤트입니다.
          </p>
        </div>
        <Tabs defaultValue="Bitget" className="w-full">
          <ScrollArea className="w-full whitespace-nowrap">
            <TabsList className="w-full bg-transparent rounded-none p-0 gap-3 border-b-3">
              {tabData.map((item) => (
                <TabsTrigger
                  value={item.value}
                  key={item.value}
                  className="bg-transparent flex-0 font-bold border-b-3 mb-[-5px] h-auto rounded-none data-[state=active]:border-b-primary data-[state=active]:text-primary data-[state=active]:shadow-none"
                >
                  {item.value}
                </TabsTrigger>
              ))}
            </TabsList>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>

          {tabData.map((item) => {
            const filteredEvents =
              eventList?.filter((el) => {
                const market = el.marketName.toLowerCase();

                  if (item.value.toLowerCase() === 'gate') {
                    return market === 'gate' || market === 'gateio';
                  }
            
                  return market === item.value.toLowerCase();
                }) ?? [];

            return (
              <TabsContent
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5"
                value={item.value}
                key={item.value}
              >
                {filteredEvents.length === 0 ? (
                  <p className={'col-span-full my-5 text-center text-front2'}>
                    현재 진행중인 이벤트가 없습니다.
                  </p>
                ) : (
                  filteredEvents.map((el, i) => (
                    <div
                      className="flex flex-col cursor-pointer"
                      onClick={() => {
                        let url = el.targetUrl;
                        if (
                          !(
                            url.startsWith('http://') ||
                            url.startsWith('https://')
                          )
                        ) {
                          url = 'https://' + url;
                        }
                        window.open(url, '_blank');
                      }}
                      key={`event ${i}`}
                    >
                      <div className={'rounded-2xl overflow-hidden mb-2'}>
                        <Image
                          src={el.imageUrl ? el.imageUrl : eventBanner}
                          alt={el.marketName}
                          width={210}
                          height={210}
                        />
                      </div>
                      <h5 className="my-1 truncate">{el.name}</h5>
                      <div className="flex items-center gap-1">
                        <ClockIcon width={17} height={17} />
                        <p className="text-front2 md:text-base text-sm">
                          {el.endDate}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}

export default EventTab;

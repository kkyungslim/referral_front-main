import { Badge } from '@/components/ui/badge';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import ClockIcon from '@/components/icons/ClockIcon';
import { EventListResponse } from '@/lib/types';
import eventBanner from '@/assets/images/eventbanner.png';

// Tab 타입 정의
interface Tab {
  id: number;
  label: string;
}

interface StickyEventProps {
  tabRefs: React.RefObject<(HTMLDivElement | null)[]>; // tabRefs의 타입 명시
  tabs: Tab[]; // Tab 타입 배열
  eventList?: EventListResponse | undefined;
}

function StickyEvent({ tabRefs, tabs, eventList }: StickyEventProps) {
  const exchange =
    eventList?.filter((item) => item.marketName === 'GATEIO') ?? [];
  return (
    <div
      ref={(el: HTMLDivElement | null) => {
        if (el) {
          tabRefs.current[3] = el; // tabRefs에 el을 할당
        }
      }} // el 타입을 명확히 지정
      data-value={tabs[3].id}
      className="my-6 py-6"
    >
      <div className={'mb-6'}>
        <h2>Gate 이벤트</h2>
        <p className={'text-front2'}>테더베이스 트레이더님만 참여 가능해요!</p>
      </div>
      <div>
        <div className={'mb-3'}>
          <Badge className={'text-md rounded-xl font-semibold'}>
            현재 진행중
          </Badge>
        </div>
        <Swiper
          spaceBetween={15}
          grabCursor={true}
          slidesPerView={2}
          breakpoints={{
            721: {
              slidesPerView: 4, // 720px 이상에서는 4개
            },
            720: {
              slidesPerView: 2, // 720px 미만에서는 2개
            },
          }}
        >
          {exchange.length > 0 ? (
            exchange.map((item, index) => (
              <SwiperSlide key={`event ${index}`}>
                <div className={'flex flex-col gap-2'}>
                  <div className={'w-fit rounded-2xl overflow-hidden'}>
                    <Image
                      src={item.imageUrl ? item.imageUrl : eventBanner}
                      alt={'eventBanner'}
                      width={150}
                      height={150}
                    />
                  </div>
                  <div className={'flex flex-col gap-1'}>
                    <h5 className={'font-semibold text-sm md:text-base'}>
                      {item.name}
                    </h5>
                    <div className={'flex items-center gap-1'}>
                      <ClockIcon width={15} height={15} />
                      <p className={'text-front2 text-xs md:text-sm'}>
                        {item.endDate} 남음
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <p className={'my-5 text-center text-front2'}>
              현재 진행중인 이벤트가 없습니다.
            </p>
          )}
        </Swiper>
      </div>
    </div>
  );
}

export default StickyEvent;

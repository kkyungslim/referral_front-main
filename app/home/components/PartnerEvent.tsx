'use client';
import Link from 'next/link';
import Image from 'next/image';
import ClockIcon from '@/components/icons/ClockIcon';
import { DefaultProps } from '@/lib/types';
import eventBanner from '@/assets/images/eventbanner.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import textImage from '@/assets/images/TESTBanner.png';

function PartnerEvent({ eventList }: DefaultProps) {
  return (
    <section className="">
      <div className="container mx-auto mt-20">
        <div className="flex justify-between items-center md:items-end mb-5">
          <h2 className={'text-lg md:text-2xl'}>
            <span className="text-primary ">테더베이스</span>와 함께 하는 이벤트!
          </h2>
          <Link href={'/event'} className="text-front2">
            전체보기 &gt;
          </Link>
        </div>
        <div>
          <Swiper
            breakpoints={{
              768: {
                slidesPerView: 4, // md 이상
              },
              0: {
                slidesPerView: 2, // 기본 (모바일 등)
              },
            }}
            spaceBetween={15}
            loop={eventList && eventList.length > 4}
          >
            {eventList &&
              eventList.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="flex flex-col m-auto w-fit cursor-pointer"
                    onClick={() => {
                      let url = item.targetUrl;
                      if (
                        !(
                          url.startsWith('http://') ||
                          url.startsWith('https://')
                        )
                      ) {
                        url = 'https://' + url;
                      }
                      window.open(url, '_blank');
                      window.open(url, '_blank');
                    }}
                  >
                    <div className={'rounded-2xl overflow-hidden mb-2'}>
                      <Image
                        src={item.imageUrl ? item.imageUrl : eventBanner}
                        alt={item?.name}
                        width={188}
                        height={188}
                      />
                    </div>
                    {/*<Badge className="mt-1 rounded-xl">{item.badge}</Badge>*/}
                    <h5 className="my-1 truncate">{item.name}</h5>
                    <div className="flex items-center gap-1">
                      <ClockIcon width={17} height={17} />
                      <p className="text-front2 md:text-base text-xs">
                        {item.endDate}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default PartnerEvent;

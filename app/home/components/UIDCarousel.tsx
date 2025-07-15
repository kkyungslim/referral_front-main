import React from 'react';
import AutoScroll from 'embla-carousel-auto-scroll';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { PartnerData } from '@/lib/types';

function UIDCarousel({
  partnerData,
}: {
  partnerData: PartnerData[];
  partnerActive: PartnerData;
}) {
  return (
    <div className="flex items-center gap-5 w-full">
      <strong className="text-white shrink-[0]">1인 평균 환급액</strong>
      <div className="overflow-hidden w-full">
        <Carousel
          className="w-full"
          plugins={[
            AutoScroll({
              speed: 1.5,
              startDelay: 0,
              stopOnMouseEnter: true,
              stopOnFocusIn: false,
              stopOnInteraction: false,
            }),
          ]}
          opts={{
            align: 'center',
            loop: true,
          }}
        >
          <CarouselContent className="-ml-1 gap-3">
            {[...Array(2)].flatMap((_, i) =>
              partnerData.map((item) => (
                <CarouselItem
                  className="basis-auto pl-0 last-of-type:mr-3"
                  key={`uid-search-carousel-${item.id}-${i}`}
                >
                  <div
                    className="text-base inline-block bg-warning px-2 rounded-md text-center text-white font-bold"
                  >
                    {item.name}{' '}
                    <span className="text-black">{item.amount}</span>
                  </div>
                </CarouselItem>
              )),
            )}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

export default UIDCarousel;

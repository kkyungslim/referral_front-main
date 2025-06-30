'use client';
import AutoScroll from 'embla-carousel-auto-scroll';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import React from 'react';
import ByBitBtnIcon from '@/components/icons/ByBitBtnIcon';
import BitgetBtnIcon from '@/components/icons/BitgetBtnIcon';
import GateIoBtnIcon from '@/components/icons/GateIoBtnIcon';
import BingXBtnIcon from '@/components/icons/BingXBtnIcon';
import OKXBtnIcon from '@/components/icons/OKXBtnIcon';
import HTXBtnIcon from '@/components/icons/HTXBtnIcon';

const flowData = [
  <ByBitBtnIcon width={100} height={46} />,
  <BitgetBtnIcon width={100} height={46} />,
  <GateIoBtnIcon width={100} height={46} />,
  <BingXBtnIcon width={100} height={46} />,
  <OKXBtnIcon width={100} height={46} />,
  <HTXBtnIcon width={100} height={46} />,
];

function FlowCarousel({ speed }: { speed: number }) {
  return (
    <div className="overflow-hidden w-full">
      <Carousel
        className="w-full"
        plugins={[
          AutoScroll({
            speed: speed,
            startDelay: 0,
            stopOnMouseEnter: false,
            stopOnFocusIn: false,
            stopOnInteraction: false,
          }),
        ]}
        opts={{
          align: 'center',
          loop: true,
        }}
      >
        <CarouselContent className="gap-4">
          {[...Array(2)].flatMap((_, i) =>
            flowData.map((item, index) => (
              <CarouselItem
                className="basis-auto pl-0 last-of-type:mr-4"
                key={`${i}-${index}`}
              >
                {item}
              </CarouselItem>
            )),
          )}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default FlowCarousel;

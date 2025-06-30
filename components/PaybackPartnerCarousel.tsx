'use client';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import HeartIcon from '@/components/icons/HeartIcon';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import BellIcon from '@/components/icons/BellIcon';
import Autoplay from 'embla-carousel-autoplay';
import { useState } from 'react';
import { EventData } from '@/lib/types';
import BitgetBoxIcon from '@/components/icons/BitgetBoxIcon';
import GateIoBoxIcon from '@/components/icons/GateIoBoxIcon';
import { useRouter } from 'next/navigation';

function CarouselPart({ eventData }: { eventData: EventData[] }) {
  const router = useRouter();
  return (
    <CarouselContent>
      {eventData.map((item, index) => (
        <CarouselItem
          className="flex items-center gap-2 cursor-pointer"
          key={`carousel-${index}`}
          onClick={() => router.push(`/partner/${item.exChangeName}Detail`)}
        >
          {item.icon}
          <div>
            <p className="text-front2 font-semibold text-xs">{item.title}</p>
            <p className="font-bold">
              {item.hashtags &&
                item.hashtags.map((tag, index) => (
                  <span
                    key={`carousel-hashtag-${item.name}-${index}`}
                    className="text-primary mr-1"
                  >
                    #{tag}
                  </span>
                ))}
              {/*{item.description}*/}
            </p>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
  );
}

function PaybackPartnerCarousel({ eventData }: { eventData: EventData[] }) {
  const [selected, setSelected] = useState([0, 0]);

  // TODO 서버 데이터가 아닌 일반 고정 데이터로 변경하기
  const popularEventFixed: EventData[] = [
    {
      name: '거래소 이벤트!',
      icon: <BitgetBoxIcon width={30} height={30} />,
      title: '비트겟 거래소 이벤트',
      category: '인기 거래소',
      description: '',
      hashtags: ['Bitget', 'HOT', '거래량 많은'],
      exChangeName: 'Bitget',
    },
  ];

  const recommendEventFixed: EventData[] = [
    {
      name: '거래소 이벤트!',
      icon: <GateIoBoxIcon width={30} height={30} />,
      title: 'Gate 거래소 이벤트',
      category: '추천 거래소',
      description: '',
      hashtags: ['Gate', '테더베이스 추천'],
      exChangeName: 'Gate',
    },
  ];

  const popularEvents = eventData.filter(
    (item) => item.category === '인기 거래소',
  );
  const recommendEvents = eventData.filter(
    (item) => item.category === '추천 거래소',
  );

  return (
    <div className="flex gap-3 mb-3">
      <Card className="md:flex hidden p-4 basis-1/2 border-primary gap-2">
        <CardHeader className="px-0">
          <h5 className="font-bold flex items-center gap-1">
            <HeartIcon width={25} height={25} />
            인기 거래소
            <span className="text-primary">EVENT</span>
          </h5>
        </CardHeader>
        <CardContent className="px-0">
          <Carousel
            onCarouselScroll={(idx) => {
              // console.log('onCarouselScroll:', idx);
              setSelected((prev) => {
                const newSelected = [...prev];
                newSelected[0] = idx;
                return newSelected;
              });
            }}
            className="w-full"
            opts={{
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnMouseEnter: true,
                stopOnFocusIn: false,
                stopOnInteraction: false,
              }),
            ]}
          >
            <CarouselPart eventData={popularEventFixed}></CarouselPart>
          </Carousel>
        </CardContent>
      </Card>
      <Card className="md:flex hidden p-4 basis-1/2 border-primary gap-2">
        <CardHeader className="px-0">
          <h5 className="font-bold flex items-center gap-1">
            <BellIcon width={25} height={25} />
            추천 거래소
            <span className="text-primary">EVENT</span>
          </h5>
        </CardHeader>
        <CardContent className="px-0">
          <Carousel
            onCarouselScroll={(idx) => {
              // console.log('onCarouselScroll:', idx);
              setSelected((prev) => {
                const newSelected = [...prev];
                newSelected[1] = idx;
                return newSelected;
              });
            }}
            className="w-full"
            opts={{
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnMouseEnter: true,
                stopOnFocusIn: false,
                stopOnInteraction: false,
              }),
            ]}
          >
            <CarouselPart eventData={recommendEventFixed}></CarouselPart>
          </Carousel>
        </CardContent>
      </Card>
    </div>
  );
}

export default PaybackPartnerCarousel;

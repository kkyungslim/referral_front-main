'use client';

import { useState, useEffect, JSX } from 'react';
import BitgetBoxIcon from '@/components/icons/BitgetBoxIcon';
import BingXBoxIcon from '@/components/icons/BIngXBoxIcon';
import GateIoBoxIcon from '@/components/icons/GateIoBoxIcon';
import HTXBoxIcon from '@/components/icons/HTXBoxIcon';
import { formatNumber } from '@/lib/utils';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import OKXBoxIcon from '@/components/icons/OKXBoxIcon';

interface ExchangeData {
  exchange: string;
  icon: JSX.Element;
  uidNumber: number;
  paybackSum: number;
}

SwiperCore.use([Autoplay]);

function HostEvent() {
  const [fakeData, setFakeData] = useState<ExchangeData[]>([]);
  const exchangeRate = 1401;

  useEffect(() => {
    const exchanges: Omit<ExchangeData, 'uidNumber' | 'paybackSum'>[] = [
      {
        exchange: 'Bitget',
        icon: <BitgetBoxIcon width={30} height={30} />,
      },
      {
        exchange: 'HTX',
        icon: <HTXBoxIcon width={30} height={30} />,
      },
      {
        exchange: 'BingX',
        icon: <BingXBoxIcon width={30} height={30} />,
      },
      {
        exchange: 'Gate',
        icon: <GateIoBoxIcon width={30} height={30} />,
      },
      {
        exchange: 'OKX',
        icon: <OKXBoxIcon width={30} height={30} />,
      },
    ];

    const randomList: ExchangeData[] = Array.from({ length: 20 }, () => {
      const randomExchange =
        exchanges[Math.floor(Math.random() * exchanges.length)];
      return {
        ...randomExchange,
        uidNumber: Math.floor(Math.random() * 8999999999) + 1000000000, // 10자리 UID
        paybackSum: Math.floor(Math.random() * (1800 - 20 + 1)) + 20,
      };
    });

    setFakeData(randomList);
  }, []);

  return (
    <section>
      <div className="container mx-auto mt-20">
        <h2 className="mb-5 text-lg md:text-2xl">
          최근 <span className="text-primary">페이백</span> 내역
        </h2>
        <div className="flex justify-between items-center border-b py-2 mb-4">
          <div className="w-22 font-bold">
            <span>거래소</span>
          </div>
          <div className="w-25 text-center font-bold">
            <span>UID</span>
          </div>
          <div className="w-26 text-center font-bold">
            <span>페이백</span>
          </div>
        </div>
        <Swiper
          direction="vertical"
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          slidesPerView={3}
          className="h-[200px] w-full overflow-hidden"
        >
          {fakeData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-between h-full px-2">
                <div className="flex items-center w-22 gap-2">
                  {item.icon}
                  <span className="font-semibold">{item.exchange}</span>
                </div>
                <p className="w-25 text-center font-semibold">
                  **{String(item.uidNumber).slice(2, 5)}
                  {String(item.uidNumber).slice(-5, 8)}**
                </p>
                <div className="flex flex-col text-right">
                  <p className="font-semibold text-base md:text-[18px]">
                    {formatNumber(item.paybackSum)} USDT
                  </p>
                  <p className="font-semibold text-primary text-xs">
                    {Math.floor(
                      item.paybackSum * exchangeRate,
                    ).toLocaleString()}{' '}
                    KRW
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default HostEvent;

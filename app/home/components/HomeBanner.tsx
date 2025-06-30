import '@/assets/css/swiper.css';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import BitgetBoxIcon from '@/components/icons/BitgetBoxIcon';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';
import GateIoBoxIcon from '@/components/icons/GateIoBoxIcon';
import BingXBoxIcon from '@/components/icons/BIngXBoxIcon';
import HTXBoxIcon from '@/components/icons/HTXBoxIcon';
import BybitBoxIcon from '@/components/icons/BybitBoxIcon';
import OKXBoxIcon from '@/components/icons/OKXBoxIcon';
import LogoIcon from '@/components/icons/LogoIcon';

function HomeBanner() {
  const exchangeIcon = [
    { icon: <BitgetBoxIcon width={50} height={50} /> },
    { icon: <GateIoBoxIcon width={50} height={50} /> },
    { icon: <BingXBoxIcon width={50} height={50} /> },
    { icon: <HTXBoxIcon width={50} height={50} /> },
    { icon: <OKXBoxIcon width={50} height={50} /> },
    { icon: <BybitBoxIcon width={50} height={50} /> },
    { icon: <BitgetBoxIcon width={50} height={50} /> },
    { icon: <GateIoBoxIcon width={50} height={50} /> },
    { icon: <BingXBoxIcon width={50} height={50} /> },
    { icon: <HTXBoxIcon width={50} height={50} /> },
    { icon: <OKXBoxIcon width={50} height={50} /> },
    { icon: <BybitBoxIcon width={50} height={50} /> },
  ];
  useEffect(() => {
    // GSAP 애니메이션 설정: 360도 회전 애니메이션
    gsap.to('.home-banner-icon', {
      rotation: 360, // 360도 회전
      repeat: -1, // 무한 반복
      duration: 10, // 10초 동안 360도 회전
      ease: 'linear', // 부드럽게 회전
    });
  }, []);
  SwiperCore.use([Autoplay]);
  return (
    <section>
      <div className="container mx-auto mt-5">
        <div className={'w-full  bg-bg1 rounded-2xl overflow-hidden px-5'}>
          <div className="relative py-14  after:content-[''] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:pointer-events-none after:bg-[linear-gradient(90deg,#f1f1f5,hsla(0,0%,100%,0)_25%,hsla(0,0%,100%,0)_75%,#f1f1f5)] after:z-40">
            <div
              className={
                'w-fit h-fit absolute left-0 right-0 top-0 bottom-0 m-auto z-40'
              }
            >
              <LogoIcon width={95} height={95} />
            </div>
            <Swiper
              autoplay={{
                delay: 1000, // 슬라이드가 자동으로 넘어가는 시간 간격
                disableOnInteraction: false, // 사용자가 슬라이드를 넘겨도 autoplay 유지
              }}
              loop={true}
              slidesPerView={'auto'}
              centeredSlides={true}
              spaceBetween={50}
              className="home_banner justify-center"
            >
              {exchangeIcon.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className={'w-fit overflow-hidden rounded-4xl'}>
                    {item.icon}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div
            className={
              'relative flex flex-col justify-between items-center order-2'
            }
          >
            <div className={' text-center'}>
              <h2>
                <span className={'text-primary'}>테더베이스의 추천인 코드</span>
                로<br />
                가입한 UID 연동하기
              </h2>
              <p className={'text-front2 font-semibold my-4'}>
                TIP. 수수료 페이백 및 자체 이벤트를 통해 받은
                <br />
                USDT를 출금하기 위해서는 거래소 연동이 필요합니다.
              </p>
            </div>
            <Button className={'md:w-fit rounded-4xl h-fit py-3 mb-10'}>
              <Link href={'/uidlink'} className={'font-bold'}>
                UID 연동하기
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeBanner;

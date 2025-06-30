'use client';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '@/assets/css/swiper.css';
import 'swiper/css/effect-fade';

import Image from 'next/image';
import Link from 'next/link';
import { ServerBanner } from '@/lib/API';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import SwiperCore from 'swiper';

function BannerSwiper({ bannerList }: { bannerList: ServerBanner[] }) {
  const pathName = usePathname();
  const [activeIndex, setActiveIndex] = useState(0);
  SwiperCore.use([Autoplay]);
  return (
    <Swiper
      effect={'fade'}
      pagination={{ type: 'fraction' }}
      modules={[EffectFade, Pagination]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      spaceBetween={50}
      slidesPerView={1}
      className={`banner_swiper relative rounded-2xl ${
        pathName === '/partner'
          ? 'partner_swiper'
          : pathName === '/event'
            ? 'event_swiper'
            : ''
      }`}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // ✅ Swiper 인덱스 추적
    >
      {bannerList.map((banner: ServerBanner, index: number) => {
        const hasLink = !!banner?.targetUrl;

        const isActive = activeIndex === index;

        const BannerContent = (
          <div className="relative">
            {/* 이미지 */}
            <Image
              src={banner.pcImage}
              width={800}
              height={320}
              alt={`Banner ${banner.no}`}
              className="md:block hidden"
            />
            <Image
              src={banner.moImage}
              width={675}
              height={400}
              alt={`Banner ${index}`}
              className="md:hidden block"
            />

            {/* ✅ PC용 텍스트 */}
            <div className="absolute left-4 bottom-4 md:left-10 md:bottom-10 hidden md:block">
              <p
                className={`font-bold ${isActive ? 'fade-up' : ''}`}
                style={{
                  color: banner.titleColor,
                  fontSize: banner.titleFontSizePC ?? 28,
                }}
              >
                {banner.title}
              </p>
              <p
                className={`${isActive ? 'fade-up' : ''}`}
                style={{
                  color: banner.subTitleColor,
                  fontSize: banner.subTitleFontSizePC ?? 24,
                }}
              >
                {banner.subTitle}
              </p>
            </div>

            {/* ✅ MO용 텍스트 */}
            <div className="absolute left-4 bottom-4 md:left-10 md:bottom-10 block md:hidden">
              <p
                className={`font-bold ${isActive ? 'fade-up' : ''}`}
                style={{
                  color: banner.titleColor,
                  fontSize: banner.titleFontSizeMO ?? 20,
                }}
              >
                {banner.title}
              </p>
              <p
                className={`${isActive ? 'fade-up' : ''}`}
                style={{
                  color: banner.subTitleColor,
                  fontSize: banner.subTitleFontSizeMO ?? 16,
                }}
              >
                {banner.subTitle}
              </p>
            </div>
          </div>
        );

        return (
          <SwiperSlide key={index}>
            {hasLink ? (
              <Link
                href={banner.targetUrl ?? ''}
                target="_blank"
                rel="noopener noreferrer"
              >
                {BannerContent}
              </Link>
            ) : (
              <div className="relative cursor-default w-full h-fit md:h-[300px]">
                {BannerContent}
              </div>
            )}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default BannerSwiper;

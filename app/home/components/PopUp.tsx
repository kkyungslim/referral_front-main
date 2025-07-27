'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import popupBanner01 from '@/assets/images/popupBanner01.png';
import Image from 'next/image';
import Link from 'next/link';

function PopUp() {
  const [isOpen, setIsOpen] = useState(false);

  // 날짜 비교
  const isTodayDismissed = () => {
    const stored = localStorage.getItem('popup-dismissed-date');
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    return stored === today;
  };

  // 팝업 띄우기 조건
  useEffect(() => {
    if (!isTodayDismissed()) {
      setIsOpen(true);
    }
  }, []);

  // 스크롤 막기
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClose = () => setIsOpen(false);

  const handleDismissToday = () => {
    const today = new Date().toISOString().split('T')[0];
    localStorage.setItem('popup-dismissed-date', today);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50">
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/50"></div>
      <div className="max-w-[500px] h-fit w-full absolute top-0 bottom-0 left-0 right-0 m-auto z-10 bg-white rounded-2xl overflow-hidden">
        <Swiper className="mySwiper">
          <SwiperSlide>
            <Link href={'/futures'}><Image src={popupBanner01} alt="popupBanner01" /></Link>
          </SwiperSlide>
        </Swiper>
        <div className="grid grid-cols-2">
          <div
            className="text-center py-4 text-md font-bold text-primary/80 border-r-2 border-primary cursor-pointer"
            onClick={handleDismissToday}
          >
            <span>오늘 하루 보지 않기</span>
          </div>
          <div
            className="text-center py-4 text-md font-bold text-primary cursor-pointer"
            onClick={handleClose}
          >
            <span>닫기</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopUp;

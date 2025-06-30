import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import phone01 from '@/assets/images/phone01.png';
import phone01_01 from '@/assets/images/phone01_01.png';
import phone02 from '@/assets/images/phone02.png';
import phone03 from '@/assets/images/phone03.png';
import phone03_01 from '@/assets/images/phone03_01.png';
import phone04 from '@/assets/images/phone04.png';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';

function PaybackRewardStep() {
  const imageData = [
    {
      image: phone01,
      subImage: phone01_01,
      title: (
        <>
          테더베이스 코드로
          <br />
          거래소 가입하기
        </>
      ),
    },
    {
      image: phone02,
      title: (
        <>
          테더베이스 UID
          <br />
          연결하기
        </>
      ),
    },
    {
      image: phone03,
      subImage: phone03_01,
      title: (
        <>
          트레이딩
          <br />
          마음껏 가입하기
        </>
      ),
    },
    {
      image: phone04,
      title: <>페이백 환급받기</>,
    },
  ];
  SwiperCore.use([Autoplay]);
  return (
    <section>
      <div className="container mx-auto py-16">
        <div className="text-center text-white">
          <h2>테더베이스 이용 가이드</h2>
          <p className="text-front3 mt-2">STEP 별로 거래소 이용하기</p>
        </div>
        <div className="flex justify-center  mx-auto">
          <Swiper
            className="intro_swiper"
            autoplay={{
              delay: 3000, // 슬라이드가 자동으로 넘어가는 시간 간격
              disableOnInteraction: false, // 사용자가 슬라이드를 넘겨도 autoplay 유지
            }}
            slidesPerView={1}
            loop={true}
            pagination={true}
            navigation={true}
            modules={[Pagination, Navigation]}
          >
            {imageData.map((image, index) => (
              <SwiperSlide key={index} className=" justify-between relative">
                <h4 className="font-bold text-white text-center mt-8 mb-3">
                  <span className="text-primary">STEP.{index + 1}</span>{' '}
                  {image.title}
                </h4>
                <Image
                  src={image.image}
                  alt={`테더베이스 STEP ${index}`}
                  width={350}
                />
                {image.subImage ? (
                  <div
                    className={`w-fit h-fit absolute left-0 right-0 top-0 bottom-0 m-auto z-20  
                      ${index === 0 ? '' : index === 2 ? '' : ''}`}
                  >
                    <Image
                      className={'subImg'}
                      src={image.subImage}
                      alt={`테더베이스 STEP ${index}`}
                      width={350}
                    />
                  </div>
                ) : null}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default PaybackRewardStep;

'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const paybackData = [
  {
    range: '상위 5%',
    amount: 3468,
    percentage: 5,
  },
  {
    range: '5~20%',
    amount: 934,
  },
  {
    range: '25~50%',
    amount: 229,
  },
  {
    range: '50~75%',
    amount: 64,
  },
  {
    range: '75~100%',
    amount: 15,
  },
  {
    range: '전체 평균',
    amount: 370,
  },
];

function PaybackGraph() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // 각 <li> 요소에 대해 height 애니메이션 적용
    paybackData.forEach((item, index) => {
      const targetDiv = document.querySelectorAll(
        '.payback-list li .graph-bar',
      )[index];
      let targetHeight;

      // height 값 설정 (index에 따라 다르게 설정)
      if (index === 0) targetHeight = '100%';
      if (index === 1) targetHeight = '50%';
      if (index === 2) targetHeight = '20%';
      if (index === 3) targetHeight = '5%';
      if (index === 4) targetHeight = '2%';
      if (index === 5) targetHeight = '30%';

      // gsap을 이용해 height 애니메이션 적용
      gsap.fromTo(
        targetDiv,
        { height: 0 }, // 초기 height 값
        {
          height: targetHeight, // 목표 height 값
          duration: 2, // 애니메이션 지속 시간
          ease: 'power2.out', // 애니메이션 easing
          delay: index * 0.3, // 각 요소가 순차적으로 애니메이션되도록 0.3초 간격으로 지연
          scrollTrigger: {
            trigger: targetDiv,
            start: 'top 80%', // 해당 요소가 뷰포트의 80%에 도달하면 애니메이션 시작
            end: 'bottom 20%', // 해당 요소가 뷰포트의 20%에 도달하면 애니메이션 종료
            toggleActions: 'play none none none', // 한번만 애니메이션 실행
            once: true, // 반복 실행하지 않도록 설정
          },
        },
      );
    });
  }, []);
  return (
    <section>
      <div className="container mx-auto py-16">
        <div className="text-left text-white ">
          <h2 className={'text-[40px]'}>
            한 달 평균 페이백
            <br />
            15 USDT부터
            <br />
            3,500 USDT까지
          </h2>
          <p className="font-semibold my-5">
            테더베이스를 이용하고 있는 유저들은
            <br />
            평균 <span className="text-primary">370 USDT 상당</span>의 페이백을,
            <br />
            거래량 상위 5% 이용자라면
            <br />
            <span className="text-primary">3,500 USDT 상당</span>의 페이백을
            받고 있어요!
          </p>
        </div>
        <ul className={`payback-list grid grid-cols-6 md:h-[250px] h-[200px]`}>
          {paybackData.map((item, index) => (
            <li
              className="flex flex-col items-center justify-end text-white gap-2"
              key={index}
            >
              <span className={`text-bg1 font-semibold md:text-xs text-[8px]`}>
                {item.amount} USDT
              </span>
              <div
                className={`graph-bar ${index <= 2 ? 'bg-primary' : 'bg-bg1'} w-1/2 rounded-md md:w-1/3 md:rounded-lg`}
              ></div>
              <strong
                className={`
                ${index === 0 || index === 1 || index === 2 ? 'text-primary' : ''} 
               md:text-base text-[10px]`}
              >
                {item.range}
              </strong>
            </li>
          ))}
        </ul>
        <p className="text-front2 text-center text-sm font-semibold mt-5">
          *전체 고객에 대한 통계 그래프는 위와 같으며,
          <br />
          100 USDT 미만의 소액 시드나 휴면 유저의 데이터까지 합산된 통계입니다.
        </p>
      </div>
    </section>
  );
}

export default PaybackGraph;

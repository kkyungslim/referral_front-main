'use client';
import BicDataIcon from '@/components/icons/BicDataIcon';
import GroupIcon from '@/components/icons/GroupIcon';
import ContractIcon from '@/components/icons/ContractIcon';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

function InfoPanel() {
  // 애니메이션 효과 설정
  useEffect(() => {
    gsap.fromTo(
      '.fade-up',
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1, // 최종 opacity
        y: 0, // 최종 위치 (기본 위치로 이동)
        duration: 1.5, // 애니메이션 지속 시간
        ease: 'power4.out', // 부드러운 애니메이션 효과
        stagger: 0.3, // 각 아이템 간의 간격을 0.3초로 설정
        scrollTrigger: {
          trigger: '.fade-up-section', // 애니메이션이 실행될 섹션
          start: 'top 50%', // 섹션의 상단이 뷰포트의 80%에 도달했을 때 시작
          scrub: false, // 스크롤을 부드럽게 따라가며 애니메이션 진행
          once: true, // 애니메이션을 한 번만 실행
        },
      },
    );
  }, []);

  return (
    <section className="fade-up-section">
      <div className="container mx-auto py-10">
        <div className="text-center py-6">
          <p className={`text-front4 font-semibold md:text-base text-sm`}>
            저희 트레이더님들만 느껴 보세요!
          </p>
          <h2 className={`text-primary md:text-4xl text-3xl `}>
            테더베이스만의 특별함
          </h2>
          <p className={`text-front4 font-semibold md:text-lg text-base`}>
            다른 플랫폼 서비스들보다 월등해요
          </p>
        </div>
        <div
          className={`grid md:grid-cols-3 grid-cols-1 md:gap-2 gap-10 md:justify-between justify-start md:mt-6 mt-4`}
        >
          <div
            className={`fade-up flex items-center md:flex-col md:text-center justify-center gap-2`}
          >
            <BicDataIcon width={75} height={75} />
            <div>
              <p className={`text-front4 font-semibold md:text-base text-lg`}>
                빅데이터 기반
              </p>
              <h4 className={`text-white font-bold md:text-lg text-2xl`}>
                플랫폼 서비스 제공
              </h4>
            </div>
          </div>
          <div
            className={`fade-up flex items-center md:flex-col md:text-center justify-center gap-2`}
          >
            <ContractIcon width={75} height={75} />
            <div>
              <p className={`text-front4 font-semibold md:text-base text-lg`}>
                높은 안전성
              </p>
              <h4 className={`text-white font-bold md:text-lg text-2xl`}>
                거래소와 공식 계약
              </h4>
            </div>
          </div>
          <div
            className={`fade-up flex items-center md:flex-col md:text-center justify-center gap-2`}
          >
            <GroupIcon width={75} height={75} />
            <div>
              <p className={`text-front4 font-semibold md:text-base text-lg`}>
                많은 유저들의 선택
              </p>
              <h4 className={`text-white font-bold md:text-lg text-2xl`}>
                &#43; 10,000 명
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoPanel;

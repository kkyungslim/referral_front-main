'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

// CircularProgressBar 컴포넌트
const CircularProgressBar = ({ progress }: { progress: number }) => {
  const circleRef = useRef<SVGCircleElement | null>(null);
  const radius = 70; // 원의 반지름
  const strokeWidth = 15; // 원 둘레의 두께
  const circumference = 2 * Math.PI * radius; // 원 둘레 계산
  const [prevProgress, setPrevProgress] = useState(0);

  useEffect(() => {
    // GSAP 애니메이션을 통해 0에서 지정된 값까지 채워지는 애니메이션 적용
    gsap.fromTo(
      circleRef.current,
      { strokeDashoffset: circumference },  // 시작값 (0%)
      {
        strokeDashoffset: circumference - (progress / 100) * circumference,  // 종료값 (지정한 진행률)
        duration: 2,  // 애니메이션 지속 시간
        ease: 'power2.out',
      }
    );

    setPrevProgress(progress);  // 이전 진행률을 업데이트

  }, [progress]);  // progress 값이 변경될 때마다 애니메이션이 트리거

  return (
    <div className="flex justify-center items-center relative">
      <svg
        className="transform rotate-90"  // 원을 90도 회전시켜서 시작점을 위로
        width="160"
        height="160"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 그라디언트 정의 */}
        <defs>
          <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6900" />
            <stop offset="20%" stopColor="#F77D06" />
            <stop offset="40%" stopColor="#F78918" />
            <stop offset="60%" stopColor="#F79F34" />
            <stop offset="80%" stopColor="#F6BC5C" />
            <stop offset="100%" stopColor="#F6D27A" />
          </linearGradient>
        </defs>

        {/* 배경 원 */}
        <circle
          cx="80"
          cy="80"
          r={radius}
          stroke="#e5e7eb"  // 회색 배경 원
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* 진행 중인 원 (그라디언트 색상 적용) */}
        <circle
          ref={circleRef}
          cx="80"
          cy="80"
          r={radius}
          stroke="url(#progress-gradient)"  // 그라디언트 색상 적용
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}  // 전체 원의 둘레
          strokeDashoffset={circumference - (progress / 100) * circumference}  // 진행률에 맞게 원을 자르기
          strokeLinecap="round"  // 끝부분 둥글게
        />
      </svg>
      <p className={'font-bold text-front2 absolute text-center text-xl'}>
        마감률<br />
        {progress}%
      </p>
    </div>
  );
};

export default CircularProgressBar;

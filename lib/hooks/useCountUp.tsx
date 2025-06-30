import { useState, useEffect, useRef } from 'react';

// target은 number, duration은 number (기본값은 10000)
const useCountUp = (target: number, duration: number = 10000) => {
  const [counter, setCounter] = useState<number>(0); // counter는 number
  const [formattedCounter, setFormattedCounter] = useState<string>('000,000'); // formattedCounter는 string
  const animRef = useRef<number | null>(null); // 애니메이션 ID를 저장하기 위한 ref

  useEffect(() => {
    let startTime: number | null = null;

    // 애니메이션 함수
    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = time - startTime;

      // 현재 카운터를 목표값으로 점진적으로 증가
      const currentValue = Math.min(
        Math.floor((progress / duration) * target),
        target,
      );
      setCounter(currentValue);

      // 1자리씩 증가하도록 처리
      const formattedValue = currentValue
        .toLocaleString('en-US')
        .padStart(7, '0'); // '000,000' 형식
      setFormattedCounter(formattedValue);

      if (progress < duration) {
        animRef.current = requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(animRef.current!); // 애니메이션 종료
      }
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      // 컴포넌트 언마운트 시 애니메이션 취소
      if (animRef.current) {
        cancelAnimationFrame(animRef.current);
      }
    };
  }, [target, duration]);

  return { formattedCounter };
};

export default useCountUp;

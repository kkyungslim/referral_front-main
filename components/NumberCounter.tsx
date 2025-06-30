'use client';

import useCountup from '@/lib/hooks/useCountUp';

function NumberCounter({
  number,
  duration,
}: {
  number: number;
  duration: number;
}) {
  const { formattedCounter } = useCountup(number, duration);
  return <span className="text-primary">{formattedCounter}원</span>;
}

export default NumberCounter;

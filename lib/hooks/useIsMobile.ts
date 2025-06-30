'use client';

import { useEffect, useState } from 'react';

const MOBILE_BREAKPOINT = 768;

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined'
      ? window.innerWidth < MOBILE_BREAKPOINT
      : false,
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const updateState = (event: MediaQueryListEvent) =>
      setIsMobile(event.matches);

    mql.addEventListener('change', updateState);
    setIsMobile(mql.matches); // Sync initial state

    return () => mql.removeEventListener('change', updateState);
  }, []);

  return isMobile;
}

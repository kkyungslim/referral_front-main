'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

declare global {
  interface Window {
    fbq: (...args: any[]) => void
  }
}

function FaceBookPixel() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'PageView')
    }
  }, [pathname])

  return null
}

export default FaceBookPixel

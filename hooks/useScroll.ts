'use client'

import { useEffect, useState } from 'react'

/** True when `window.scrollY` exceeds `thresholdPx`. */
export function useScroll(thresholdPx = 50): boolean {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > thresholdPx)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [thresholdPx])

  return scrolled
}

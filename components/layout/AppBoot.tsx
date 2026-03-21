'use client'

import { useCallback, useEffect, useLayoutEffect, useState, type ReactNode } from 'react'
import Preloader from '@/components/animations/Preloader'
import { refreshScrollTriggers } from '@/lib/gsap'
import { markSessionVisited } from '@/hooks/useFirstLoad'

type Gate = 'unset' | 'preload' | 'ready'

type AppBootProps = {
  children: ReactNode
}

/**
 * - `unset`: before client knows session (solid screen only — no broken preloader UI).
 * - `preload`: first visit this session — full preloader + timeline, then app.
 * - `ready`: returning this session — app only, no preloader.
 */
export function AppBoot({ children }: AppBootProps) {
  const [gate, setGate] = useState<Gate>('unset')

  useLayoutEffect(() => {
    setGate(sessionStorage.getItem('visited') === 'true' ? 'ready' : 'preload')
  }, [])

  const handlePreloaderFinish = useCallback(() => {
    setGate('ready')
  }, [])

  useEffect(() => {
    if (gate === 'ready') {
      markSessionVisited()
      requestAnimationFrame(() => {
        refreshScrollTriggers()
      })
    }
  }, [gate])

  if (gate === 'unset') {
    return (
      <div
        className="fixed inset-0 z-[2147483647] bg-primary-950"
        aria-hidden
      />
    )
  }

  if (gate === 'preload') {
    return <Preloader onFinish={handlePreloaderFinish} />
  }

  return <>{children}</>
}

'use client'

import { useLayoutEffect, useState } from 'react'

const VISITED_KEY = 'visited'

export type UseFirstLoadResult = {
  /**
   * After `ready`, true only when this tab session has not yet stored `visited`
   * (first app shell mount this session — section intros should run).
   */
  isFirstLoad: boolean
  /**
   * False until the client layout effect reads sessionStorage. While false, treat as
   * neither first nor return — do not run “return visitor” side effects (e.g. static stat fill).
   */
  ready: boolean
}

/**
 * Session gate for intro animations: `sessionStorage` key `visited` (set in `AppBoot` after
 * first shell mount / preloader). Section `useLayoutEffect` runs before `visited` exists on
 * true first visit, so intros still run once per session.
 */
export function useFirstLoad(): UseFirstLoadResult {
  const [phase, setPhase] = useState<'pending' | 'first' | 'return'>('pending')

  useLayoutEffect(() => {
    setPhase(sessionStorage.getItem(VISITED_KEY) !== 'true' ? 'first' : 'return')
  }, [])

  return {
    ready: phase !== 'pending',
    isFirstLoad: phase === 'first',
  }
}

export function markSessionVisited(): void {
  if (typeof window === 'undefined') return
  sessionStorage.setItem(VISITED_KEY, 'true')
}

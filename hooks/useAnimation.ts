'use client'

import { useLayoutEffect, type RefObject } from 'react'
import { gsap, registerGsapPlugins } from '@/lib/gsap'

export type UseGsapContextOptions = {
  /** When false, GSAP setup is skipped (content stays default / CSS-visible). */
  enabled?: boolean
}

/**
 * Scoped GSAP context. Cleanup reverts only animations registered inside `setup`.
 */
export function useGsapContext(
  scopeRef: RefObject<HTMLElement | null>,
  setup: () => void,
  deps: ReadonlyArray<unknown>,
  options?: UseGsapContextOptions
): void {
  const enabled = options?.enabled !== false

  useLayoutEffect(() => {
    if (!enabled) return
    const scope = scopeRef.current
    if (!scope) return
    registerGsapPlugins()
    const ctx = gsap.context(setup, scope)
    return () => {
      ctx.revert()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, ...deps])
}

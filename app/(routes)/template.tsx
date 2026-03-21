import type { ReactNode } from 'react'

/**
 * Intentionally no GSAP route transitions — they caused opacity stuck at 0 after Strict Mode
 * cleanup / interrupted tweens. Page content is always visible once the shell is revealed.
 */
export default function RoutesTemplate({ children }: { children: ReactNode }) {
  return children
}

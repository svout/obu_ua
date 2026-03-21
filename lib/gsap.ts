import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let registered = false

export function registerGsapPlugins(): void {
  if (typeof window === 'undefined' || registered) return
  gsap.registerPlugin(ScrollTrigger)
  registered = true
}

export function refreshScrollTriggers(): void {
  if (typeof window === 'undefined') return
  ScrollTrigger.refresh()
}

export { gsap, ScrollTrigger }

'use client'

import { useRef } from 'react'
import { ChevronDown, PartyPopper, UsersRound } from 'lucide-react'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { useGsapContext } from '@/hooks/useAnimation'
import { useFirstLoad } from '@/hooks/useFirstLoad'
import { gsap } from '@/lib/gsap'

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { isFirstLoad } = useFirstLoad()

  useGsapContext(
    heroRef,
    () => {
      gsap.set('.hero-title-word', { opacity: 0, y: 40 })
      gsap.set('.hero-subtitle', { opacity: 0, y: 20 })
      gsap.set('.hero-cta', { opacity: 0, y: 16, scale: 0.96 })

      const tl = gsap.timeline({ delay: 0.2 })

      tl.to('.hero-title-word', {
        opacity: 1,
        y: 0,
        stagger: 0.07,
        duration: 0.75,
        ease: 'power3.out',
      })

      tl.to('.hero-subtitle', { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' }, '-=0.35')

      tl.to(
        '.hero-cta',
        { opacity: 1, y: 0, scale: 1, stagger: 0.08, duration: 0.45, ease: 'back.out(1.5)' },
        '-=0.25'
      )

      gsap.to('.hero-float', {
        y: -14,
        duration: 2.2,
        ease: 'power1.inOut',
        stagger: 0.15,
        repeat: -1,
        yoyo: true,
      })
    },
    [],
    { enabled: isFirstLoad }
  )

  return (
    <div
      ref={heroRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-surface via-primary-50/30 to-surface-muted"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-float absolute left-[8%] top-[12%] h-56 w-56 rounded-full bg-primary-200/25 blur-3xl" />
        <div className="hero-float absolute right-[10%] top-[20%] h-64 w-64 rounded-full bg-accent-400/15 blur-3xl" />
        <div className="hero-float absolute bottom-[18%] left-[22%] h-48 w-48 rounded-full bg-primary-300/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-20 pt-24 text-center md:px-6 md:pt-28">
        <h1 className="font-display mb-8 text-4xl font-extrabold leading-[1.1] tracking-tight text-neutral-900 md:text-6xl lg:text-7xl">
          <div className="overflow-hidden">
            <span className="hero-title-word inline-block">Build</span>{' '}
            <span className="hero-title-word inline-block gradient-text">Community</span>
          </div>
          <div className="overflow-hidden">
            <span className="hero-title-word inline-block">Create</span>{' '}
            <span className="hero-title-word inline-block gradient-text">Impact</span>
          </div>
        </h1>

        <p className="hero-subtitle mx-auto mb-12 max-w-2xl text-lg text-neutral-600 md:text-xl">
          Join Oxford Brookes&apos; vibrant Ukrainian community. Connect with fellow students,
          collaborate on exciting projects, and celebrate our culture together.
        </p>

        <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
          <ButtonLink
            href="/community"
            variant="primary"
            className="hero-cta inline-flex items-center gap-2 px-8 py-3.5 text-base"
          >
            <UsersRound className="h-5 w-5" aria-hidden />
            Join Community
          </ButtonLink>
          <ButtonLink
            href="/events"
            variant="secondary"
            className="hero-cta inline-flex items-center gap-2 px-8 py-3.5 text-base"
          >
            <PartyPopper className="h-5 w-5" aria-hidden />
            Explore Events
          </ButtonLink>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-800 animate-bounce">
          <ChevronDown className="h-7 w-7" aria-hidden />
        </div>
      </div>
    </div>
  )
}

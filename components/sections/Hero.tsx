'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import Link from 'next/link'
import { CalendarDays, UsersRound } from 'lucide-react'
import { JOIN_COMMUNITY_URL } from '@/lib/constants'
import { isMobileViewport, prefersReducedMotion } from '@/lib/viewport'

/** Matches GSAP x/y/scale so first paint is already “hidden”, no flash before useEffect. */
const titleWordInit = 'inline-block opacity-0 -translate-x-10'
const subtitleInit = 'opacity-0 -translate-x-10'
const ctaInit = 'opacity-0 translate-y-5 scale-[0.96]'
/** No horizontal offset on small screens — matches GSAP (slide only md+). */
const imageInit = 'opacity-0 scale-[0.96] translate-x-0 md:translate-x-10'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mobile = isMobileViewport()
    const reduce = prefersReducedMotion()

    const ctx = gsap.context(() => {
      if (reduce) {
        gsap.set('.title-word', { opacity: 1, x: 0 })
        if (subtitleRef.current) gsap.set(subtitleRef.current, { opacity: 1, x: 0 })
        gsap.set('.cta-button', { opacity: 1, y: 0, scale: 1 })
        if (imageRef.current) gsap.set(imageRef.current, { opacity: 1, x: 0, scale: 1 })
        return
      }

      gsap.set('.title-word', { opacity: 0, x: mobile ? -24 : -40 })
      gsap.set(subtitleRef.current, { opacity: 0, x: mobile ? -24 : -40 })
      gsap.set('.cta-button', { opacity: 0, y: mobile ? 12 : 20, scale: mobile ? 0.98 : 0.96 })
      if (imageRef.current) {
        gsap.set(imageRef.current, { opacity: 0, x: mobile ? 0 : 40, scale: mobile ? 0.98 : 0.96 })
      }

      const delay = mobile ? 0.2 : 0.5
      const tl = gsap.timeline({ delay })

      tl.to('.title-word', {
        opacity: 1,
        x: 0,
        stagger: mobile ? 0.06 : 0.1,
        duration: mobile ? 0.55 : 0.8,
        ease: mobile ? 'power3.out' : 'power4.out',
      })

      tl.to(
        subtitleRef.current,
        {
          opacity: 1,
          x: 0,
          duration: mobile ? 0.45 : 0.6,
          ease: 'power3.out',
        },
        mobile ? '-=0.35' : '-=0.4'
      )

      tl.to(
        '.cta-button',
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: mobile ? 0.08 : 0.15,
          duration: mobile ? 0.4 : 0.5,
          ease: mobile ? 'power2.out' : 'back.out(1.7)',
        },
        mobile ? '-=0.25' : '-=0.3'
      )

      if (imageRef.current) {
        tl.to(
          imageRef.current,
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: mobile ? 0.55 : 0.8,
            ease: 'power3.out',
          },
          mobile ? '-=0.35' : '-=0.6'
        )
      }

      if (!mobile) {
        gsap.to('.float-element', {
          y: -10,
          duration: 3,
          ease: 'power1.inOut',
          stagger: 0.2,
          repeat: -1,
          yoyo: true,
        })
      } else {
        gsap.to('.float-element', {
          y: -5,
          duration: 4,
          ease: 'sine.inOut',
          stagger: 0.25,
          repeat: -1,
          yoyo: true,
        })
      }
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={heroRef}
      className="relative flex min-h-[100dvh] items-center overflow-x-hidden bg-gradient-to-br from-white via-blue-50/30 to-yellow-50/30 pattern-bg"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="float-element absolute left-6 top-16 h-40 w-40 rounded-full bg-gradient-to-br from-primary-200 to-primary-400 opacity-15 blur-3xl sm:left-10 sm:top-20 sm:h-48 sm:w-48" />
        <div className="float-element absolute right-8 top-32 h-44 w-44 rounded-full bg-gradient-to-br from-accent-200 to-accent-400 opacity-15 blur-3xl sm:right-20 sm:top-40 sm:h-56 sm:w-56" />
        <div className="float-element absolute bottom-28 left-1/4 h-40 w-40 rounded-full bg-gradient-to-br from-primary-300 to-accent-300 opacity-15 blur-3xl sm:bottom-32 sm:h-52 sm:w-52" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 sm:py-28 md:px-8 lg:px-12 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="order-1 space-y-6 text-center sm:space-y-7 lg:order-none lg:space-y-8 lg:text-left">
            <h1
              ref={titleRef}
              className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            >
              <div className="mb-2 overflow-hidden">
                <span className={`title-word ${titleWordInit}`}>Build</span>{' '}
                <span className={`title-word gradient-text ${titleWordInit}`}>Community</span>
              </div>
              <div className="overflow-hidden">
                <span className={`title-word ${titleWordInit}`}>Create</span>{' '}
                <span className={`title-word gradient-text ${titleWordInit}`}>Impact</span>
              </div>
            </h1>

            <p
              ref={subtitleRef}
              className={`mx-auto max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg md:text-xl lg:mx-0 lg:max-w-xl lg:text-2xl ${subtitleInit}`}
            >
              Join Oxford Brookes&apos; vibrant Ukrainian community. Connect with fellow students,
              collaborate on exciting projects, and celebrate our culture together.
            </p>

            <div
              ref={ctaRef}
              className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start"
            >
              <Link
                href={JOIN_COMMUNITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-block"
              >
                <button
                  type="button"
                  className={`cta-button btn-primary w-full px-6 py-3.5 text-base sm:w-auto sm:px-8 sm:py-4 sm:text-lg ${ctaInit}`}
                >
                  Join Community
                  <UsersRound className="ml-2 h-5 w-5 shrink-0 opacity-95" strokeWidth={2} aria-hidden />
                </button>
              </Link>
              <Link href="/events" className="w-full sm:w-auto">
                <button
                  type="button"
                  className={`cta-button btn-secondary w-full px-6 py-3.5 text-base sm:w-auto sm:px-8 sm:py-4 sm:text-lg ${ctaInit}`}
                >
                  Explore Events
                  <CalendarDays className="ml-2 h-5 w-5 shrink-0 opacity-95" strokeWidth={2} aria-hidden />
                </button>
              </Link>
            </div>
          </div>

          <div className="relative order-2 lg:order-none">
            <div
              ref={imageRef}
              className={`group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl transition-shadow duration-500 hover:shadow-3xl ${imageInit}`}
            >
              <Image
                src="/images/event1.jpeg"
                alt="Oxford Brookes Ukrainian Society members with Ukrainian flags at Radcliffe Square, Oxford"
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-900/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>

            <div className="absolute -bottom-6 -right-6 -z-10 h-20 w-20 rounded-full bg-accent-400 opacity-20 blur-2xl sm:h-24 sm:w-24" />
            <div className="absolute -left-6 -top-6 -z-10 h-28 w-28 rounded-full bg-primary-400 opacity-20 blur-2xl sm:h-32 sm:w-32" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:bottom-10 md:block">
        <div className="animate-bounce">
          <svg className="h-6 w-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  )
}

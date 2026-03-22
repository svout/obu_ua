'use client'

import Link from 'next/link'
import { useLayoutEffect, useRef } from 'react'
import { useFirstLoad } from '@/hooks/useFirstLoad'
import { gsap, registerGsapPlugins } from '@/lib/gsap'
import { JOIN_COMMUNITY_URL } from '@/lib/constants'
import { ButtonLink } from '@/components/ui/ButtonLink'

const PETAL_COUNT = 13

export default function NotFound() {
  const sunflowerRef = useRef<HTMLDivElement>(null)
  const { isFirstLoad, ready } = useFirstLoad()

  useLayoutEffect(() => {
    if (!ready || !isFirstLoad) return
    registerGsapPlugins()
    const el = sunflowerRef.current
    if (!el) return
    const tween = gsap.to(el, {
      y: -10,
      duration: 2,
      ease: 'power1.inOut',
      repeat: -1,
      yoyo: true,
    })
    return () => {
      tween.kill()
    }
  }, [ready, isFirstLoad])

  return (
    <div className="pattern-bg flex min-h-screen items-center justify-center bg-gradient-to-br from-white via-blue-50/30 to-yellow-50/30 pt-20">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <div ref={sunflowerRef} className="mb-8">
          <div className="relative mx-auto h-48 w-48">
            {Array.from({ length: PETAL_COUNT }).map((_, i) => {
              const angle = (i * 360) / PETAL_COUNT
              return (
                <div
                  key={i}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-50px)`,
                  }}
                >
                  <div className="h-12 w-8 rounded-[50%/60%_60%_40%_40%] bg-gradient-to-br from-accent-400 to-accent-200 opacity-70" />
                </div>
              )
            })}

            <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-700 shadow-lg">
              <span className="font-display text-2xl font-bold text-white">404</span>
            </div>
          </div>
        </div>

        <h1 className="font-display mb-4 text-5xl font-bold md:text-6xl">
          Page Not <span className="gradient-text">Found</span>
        </h1>

        <p className="mb-8 text-xl text-neutral-600">
          Looks like this sunflower lost its way. The page you&apos;re looking for doesn&apos;t exist.
        </p>

        <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink href="/" variant="primary" className="px-8 py-4 text-lg">
            Go Home
          </ButtonLink>
          <ButtonLink href="/events" variant="secondary" className="px-8 py-4 text-lg">
            View Events
          </ButtonLink>
        </div>

        <div className="border-t border-neutral-200 pt-8">
          <p className="mb-4 text-neutral-600">Or try one of these:</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <Link href="/about" className="font-semibold text-primary-500 hover:text-primary-600">
              About Us
            </Link>
            <span className="text-neutral-300">•</span>
            <Link href="/projects" className="font-semibold text-primary-500 hover:text-primary-600">
              Student Projects
            </Link>
            <span className="text-neutral-300">•</span>
            <Link
              href={JOIN_COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary-500 hover:text-primary-600"
            >
              Join Community
            </Link>
            <span className="text-neutral-300">•</span>
            <Link href="/contact" className="font-semibold text-primary-500 hover:text-primary-600">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

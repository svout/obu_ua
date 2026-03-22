'use client'

import { useRef } from 'react'
import { IconByName } from '@/components/ui/IconByName'
import { useGsapContext } from '@/hooks/useAnimation'
import { useFirstLoad } from '@/hooks/useFirstLoad'
import { gsap } from '@/lib/gsap'
import { isMobileViewport, prefersReducedMotion } from '@/lib/viewport'
import type { WhatWeDoCard } from '@/lib/data/home'

export type WhatWeDoProps = {
  cards: WhatWeDoCard[]
}

export function WhatWeDo({ cards }: WhatWeDoProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const safeCards = cards ?? []
  const { isFirstLoad } = useFirstLoad()

  useGsapContext(
    sectionRef,
    () => {
      const trigger = sectionRef.current
      if (!trigger) return
      const light = isMobileViewport() || prefersReducedMotion()
      gsap.fromTo(
        '.what-we-do-card',
        { autoAlpha: 0, y: light ? 16 : 32 },
        {
          autoAlpha: 1,
          y: 0,
          stagger: light ? 0.06 : 0.1,
          duration: light ? 0.45 : 0.65,
          ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: {
            trigger,
            start: 'top 88%',
            once: true,
          },
        }
      )
    },
    [],
    { enabled: isFirstLoad }
  )

  return (
    <section className="section-padding pattern-bg bg-gradient-to-b from-surface-muted to-surface">
      <div ref={sectionRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-12 md:mb-16">
          <h2 className="font-display mb-3 text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl md:text-5xl">
            What We <span className="gradient-text">Do</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-neutral-600 sm:text-lg">
            Empowering Ukrainian students through community, culture, and collaboration
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {safeCards.map((card) => (
            <div
              key={card.title}
              className="what-we-do-card group rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-card transition-all hover:border-primary-200 hover:shadow-card-hover sm:p-8"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-800 transition-transform duration-300 group-hover:scale-105">
                <IconByName name={card.icon} className="h-7 w-7" />
              </div>
              <h3 className="font-display mb-3 text-lg font-bold text-neutral-900 transition-colors group-hover:text-primary-800 md:text-xl">
                {card.title}
              </h3>
              <p className="text-neutral-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

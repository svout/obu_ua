'use client'

import { useRef } from 'react'
import { useGsapContext } from '@/hooks/useAnimation'
import { useFirstLoad } from '@/hooks/useFirstLoad'
import { gsap } from '@/lib/gsap'
import type { AboutTimelineItem } from '@/lib/data/about'

export type AboutTimelineProps = {
  items: AboutTimelineItem[]
}

export function AboutTimeline({ items }: AboutTimelineProps) {
  const ref = useRef<HTMLElement>(null)
  const list = items?.length ? items : []
  const { isFirstLoad } = useFirstLoad()

  useGsapContext(
    ref,
    () => {
      const trigger = ref.current
      if (!trigger) return
      gsap.fromTo(
        '.about-timeline-item',
        { autoAlpha: 0, x: -40 },
        {
          autoAlpha: 1,
          x: 0,
          stagger: 0.12,
          duration: 0.65,
          ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: {
            trigger,
            start: 'top 78%',
            once: true,
          },
        }
      )
    },
    [],
    { enabled: isFirstLoad }
  )

  return (
    <section ref={ref} className="section-padding pattern-bg bg-gradient-to-b from-surface-muted to-surface">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mb-14 text-center md:mb-16">
          <h2 className="font-display mb-4 text-3xl font-bold text-neutral-900 md:text-5xl">
            Our <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-lg text-neutral-600">From humble beginnings to a thriving community</p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-primary-200 via-primary-400 to-accent-400" />

          {list.map((item, index) => (
            <div
              key={item.id}
              className={`about-timeline-item relative mb-12 flex items-center ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div
                className={`w-1/2 ${index % 2 === 0 ? 'pr-10 text-right md:pr-12' : 'pl-10 text-left md:pl-12'}`}
              >
                <div className="rounded-2xl border border-neutral-200/90 bg-white p-6 shadow-card transition-all hover:border-primary-200 hover:shadow-card-hover">
                  <div className="font-display mb-2 text-2xl font-bold text-primary-800">{item.year}</div>
                  <h3 className="font-display mb-2 text-lg font-bold text-neutral-900 md:text-xl">{item.title}</h3>
                  <p className="text-neutral-600">{item.description}</p>
                </div>
              </div>

              <div className="absolute left-1/2 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-4 border-white bg-gradient-to-br from-primary-700 to-accent-500 shadow-md" />

              <div className="w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

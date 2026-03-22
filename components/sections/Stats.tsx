'use client'

import { useEffect, useRef } from 'react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { IconByName } from '@/components/ui/IconByName'
import { useGsapContext } from '@/hooks/useAnimation'
import { useFirstLoad } from '@/hooks/useFirstLoad'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { isMobileViewport, prefersReducedMotion } from '@/lib/viewport'
import type { HomeStat } from '@/lib/data/home'

const EMPTY_STATS: HomeStat[] = []

export type StatsProps = {
  stats: HomeStat[]
}

export function Stats({ stats }: StatsProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const valueRefs = useRef<Array<HTMLSpanElement | null>>([])
  const counted = useRef(false)
  const { isFirstLoad, ready } = useFirstLoad()

  const data = stats.length > 0 ? stats : EMPTY_STATS

  useEffect(() => {
    if (!ready || isFirstLoad) return
    data.forEach((stat, index) => {
      const el = valueRefs.current[index]
      if (el) el.textContent = String(stat.value)
    })
  }, [ready, isFirstLoad, data])

  useGsapContext(
    sectionRef,
    () => {
      const trigger = sectionRef.current
      if (!trigger) return

      const runCounters = () => {
        if (counted.current) return
        counted.current = true
        data.forEach((stat, index) => {
          const el = valueRefs.current[index]
          if (!el) return
          const state = { value: 0 }
          gsap.to(state, {
            value: stat.value,
            duration: 1.85,
            ease: 'power1.out',
            onUpdate: () => {
              el.textContent = String(Math.round(state.value))
            },
          })
        })
      }

      ScrollTrigger.create({
        trigger,
        start: 'top 90%',
        once: true,
        onEnter: runCounters,
      })

      const light = isMobileViewport() || prefersReducedMotion()
      gsap.fromTo(
        '.home-stat-card',
        { autoAlpha: 0, y: light ? 14 : 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: light ? 0.4 : 0.55,
          stagger: light ? 0.05 : 0.08,
          ease: light ? 'power2.out' : 'back.out(1.4)',
          immediateRender: false,
          scrollTrigger: {
            trigger,
            start: 'top 90%',
            once: true,
          },
        }
      )

    },
    [data],
    { enabled: isFirstLoad }
  )

  return (
    <section ref={sectionRef} className="section-padding bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Community"
          highlight="by Numbers"
          description="Growing stronger together, one connection at a time"
        />

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {data.map((stat, index) => (
            <div
              key={stat.label}
              className="home-stat-card group relative rounded-2xl border border-neutral-200/80 bg-white p-8 shadow-card transition-colors hover:border-primary-200"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-800 transition-transform duration-300 group-hover:scale-105">
                <IconByName name={stat.icon} className="h-7 w-7" />
              </div>

              <div className="font-display mb-2 text-3xl font-bold tabular-nums text-primary-900 sm:text-4xl md:text-5xl">
                <span ref={(el) => { valueRefs.current[index] = el }}>0</span>
                {stat.suffix ? <span>{stat.suffix}</span> : null}
              </div>

              <div className="font-medium text-neutral-600">{stat.label}</div>

              <div className="absolute right-0 top-0 h-20 w-20 rounded-tr-2xl bg-gradient-to-br from-primary-50 to-transparent opacity-80" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

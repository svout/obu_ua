'use client'

import { useRef } from 'react'
import { useGsapContext } from '@/hooks/useAnimation'
import { useFirstLoad } from '@/hooks/useFirstLoad'
import { gsap } from '@/lib/gsap'
import type { AboutTeamMember } from '@/lib/data/about'

export type AboutTeamProps = {
  members: AboutTeamMember[]
}

export function AboutTeam({ members }: AboutTeamProps) {
  const ref = useRef<HTMLElement>(null)
  const list = members?.length ? members : []
  const { isFirstLoad } = useFirstLoad()

  useGsapContext(
    ref,
    () => {
      const trigger = ref.current
      if (!trigger) return
      gsap.fromTo(
        '.about-team-card',
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.55,
          ease: 'back.out(1.35)',
          immediateRender: false,
          scrollTrigger: {
            trigger,
            start: 'top 82%',
            once: true,
          },
        }
      )
    },
    [],
    { enabled: isFirstLoad }
  )

  return (
    <section ref={ref} className="section-padding bg-surface">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-14 text-center md:mb-16">
          <h2 className="font-display mb-4 text-3xl font-bold text-neutral-900 md:text-5xl">
            Meet the <span className="gradient-text">Team</span>
          </h2>
          <p className="text-lg text-neutral-600">Passionate students leading our community forward</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {list.map((member) => (
            <div
              key={member.name}
              className="about-team-card group rounded-2xl border border-neutral-200/90 bg-white p-8 shadow-card transition-all hover:border-primary-200 hover:shadow-card-hover"
            >
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary-50 to-accent-100/80 text-5xl">
                  {member.image}
                </div>
                <h3 className="font-display text-lg font-bold text-neutral-900 transition-colors group-hover:text-primary-800 md:text-xl">
                  {member.name}
                </h3>
                <div className="mb-3 text-sm font-semibold text-accent-600">{member.role}</div>
                <p className="text-sm text-neutral-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

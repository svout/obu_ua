'use client'

import { useRef } from 'react'
import { ContentCard } from '@/components/content/ContentCard'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Container } from '@/components/layout/Container'
import { useGsapContext } from '@/hooks/useAnimation'
import { useFirstLoad } from '@/hooks/useFirstLoad'
import { gsap } from '@/lib/gsap'
import { isMobileViewport, prefersReducedMotion } from '@/lib/viewport'
import type { ContentItem } from '@/lib/content'
import { cn } from '@/lib/utils'

export type LatestContentPreviewProps = {
  items: ContentItem[]
}

export function LatestContentPreview({ items }: LatestContentPreviewProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const list = items ?? []
  const { isFirstLoad } = useFirstLoad()

  useGsapContext(
    sectionRef,
    () => {
      const trigger = sectionRef.current
      if (!trigger) return
      const light = isMobileViewport() || prefersReducedMotion()
      gsap.fromTo(
        '.latest-content-card',
        { autoAlpha: 0, y: light ? 14 : 28 },
        {
          autoAlpha: 1,
          y: 0,
          stagger: light ? 0.06 : 0.1,
          duration: light ? 0.4 : 0.55,
          ease: light ? 'power2.out' : 'back.out(1.35)',
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
    <section ref={sectionRef} className="section-padding bg-surface">
      <Container>
        <div className="mb-8 flex flex-col gap-5 sm:mb-10 md:mb-12 md:flex-row md:items-end md:justify-between md:gap-6">
          <div>
            <h2 className="font-display mb-2 text-2xl font-bold text-neutral-900 sm:mb-3 sm:text-3xl md:text-5xl">
              Latest <span className="gradient-text">Events &amp; Updates</span>
            </h2>
            <p className="max-w-2xl text-base text-neutral-600 sm:text-lg">
              Reports, announcements, and highlights from our community — newest first.
            </p>
          </div>
          <ButtonLink
            href="/events"
            variant="secondary"
            className="hidden px-8 py-3 text-sm md:inline-flex md:w-auto"
          >
            View all
          </ButtonLink>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {list.map((item) => (
            <div key={item.id} className={cn('latest-content-card')}>
              <ContentCard item={item} />
            </div>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <ButtonLink href="/events" variant="secondary" className="w-full justify-center px-8 py-3 sm:w-auto">
            View all
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}

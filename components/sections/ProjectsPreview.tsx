'use client'

import { useRef } from 'react'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Container } from '@/components/layout/Container'
import { ProjectList } from '@/features/projects/ProjectList'
import type { ProjectSummary } from '@/features/projects/types'
import { useGsapContext } from '@/hooks/useAnimation'
import { useFirstLoad } from '@/hooks/useFirstLoad'
import { gsap } from '@/lib/gsap'

export type ProjectsPreviewProps = {
  projects: ProjectSummary[]
}

export function ProjectsPreview({ projects }: ProjectsPreviewProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const list = projects ?? []
  const { isFirstLoad } = useFirstLoad()

  useGsapContext(
    sectionRef,
    () => {
      const trigger = sectionRef.current
      if (!trigger) return
      gsap.fromTo(
        '.projects-preview-card',
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.55,
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
    <section
      ref={sectionRef}
      className="section-padding pattern-bg bg-gradient-to-b from-primary-50/40 to-surface-muted"
    >
      <Container>
        <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-display mb-3 text-3xl font-bold text-neutral-900 md:text-5xl">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-neutral-600">
              Innovative ideas from our talented community members
            </p>
          </div>
          <ButtonLink
            href="/projects"
            variant="secondary"
            className="hidden px-8 py-3 text-sm md:inline-flex"
          >
            Explore Projects
          </ButtonLink>
        </div>

        <ProjectList projects={list} itemWrapperClassName="projects-preview-card" />

        <div className="mt-8 text-center md:hidden">
          <ButtonLink href="/projects" variant="secondary" className="px-8 py-3">
            Explore Projects
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}

'use client'

import { useRef } from 'react'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Container } from '@/components/layout/Container'
import { ProjectList } from '@/features/projects/ProjectList'
import { useGsapContext } from '@/hooks/useAnimation'
import { useFirstLoad } from '@/hooks/useFirstLoad'
import { gsap } from '@/lib/gsap'
import { allProjects } from '@/lib/data/projects'
import { isMobileViewport, prefersReducedMotion } from '@/lib/viewport'

export function ProjectsPreview() {
  const sectionRef = useRef<HTMLElement>(null)
  const list = allProjects
  const { isFirstLoad } = useFirstLoad()

  useGsapContext(
    sectionRef,
    () => {
      const trigger = sectionRef.current
      if (!trigger) return
      const light = isMobileViewport() || prefersReducedMotion()
      gsap.fromTo(
        '.projects-preview-card',
        { autoAlpha: 0, y: light ? 14 : 28 },
        {
          autoAlpha: 1,
          y: 0,
          stagger: light ? 0.05 : 0.08,
          duration: light ? 0.4 : 0.55,
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
        <div className="mb-8 flex flex-col gap-5 sm:mb-10 md:mb-12 md:flex-row md:items-end md:justify-between md:gap-6">
          <div>
            <h2 className="font-display mb-2 text-2xl font-bold text-neutral-900 sm:mb-3 sm:text-3xl md:text-5xl">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-base text-neutral-600 sm:text-lg">
              Innovative ideas from our talented community members
            </p>
          </div>
          <ButtonLink
            href="/projects"
            variant="secondary"
            className="!hidden px-8 py-3 text-sm md:inline-flex md:w-auto"
          >
            Explore Projects
          </ButtonLink>
        </div>

        <ProjectList projects={list} itemWrapperClassName="projects-preview-card" />

        <div className="mt-8 md:hidden">
          <ButtonLink href="/projects" variant="secondary" className="w-full justify-center px-8 py-3 sm:w-auto">
            Explore Projects
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}

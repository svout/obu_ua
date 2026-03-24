import { Briefcase, Target, UsersRound } from 'lucide-react'
import { PageHero } from '@/components/sections/PageHero'
import { Container } from '@/components/layout/Container'
import { ProjectsExplorer } from '@/features/projects/ProjectsExplorer'
import { Button } from '@/components/ui/Button'
import { allProjects } from '@/lib/data/projects'

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      <PageHero
        title="Student"
        highlight="Projects"
        subtitle="Discover innovative ideas and collaborate with talented community members"
      />
      <section className="section-padding bg-white ">
        <Container>
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="mb-4 flex justify-center" aria-hidden>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-800">
                  <Briefcase className="h-8 w-8" strokeWidth={1.75} />
                </span>
              </div>
              <div className="font-display mb-2 text-4xl font-bold gradient-text">{allProjects.length}</div>
              <div className="text-neutral-600">Active Projects</div>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="mb-4 flex justify-center" aria-hidden>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-800">
                  <UsersRound className="h-8 w-8" strokeWidth={1.75} />
                </span>
              </div>
              <div className="font-display mb-2 text-4xl font-bold gradient-text">
                {allProjects.flatMap((project) => project.contributors ?? []).length}
              </div>
              <div className="text-neutral-600">Contributors</div>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="mb-4 flex justify-center" aria-hidden>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-800">
                  <Target className="h-8 w-8" strokeWidth={1.75} />
                </span>
              </div>
              <div className="font-display mb-2 text-4xl font-bold gradient-text">{allProjects.filter((project) => project.stage === 'Startup').length}</div>
              <div className="text-neutral-600">Launched Startups</div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-padding  pattern-bg bg-gradient-to-br from-neutral-50 to-white">
        <Container>
          <ProjectsExplorer projects={allProjects} />

          <div className="mt-4 rounded-2xl border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-blue-50 p-12 text-center">
            <div className="mb-4 text-6xl" aria-hidden>
              🚀
            </div>
            <h2 className="font-display mb-4 text-3xl font-bold md:text-4xl">
              Have a Project Idea?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-neutral-600">
              Share your startup, research, or creative project with the community. Get feedback,
              find collaborators, and bring your vision to life!
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button type="button" variant="primary" className="text-lg px-8 py-4">
                Submit Your Project
              </Button>
              <Button type="button" variant="secondary" className="text-lg px-8 py-4">
                Browse Guidelines
              </Button>
            </div>
          </div>
        </Container>
      </section>


    </div>
  )
}

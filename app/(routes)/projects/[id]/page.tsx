import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft, UsersRound } from 'lucide-react'
import { ProjectEngagement } from '@/components/projects/ProjectEngagement'
import { ProjectGallery } from '@/components/projects/ProjectGallery'
import { Badge } from '@/components/ui/Badge'
import { Container } from '@/components/layout/Container'
import { projectStageBadgeClass } from '@/features/projects/stageStyles'
import { getAllProjectIds, getProjectById } from '@/lib/data/projects'

type PageProps = {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return getAllProjectIds().map((id) => ({ id }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const project = getProjectById(id)
  if (!project) return { title: 'Not found' }
  return {
    title: `${project.title} | OBU UA`,
    description: project.description,
  }
}

function bodyParagraphs(text: string): string[] {
  return text
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean)
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params
  const project = getProjectById(id)
  if (!project) notFound()

  const detailParagraphs = project.body ? bodyParagraphs(project.body) : []
  const gallery = project.images?.filter(Boolean) ?? []

  return (
    <div className="pt-20">
      <article className="section-padding pattern-bg bg-surface pb-16">
        <Container className="max-w-3xl">
          <Link
            href="/projects"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-primary-800 hover:text-primary-950"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={2} aria-hidden />
            Back to projects
          </Link>

          <header className="mb-10">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <Badge className={projectStageBadgeClass[project.stage]}>{project.stage}</Badge>
              {project.lookingForTeam ? (
                <Badge className="inline-flex items-center gap-1 border border-accent-400/50 bg-accent-50 text-xs font-bold text-accent-800">
                  <UsersRound className="h-3.5 w-3.5" aria-hidden />
                  Looking for team
                </Badge>
              ) : null}
            </div>

            <h1 className="font-display text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
              {project.title}
            </h1>

            <p className="mt-4 text-lg text-neutral-600">{project.description}</p>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-neutral-600">
              <span>
                <span className="font-semibold text-neutral-800">Lead:</span> {project.author}
              </span>
              <span>
                <span className="font-semibold text-neutral-800">Contributors:</span>{' '}
                {(project.contributors ?? []).length}
              </span>
            </div>

            {project.tags.length > 0 ? (
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tags">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-neutral-600 ring-1 ring-neutral-200"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            ) : null}
          </header>

          {detailParagraphs.length > 0 ? (
            <div className="border-t border-neutral-200 pt-10">
              <h2 className="font-display mb-6 text-2xl font-bold text-neutral-900">About the project</h2>
              <div className="prose prose-neutral max-w-none space-y-5 text-lg leading-relaxed text-neutral-700">
                {detailParagraphs.map((p, index) => (
                  <p key={index}>{p}</p>
                ))}
              </div>
            </div>
          ) : null}
        </Container>
      </article>

      {gallery.length > 0 ? (
        <section className="border-t border-neutral-200 bg-white py-14 md:py-16" aria-label="Gallery">
          <Container className="max-w-7xl">
            <h2 className="font-display mb-8 text-2xl font-bold text-neutral-900 md:text-3xl">Gallery</h2>
            <p className="mb-6 text-sm text-neutral-500 md:hidden">Tap an image to view it full screen.</p>
            <p className="mb-6 hidden text-sm text-neutral-500 md:block">
              Click an image to open the lightbox. Use arrow keys or buttons to browse.
            </p>
            <ProjectGallery images={gallery} title={project.title} />
          </Container>
        </section>
      ) : null}
    </div>
  )
}

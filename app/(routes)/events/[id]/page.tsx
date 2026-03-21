import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, MapPin } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Container } from '@/components/layout/Container'
import {
  contentTypeLabel,
  formatContentDate,
  getAllContentIds,
  getContentById,
  type ContentItem,
} from '@/lib/content'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'

const badgeStyles: Record<ContentItem['type'], string> = {
  event: 'bg-primary-100 text-primary-900 ring-1 ring-primary-200/80',
  announcement: 'bg-amber-100 text-amber-950 ring-1 ring-amber-200/80',
  achievement: 'bg-violet-100 text-violet-950 ring-1 ring-violet-200/80',
}

type PageProps = {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return getAllContentIds().map((id) => ({ id }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const item = getContentById(id)
  if (!item) return { title: 'Not found' }
  return {
    title: `${item.title} | OBU UA`,
    description: item.description,
  }
}

function bodyParagraphs(content: string): string[] {
  return content
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean)
}

export default async function ContentDetailPage({ params }: PageProps) {
  const { id } = await params
  const item = getContentById(id)
  if (!item) notFound()

  const paragraphs = bodyParagraphs(item.content)
  const gallery = item.images ?? []

  return (
    <div className="pt-20">
      <article className="section-padding pattern-bg bg-surface pb-16">
        <Container className="max-w-3xl">
          <Link
            href="/events"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-primary-800 hover:text-primary-950"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={2} aria-hidden />
            Back to events & updates
          </Link>

          <header className="mb-10">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <Badge className={cn('font-semibold', badgeStyles[item.type])}>
                {contentTypeLabel(item.type)}
              </Badge>
              <time dateTime={item.date} className="text-sm font-medium text-neutral-500">
                {formatContentDate(item.date)}
              </time>
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
              {item.title}
            </h1>
            {item.location ? (
              <p className="mt-4 flex items-start gap-2 text-neutral-600">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-primary-700" strokeWidth={2} aria-hidden />
                <span>{item.location}</span>
              </p>
            ) : null}
            {item.tags && item.tags.length > 0 ? (
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tags">
                {item.tags.map((tag) => (
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

          <div className="prose prose-neutral max-w-none space-y-5 text-lg leading-relaxed text-neutral-700">
            {paragraphs.map((p, index) => (
              <p key={index}>{p}</p>
            ))}
          </div>
        </Container>
      </article>

      {gallery.length > 0 ? (
        <section className="border-t border-neutral-200 bg-white py-16" aria-label="Image gallery">
          <Container>
            <h2 className="font-display mb-8 text-2xl font-bold text-neutral-900">Gallery</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((src, index) => (
                <div
                  key={src}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-100 shadow-sm"
                >
                  <Image
                    src={src}
                    alt={`${item.title} — image ${index + 1}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </Container>
        </section>
      ) : null}
    </div>
  )
}

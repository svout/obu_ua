import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import type { ContentItem } from '@/lib/content'
import { contentTypeLabel, formatContentDate } from '@/lib/content'
import { cn } from '@/lib/utils'

const typeBadgeStyles: Record<ContentItem['type'], string> = {
  event: 'bg-primary-100 text-primary-900 ring-1 ring-primary-200/80',
  announcement: 'bg-amber-100 text-amber-950 ring-1 ring-amber-200/80',
  achievement: 'bg-violet-100 text-violet-950 ring-1 ring-violet-200/80',
}

export type ContentCardProps = {
  item: ContentItem
  variant?: 'default' | 'featured'
  className?: string
}

export function ContentCard({ item, variant = 'default', className }: ContentCardProps) {
  const cover = item.images?.[0]
  const isFeatured = variant === 'featured'

  return (
    <Link
      href={`/events/${item.id}`}
      className={cn('group block h-full outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2', className)}
    >
      <article
        className={cn(
          'flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover',
          isFeatured && 'md:flex-row md:items-stretch'
        )}
      >
        <div
          className={cn(
            'relative shrink-0 overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200',
            isFeatured ? 'aspect-[16/10] md:aspect-auto md:w-[46%] md:min-h-[280px]' : 'aspect-[16/10]'
          )}
        >
          {cover ? (
            <Image
              src={cover}
              alt={item.title}
              fill
              sizes={
                isFeatured
                  ? '(min-width: 768px) 46vw, 100vw'
                  : '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
              }
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div
              className="absolute inset-0 opacity-90"
              aria-hidden
              style={{
                backgroundImage:
                  'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.35), transparent 45%), radial-gradient(circle at 80% 60%, rgba(37,99,235,0.15), transparent 50%)',
              }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent md:from-black/50 md:to-transparent" />
          <Badge
            className={cn(
              'absolute left-4 top-4 font-semibold shadow-sm',
              typeBadgeStyles[item.type]
            )}
          >
            {contentTypeLabel(item.type)}
          </Badge>
        </div>

        <div className={cn('flex flex-1 flex-col p-6 md:p-8', isFeatured && 'md:py-10')}>
          <time
            dateTime={item.date}
            className="mb-2 text-sm font-medium tracking-wide text-neutral-500"
          >
            {formatContentDate(item.date)}
          </time>

          <h3
            className={cn(
              'font-display font-bold tracking-tight text-neutral-900 transition-colors group-hover:text-primary-800',
              isFeatured ? 'mb-4 text-2xl md:text-3xl' : 'mb-3 text-xl'
            )}
          >
            {item.title}
          </h3>

          {item.location ? (
            <p className="mb-3 flex items-start gap-2 text-sm text-neutral-600">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-700" strokeWidth={2} aria-hidden />
              <span>{item.location}</span>
            </p>
          ) : null}

          <p className="line-clamp-3 flex-1 leading-relaxed text-neutral-600">{item.description}</p>

          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-800">
            Read more
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              strokeWidth={2}
              aria-hidden
            />
          </span>
        </div>
      </article>
    </Link>
  )
}

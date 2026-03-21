import Link from 'next/link'
import type { ContentFilterParam } from '@/lib/content'
import { cn } from '@/lib/utils'

const FILTERS: { param: ContentFilterParam; label: string }[] = [
  { param: 'all', label: 'All' },
  { param: 'event', label: 'Events' },
  { param: 'achievement', label: 'Achievements' },
  { param: 'announcement', label: 'Announcements' },
]

export type ContentFiltersProps = {
  active: ContentFilterParam
  className?: string
}

function hrefFor(param: ContentFilterParam): string {
  if (param === 'all') return '/events'
  return `/events?type=${param}`
}

export function ContentFilters({ active, className }: ContentFiltersProps) {
  return (
    <nav
      aria-label="Filter content by type"
      className={cn('flex flex-wrap items-center justify-center gap-2 md:gap-3', className)}
    >
      {FILTERS.map(({ param, label }) => {
        const isActive = active === param
        return (
          <Link
            key={param}
            href={hrefFor(param)}
            scroll={false}
            className={cn(
              'rounded-full px-4 py-2 text-sm font-semibold transition-colors md:px-5 md:text-base',
              isActive
                ? 'bg-primary-900 text-white shadow-md shadow-primary-900/20'
                : 'bg-white text-neutral-700 ring-1 ring-neutral-200 hover:bg-neutral-50 hover:ring-primary-200'
            )}
          >
            {label}
          </Link>
        )
      })}
    </nav>
  )
}

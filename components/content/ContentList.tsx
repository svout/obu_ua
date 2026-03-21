import { ContentCard } from '@/components/content/ContentCard'
import type { ContentItem } from '@/lib/content'
import { cn } from '@/lib/utils'

export type ContentListProps = {
  items: ContentItem[]
  /** Optional class on each grid cell (e.g. GSAP hooks) */
  itemWrapperClassName?: string
  className?: string
}

export function ContentList({ items, itemWrapperClassName, className }: ContentListProps) {
  const list = items ?? []
  if (list.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-neutral-200 bg-neutral-50/80 px-6 py-14 text-center text-neutral-600">
        No items match this filter yet. Check back soon or view <strong>All</strong>.
      </p>
    )
  }

  return (
    <div
      className={cn('grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3', className)}
    >
      {list.map((item) => (
        <div key={item.id} className={itemWrapperClassName}>
          <ContentCard item={item} />
        </div>
      ))}
    </div>
  )
}

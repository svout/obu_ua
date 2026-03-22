import { ContentCard } from '@/components/content/ContentCard'
import { ContentFilters } from '@/components/content/ContentFilters'
import { ContentHeader } from '@/components/content/ContentHeader'
import { ContentList } from '@/components/content/ContentList'
import { Container } from '@/components/layout/Container'
import { ProposeEventSection } from '@/components/events/ProposeEventSection'
import {
  getContentFeed,
  getFeaturedContent,
  parseContentFilter,
} from '@/lib/content'

type EventsPageProps = {
  searchParams: Promise<{ type?: string }>
}

export default async function EventsPage({ searchParams }: EventsPageProps) {
  const sp = await searchParams
  const filter = parseContentFilter(sp.type)
  const featured = getFeaturedContent()
  const showFeatured = filter === 'all' && Boolean(featured)
  const feed = getContentFeed(filter, showFeatured ? featured?.id : undefined)

  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-900 to-primary-950 text-white">
        <Container>
          <ContentHeader
            variant="inverse"
            title="Events"
            highlight="& Updates"
            description="Event reports, community announcements, and achievements from Oxford Brookes Ukrainian Society — all in one place."
          />
        </Container>
      </section>

      <section className="section-padding pattern-bg bg-surface">
        <Container className="space-y-10">
          <ContentFilters active={filter} />

          {showFeatured && featured ? (
            <div>
              <p className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-neutral-500">
                Featured
              </p>
              <ContentCard item={featured} variant="featured" />
            </div>
          ) : null}

          <div>
            <h2 className="sr-only">Content feed</h2>
            <ContentList items={feed} />
          </div>
        </Container>
      </section>

      <ProposeEventSection />
    </div>
  )
}

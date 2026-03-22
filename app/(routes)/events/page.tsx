import { ContentCard } from '@/components/content/ContentCard'
import { ContentFilters } from '@/components/content/ContentFilters'
import { ContentHeader } from '@/components/content/ContentHeader'
import { ContentList } from '@/components/content/ContentList'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/layout/Container'
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

      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-900 to-primary-950 text-primary-100">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <h2 className="font-display text-primary-100 mb-6 text-4xl font-bold md:text-5xl">
            Want to organise an event?
          </h2>
          <p className="mb-8 text-xl text-white">
            Have an idea for the community? We&apos;d love to hear from you.
          </p>
          <Button type="button" variant="primary" className="bg-white text-primary-900 shadow-xl">
            Propose an event
          </Button>
        </div>
      </section>
    </div>
  )
}

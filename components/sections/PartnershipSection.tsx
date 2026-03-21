import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { partnershipOffers } from '@/lib/data/contact'

export function PartnershipSection() {
  return (
    <section className="section-padding pattern-bg bg-gradient-to-br from-neutral-50 to-white">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="font-display mb-4 text-4xl font-bold md:text-5xl">
            Partnership <span className="gradient-text">Opportunities</span>
          </h2>
          <p className="text-lg text-neutral-600">Collaborate with us to make a meaningful impact</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {partnershipOffers.map((offer) => (
            <div
              key={offer.title}
              className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-lg transition-all duration-300 hover:border-primary-300"
            >
              <h3 className="font-display mb-3 text-xl font-bold">{offer.title}</h3>
              <p className="mb-4 text-neutral-600">{offer.description}</p>
              <Link
                href="/contact"
                className="inline-flex font-semibold text-primary-900 transition-colors hover:text-primary-600"
              >
                Get in touch →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <ButtonLink href="/contact" variant="primary" className="px-10 py-4 text-lg">
            Contact us about partnerships
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}

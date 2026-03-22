import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { partnershipOffers } from '@/lib/data/contact'

export function PartnershipSection() {
  return (
    <section className="section-padding pattern-bg bg-gradient-to-br from-neutral-50 to-white">
      <Container>
        <div className="mb-10 text-center sm:mb-12 md:mb-16">
          <h2 className="font-display mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl md:text-5xl">
            Partnership <span className="gradient-text">Opportunities</span>
          </h2>
          <p className="text-base text-neutral-600 sm:text-lg">Collaborate with us to make a meaningful impact</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
          {partnershipOffers.map((offer) => (
            <div
              key={offer.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-lg transition-all duration-300 hover:border-primary-300 sm:p-8"
            >
              <h3 className="font-display mb-3 text-lg font-bold sm:text-xl">{offer.title}</h3>
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

        <div className="mt-10 flex flex-col items-stretch sm:mt-12 sm:items-center">
          <ButtonLink
            href="/contact"
            variant="primary"
            className="w-full justify-center px-8 py-3.5 text-base sm:w-auto sm:px-10 sm:py-4 sm:text-lg"
          >
            Contact us about partnerships
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}

import { PageHero } from '@/components/sections/PageHero'
import { ContactForm } from '@/components/sections/ContactForm'
import { Container } from '@/components/layout/Container'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { contactMethods } from '@/lib/data/contact'

export default function ContactPage() {
  return (
    <div className="pt-20">
      <PageHero
        title="Get in"
        highlight="Touch"
        subtitle="We&apos;d love to hear from you. Reach out anytime!"
      />

      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <ContactForm />

            <div>
              <h2 className="font-display mb-6 text-3xl font-bold gradient-text">Visit Us</h2>

              <div className="mb-6 rounded-2xl border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-blue-50 p-8">
                <div className="mb-6 flex items-start gap-4">
                  <span className="text-3xl" aria-hidden>
                    📍
                  </span>
                  <div>
                    <h3 className="font-display mb-2 text-lg font-bold">Our Location</h3>
                    <p className="text-neutral-700">
                      Student Union Building
                      <br />
                      Oxford Brookes University
                      <br />
                      Gipsy Lane Campus
                      <br />
                      Oxford, OX3 0BP
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-3xl" aria-hidden>
                    🕐
                  </span>
                  <div>
                    <h3 className="font-display mb-2 text-lg font-bold">Office Hours</h3>
                    <p className="text-neutral-700">
                      Monday - Friday: 10:00 AM - 4:00 PM
                      <br />
                      (During term time)
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border-2 border-accent-200 bg-gradient-to-br from-accent-50 to-yellow-50 p-8">
                <h3 className="font-display mb-4 text-xl font-bold">Quick Response Times</h3>
                <ul className="space-y-3 text-neutral-700">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Email: Within 24 hours</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Telegram: Within 2 hours</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-padding border-t border-neutral-200 bg-gradient-to-br from-neutral-50 to-white">
        <Container className="text-center">
          <h2 className="font-display mb-3 text-2xl font-bold text-neutral-900 md:text-3xl">
            Partnership <span className="gradient-text">Opportunities</span>
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-neutral-600">
            Sponsorship, collaborations, guest speaking, and more — see how we can work together.
          </p>
          <ButtonLink href="/partnership" variant="secondary" className="px-8 py-3">
            View partnership opportunities
          </ButtonLink>
        </Container>
      </section>
    </div>
  )
}

import Link from 'next/link'
import { ButtonLink } from '@/components/ui/ButtonLink'
import {
  communityBenefits,
  communitySocials,
  communityTestimonials,
} from '@/lib/data/community'
import { PageHero } from '@/components/sections/PageHero'

export default function CommunityPage() {
  return (
    <div className="pt-20">
      <PageHero
        title="Join Our"
        highlight="Community"
        subtitle="Be part of a vibrant network of Ukrainian students supporting each other's success"
      />
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="font-display mb-4 text-4xl font-bold md:text-5xl">
              Why <span className="gradient-text">Join Us?</span>
            </h2>
            <p className="text-lg text-neutral-600">Unlock exclusive benefits and opportunities</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {communityBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group rounded-2xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-50 p-8 shadow-lg transition-all duration-300 hover:border-primary-300"
              >
                <div className="mb-4 text-5xl transition-transform duration-300 group-hover:scale-110">
                  {benefit.icon}
                </div>
                <h3 className="font-display mb-3 text-xl font-bold transition-colors group-hover:text-primary-500">
                  {benefit.title}
                </h3>
                <p className="text-neutral-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pattern-bg bg-gradient-to-br from-neutral-50 to-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="font-display mb-4 text-4xl font-bold md:text-5xl">
              Member <span className="gradient-text">Stories</span>
            </h2>
            <p className="text-lg text-neutral-600">
              Hear from students who found their community with us
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {communityTestimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border-2 border-primary-100 bg-white p-8 shadow-lg transition-all duration-300 hover:border-primary-300"
              >
                <div className="mb-4 flex items-center">
                  <div className="mr-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary-100 to-accent-100 text-3xl">
                    {t.image}
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold">{t.name}</h4>
                    <p className="text-sm text-neutral-600">{t.role}</p>
                  </div>
                </div>

                <div className="mb-3 flex">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-xl text-accent-500" aria-hidden>
                      ⭐
                    </span>
                  ))}
                </div>

                <p className="italic text-neutral-700">&ldquo;{t.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-16 text-center">
            <h2 className="font-display mb-4 text-4xl font-bold md:text-5xl">
              How to <span className="gradient-text">Join</span>
            </h2>
            <p className="text-lg text-neutral-600">Getting started is easy</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                step: '1',
                title: 'Fill the Form',
                body: 'Complete our quick membership form with your details',
              },
              {
                step: '2',
                title: 'Join Our Channels',
                body: 'Connect with us on Telegram, Discord, and Instagram',
              },
              {
                step: '3',
                title: 'Attend Events',
                body: 'Come to your first event and meet the community',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-700 font-display text-3xl font-bold text-white">
                  {item.step}
                </div>
                <h3 className="font-display mb-3 text-xl font-bold">{item.title}</h3>
                <p className="text-neutral-600">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <ButtonLink href="/contact" variant="primary" className="px-10 py-4 text-lg">
              Start Your Journey
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="font-display mb-4 text-4xl font-bold md:text-5xl">
              Connect With <span className="text-accent-400">Us</span>
            </h2>
            <p className="text-lg text-blue-100">Join our community on your favorite platforms</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {communitySocials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
              >
                <div
                  className={`mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${social.gradient} text-4xl transition-transform group-hover:scale-110`}
                >
                  {social.icon}
                </div>
                <h3 className="font-display mb-2 text-xl font-bold">{social.platform}</h3>
                <p className="text-sm text-blue-100">{social.handle}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

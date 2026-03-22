import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'
import { JOIN_COMMUNITY_URL } from '@/lib/constants'

export function HomeCta() {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-900 to-primary-950 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-accent-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-primary-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-primary-100 mb-4 text-2xl font-bold tracking-tight sm:mb-5 sm:text-3xl md:text-5xl">
          Ready to join our community?
        </h2>
        <p className="mb-8 text-sm leading-relaxed text-primary-100 sm:mb-10 sm:text-base md:text-lg">
          Connect with fellow Ukrainian students, collaborate on projects, and build lasting
          friendships at Oxford Brookes.
        </p>

        <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
          <Link
            href={JOIN_COMMUNITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-primary-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-neutral-50 sm:w-auto"
          >
            Join now
            <ArrowRight className="h-5 w-5" aria-hidden />
          </Link>
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-white/80 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/10 sm:w-auto"
          >
            <Mail className="h-5 w-5" aria-hidden />
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  )
}

import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'

export function HomeCta() {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-900 to-primary-950 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-accent-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-primary-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center md:px-6">
        <h2 className="font-display mb-5 text-3xl font-bold tracking-tight md:text-5xl">
          Ready to join our community?
        </h2>
        <p className="mb-10 text-base leading-relaxed text-primary-100 md:text-lg">
          Connect with fellow Ukrainian students, collaborate on projects, and build lasting
          friendships at Oxford Brookes.
        </p>

        <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
          <Link
            href="/community"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-primary-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-neutral-50"
          >
            Join now
            <ArrowRight className="h-5 w-5" aria-hidden />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/80 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
          >
            <Mail className="h-5 w-5" aria-hidden />
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  )
}

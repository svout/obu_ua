import Link from 'next/link'
import { Instagram, Linkedin, MessageCircle, Send } from 'lucide-react'
import {
  CONTACT_EMAIL,
  FOOTER_QUICK_LINKS,
  SITE_NAME,
  SITE_TAGLINE,
} from '@/lib/constants'
import { Logo } from '@/components/ui/Logo'

type SocialLink = { name: string; href: string; Icon: typeof Instagram }

const socialLinks: SocialLink[] = [
  { name: 'Instagram', href: 'https://instagram.com', Icon: Instagram },
  { name: 'Telegram', href: 'https://t.me', Icon: Send },
  { name: 'Discord', href: 'https://discord.com', Icon: MessageCircle },
  { name: 'LinkedIn', href: 'https://linkedin.com', Icon: Linkedin },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="pattern-bg border-t border-neutral-200 bg-neutral-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-5">
              <Logo title={SITE_NAME} subtitle={SITE_TAGLINE} size="md" inverted />
            </div>
            <p className="mb-6 max-w-md text-sm leading-relaxed text-neutral-400">
              Building a vibrant community of Ukrainian students at Oxford Brookes University.
              Connect, collaborate, and celebrate our culture together.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:scale-105 hover:bg-primary-700"
                  aria-label={name}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-neutral-400">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-300 transition-colors hover:text-accent-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-neutral-400">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="transition-colors hover:text-accent-400"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="leading-relaxed">
                Oxford Brookes University
                <br />
                Oxford, UK
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-neutral-500 md:flex-row">
          <p suppressHydrationWarning>
            © {year} Oxford Brookes Ukrainian Society. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-accent-400">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-accent-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

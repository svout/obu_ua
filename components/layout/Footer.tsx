import Link from 'next/link'
import { Instagram, Linkedin, MessageCircle, Send } from 'lucide-react'
import {
  CONTACT_EMAIL,
  CREDIT_DEVELOPER_LINKEDIN_URL,
  CREDIT_DEVELOPER_NAME,
  FOOTER_QUICK_LINKS,
  SITE_NAME,
  SITE_TAGLINE,
} from '@/lib/constants'
import { Logo } from '@/components/ui/Logo'

type SocialLink = { name: string; href: string; Icon: typeof Instagram }

const socialLinks: SocialLink[] = [
  { name: 'Instagram', href: 'https://www.instagram.com/obu.ua/', Icon: Instagram },
  { name: 'Telegram', href: 'https://t.me', Icon: Send },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/oxford-brookes-ukrainian-society/', Icon: Linkedin },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="pattern-bg border-t bg-white text-neutral-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-5">
              <Logo title={SITE_NAME} subtitle={SITE_TAGLINE} size="md"/>
            </div>
            <p className="mb-6 max-w-md text-sm leading-relaxed text-neutral-900">
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
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-neutral-200 text-neutral-900 transition-all hover:scale-105 hover:bg-primary-700"
                  aria-label={name}
                >
                  <Icon className="h-5 w-5 text-neutral-900" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-neutral-900">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-900 transition-colors hover:text-primary-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-neutral-900">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm text-neutral-900">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="transition-colors hover:text-primary-700"
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

        <div className="mt-12 border-t border-neutral-200 pt-8 text-sm">
          <div className="flex w-full flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
            <p suppressHydrationWarning className="text-neutral-900">
              © {year} Oxford Brookes Ukrainian Society. All rights reserved.
            </p>
            <p className="text-neutral-500">
              Developed by{' '}
              <a
                href={CREDIT_DEVELOPER_LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-neutral-700 underline-offset-4 transition-colors hover:text-primary-700 hover:underline"
              >
                {CREDIT_DEVELOPER_NAME}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

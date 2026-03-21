'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import { NAV_ITEMS, SITE_NAME, SITE_TAGLINE } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { useScroll } from '@/hooks/useScroll'
import { Logo } from '@/components/ui/Logo'
import { ButtonLink } from '@/components/ui/ButtonLink'

export function Navbar() {
  const pathname = usePathname()
  const scrolled = useScroll(50)

  return (
    <nav
      className={cn(
        'fixed left-0 right-0 top-0 z-[100] transition-all duration-300',
        scrolled
          ? 'border-b border-neutral-200/80 bg-white/90 py-3 shadow-sm backdrop-blur-md'
          : 'bg-transparent py-5'
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="group flex min-w-0 items-center gap-2 rounded-lg outline-none ring-primary-800/20 focus-visible:ring-2">
          <Logo title={SITE_NAME} subtitle={SITE_TAGLINE} size="sm" className="transition-opacity group-hover:opacity-90" />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'inline-flex flex-col items-center text-sm font-semibold transition-colors',
                pathname === link.href
                  ? 'text-primary-900'
                  : 'text-neutral-600 hover:text-primary-800'
              )}
            >
              {link.label}
              {pathname === link.href ? (
                <span className="mt-1 h-0.5 w-full rounded-full bg-accent-500" />
              ) : (
                <span className="mt-1 h-0.5 w-full rounded-full bg-transparent" aria-hidden />
              )}
            </Link>
          ))}
        </div>

        <ButtonLink
          href="/community"
          variant="primary"
          className="hidden px-5 py-2.5 text-sm md:inline-flex"
        >
          Join Community
        </ButtonLink>

        <button
          type="button"
          className="rounded-lg p-2 text-neutral-800 md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" strokeWidth={2} />
        </button>
      </div>
    </nav>
  )
}

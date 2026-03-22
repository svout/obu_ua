'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_ITEMS, SITE_NAME, SITE_TAGLINE } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { useScroll } from '@/hooks/useScroll'
import { Logo } from '@/components/ui/Logo'
import { ButtonLink } from '@/components/ui/ButtonLink'

export function Navbar() {
  const pathname = usePathname()
  const scrolled = useScroll(50)
  const [menuOpen, setMenuOpen] = useState(false)
  const [panelIn, setPanelIn] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const navId = useId()

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
  }, [])

  useEffect(() => {
    closeMenu()
  }, [pathname, closeMenu])

  useEffect(() => {
    if (!menuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) {
      setPanelIn(false)
      return
    }
    const id = requestAnimationFrame(() => setPanelIn(true))
    return () => cancelAnimationFrame(id)
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen, closeMenu])

  return (
    <>
      <nav
        className={cn(
          'fixed left-0 right-0 top-0 z-[100] transition-all duration-300',
          scrolled
            ? 'border-b border-neutral-200/80 bg-white/90 py-3 shadow-sm backdrop-blur-md'
            : 'bg-transparent py-4 sm:py-5'
        )}
        aria-label="Primary"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="group flex min-w-0 max-w-[min(100%,14rem)] items-center gap-2 rounded-lg outline-none ring-primary-800/20 focus-visible:ring-2 sm:max-w-none"
          >
            <Logo
              title={SITE_NAME}
              subtitle={SITE_TAGLINE}
              size="sm"
              className="transition-opacity group-hover:opacity-90"
            />
          </Link>

          <div className="hidden items-center gap-6 lg:gap-8 md:flex">
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

          <div className="hidden items-center gap-3 md:flex">
            <ButtonLink href="/community" variant="primary" className="px-5 py-2.5 text-sm">
              Join Community
            </ButtonLink>
          </div>

          <button
            type="button"
            className="inline-flex shrink-0 items-center justify-center rounded-lg border border-neutral-200/80 bg-white/90 p-2.5 text-neutral-800 shadow-sm backdrop-blur-sm transition hover:bg-white md:hidden"
            aria-expanded={menuOpen}
            aria-controls={navId}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X className="h-6 w-6" strokeWidth={2} /> : <Menu className="h-6 w-6" strokeWidth={2} />}
          </button>
        </div>
      </nav>

      {menuOpen ? (
        <div className="fixed inset-0 z-[110] md:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <button
            type="button"
            className="absolute inset-0 bg-neutral-950/50 backdrop-blur-[2px] transition-opacity duration-300"
            style={{ opacity: panelIn ? 1 : 0 }}
            aria-label="Close menu"
            onClick={closeMenu}
          />

          <div
            ref={panelRef}
            id={navId}
            className={cn(
              'absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col border-l border-neutral-200/90 bg-white shadow-2xl transition-transform duration-300 ease-out',
              panelIn ? 'translate-x-0' : 'translate-x-full'
            )}
          >
            <div className="flex items-center justify-between border-b border-neutral-100 px-5 py-4">
              <span className="font-display text-lg font-bold text-primary-900">Menu</span>
              <button
                type="button"
                className="rounded-lg p-2 text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-900"
                aria-label="Close menu"
                onClick={closeMenu}
              >
                <X className="h-5 w-5" strokeWidth={2} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4" aria-label="Site sections">
              {NAV_ITEMS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={cn(
                    'rounded-xl px-4 py-3.5 text-base font-semibold transition-colors',
                    pathname === link.href
                      ? 'bg-primary-50 text-primary-900'
                      : 'text-neutral-700 hover:bg-neutral-50 hover:text-primary-900'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="border-t border-neutral-100 p-4">
              <ButtonLink href="/community" variant="primary" className="w-full justify-center py-3.5 text-sm" onClick={closeMenu}>
                Join Community
              </ButtonLink>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

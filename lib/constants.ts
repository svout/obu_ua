export const SITE_NAME = 'OBU UA'
export const SITE_TAGLINE = 'Oxford Brookes Ukrainian Society'

/** Brookes Union — страница Ukrainian Society (основной «Join») */
export const JOIN_COMMUNITY_URL =
  'https://brookesunion.com/societies/Ukrainian_Society'

export type NavItem = { href: string; label: string }

export const NAV_ITEMS: NavItem[] = [
  { href: '/about', label: 'About' },
  { href: '/events', label: 'Events' },
  { href: '/projects', label: 'Projects' },
  { href: '/community', label: 'Community' },
  { href: '/contact', label: 'Contact' },
  { href: '/partnership', label: 'Partnerships' },
]

export const FOOTER_QUICK_LINKS: NavItem[] = [
  { href: '/about', label: 'About Us' },
  { href: '/events', label: 'Events' },
  { href: '/projects', label: 'Projects' },
  { href: '/community', label: 'Community' },
  { href: '/partnership', label: 'Partnerships' },
]

export const CONTACT_EMAIL = 'contact@obuua.org'

export type ContactMethod = {
  icon: string
  title: string
  value: string
  href: string
}

export type PartnershipOffer = {
  title: string
  description: string
}

export const contactMethods: ContactMethod[] = [
  {
    icon: '📧',
    title: 'Email',
    value: 'contact@obuua.org',
    href: 'mailto:contact@obuua.org',
  },
  {
    icon: '✈️',
    title: 'Telegram',
    value: '@obuua',
    href: 'https://t.me/obuua',
  },
  {
    icon: '📷',
    title: 'Instagram',
    value: '@obu_ukrainian',
    href: 'https://instagram.com',
  },
  {
    icon: '💬',
    title: 'Discord',
    value: 'OBU UA Server',
    href: 'https://discord.com',
  },
]

export const partnershipOffers: PartnershipOffer[] = [
  {
    title: 'Sponsorship Opportunities',
    description:
      'Support our events and initiatives while gaining brand visibility among our community.',
  },
  {
    title: 'Collaboration Projects',
    description: 'Partner with us on research, cultural programs, or community initiatives.',
  },
  {
    title: 'Guest Speaking',
    description: 'Share your expertise with our members through workshops and talks.',
  },
  {
    title: 'Recruitment Access',
    description:
      'Connect with talented Ukrainian students for internships and job opportunities.',
  },
]

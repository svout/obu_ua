export type ContentType = 'event' | 'announcement' | 'achievement'

export type ContentItem = {
  id: string
  title: string
  type: ContentType
  /** ISO date string (YYYY-MM-DD) */
  date: string
  description: string
  content: string
  images?: string[]
  tags?: string[]
  location?: string
  /** Shown at top of /events when set (at most one recommended) */
  featured?: boolean
}

export const contentItems: ContentItem[] = [
  {
    id: 'ukrainian-culture-night-2025',
    title: 'Ukrainian Culture Night 2025',
    type: 'event',
    date: '2025-04-18',
    description:
      'An evening of live music, dance, and traditional food celebrating Ukrainian heritage with the Brookes community.',
    content: `Our flagship cultural evening returns to the Main Hall. The programme includes performances by student musicians, a short workshop on regional folk dance, and a shared meal with dishes contributed by members and local partners.

Doors open at 17:30 for refreshments; the formal programme runs from 18:15 to 21:00. We will also share information about volunteering for upcoming outreach activities.

Accessibility: step-free access via the east entrance; please email us if you need reserved seating.`,
    images: [
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200',
    ],
    tags: ['Culture', 'Community', 'Evening'],
    location: 'Main Hall, Oxford Brookes University',
    featured: true,
  },
  {
    id: 'society-wins-student-group-award',
    title: 'OBU UA recognised as Student Group of the Year',
    type: 'achievement',
    date: '2025-03-02',
    description:
      'The Students’ Union honoured our society for sustained community impact and inclusive programming.',
    content: `We are proud to share that Oxford Brookes Ukrainian Society received the Student Group of the Year award at the annual SU celebration.

The judges highlighted our peer-support initiatives, cultural programming, and collaboration with other societies on campus-wide events. This recognition belongs to every member who volunteered, attended, or helped spread the word.

Thank you to our committee, faculty supporters, and partners who made this possible. We will use the award grant to fund two additional workshops this term.`,
    images: ['https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200'],
    tags: ['Award', 'Students’ Union', 'Recognition'],
    location: 'Oxford Brookes University',
  },
  {
    id: 'networking-brussels-spring-2025',
    title: 'Networking evening: Ukrainian professionals in the UK',
    type: 'event',
    date: '2025-02-20',
    description:
      'Structured networking with alumni and guests from tech, policy, and non-profit sectors.',
    content: `We hosted an evening of roundtable introductions and open networking in the Innovation Lab. Guests included alumni now working in London and Oxford, and representatives from two charities supporting education partnerships.

The format was simple: short sector-based tables for the first hour, then open mingling. Several members secured follow-up coffee chats and one internship conversation is already in progress.

Slides and a contact sheet (opt-in) were shared with attendees after the event.`,
    images: ['https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200'],
    tags: ['Careers', 'Networking'],
    location: 'Innovation Lab, Headington Campus',
  },
  {
    id: 'humanitarian-fundraiser-results',
    title: 'Winter fundraiser: results and thank-you',
    type: 'announcement',
    date: '2025-01-28',
    description:
      'Together we raised over £4,200 for humanitarian aid; here is how funds were allocated.',
    content: `Thank you to everyone who donated time, raffle prizes, or money during our winter fundraiser.

Totals exceeded our goal. Allocation: 60% to medical supplies via our partner NGO, 25% to educational kits, 15% reserved for local emergency support for students in hardship.

A full receipt summary is available on request from the committee. Planning for the spring solidarity market is already underway—watch this space.`,
    tags: ['Fundraising', 'Community'],
    location: 'Oxford Brookes University',
  },
  {
    id: 'community-picnic-may-2025',
    title: 'Community picnic & welcome afternoon',
    type: 'event',
    date: '2025-05-10',
    description:
      'Outdoor welcome event for new members with games, snacks, and society onboarding.',
    content: `We will meet at University Park (south lawn, near the oak grove) from 12:00 to 16:00. Bring a blanket; we will provide water, fruit, and a limited number of sandwiches. Feel free to bring a dish to share.

Committee members will run a short welcome session at 13:00 covering how to join working groups, Discord, and our buddy scheme for new arrivals.

Rain plan: we will relocate to the Student Union ground-floor social space—check Instagram stories on the day.`,
    images: ['https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200'],
    tags: ['Social', 'Outdoors', 'Welcome'],
    location: 'University Park, Oxford Brookes',
  },
  {
    id: 'library-study-sessions',
    title: 'Weekly co-working: Headington library',
    type: 'announcement',
    date: '2025-01-15',
    description:
      'Informal co-working every Wednesday afternoon—no signup required.',
    content: `Starting this term, members meet on Level 2 of the Headington library every Wednesday from 14:00 to 17:00. Look for the small OBU UA card on the table.

This is not a formal workshop—just focused time alongside friends. Anyone is welcome, including students who are not yet members.

If the table is full, we sometimes spill to the café; check the society WhatsApp for the day-of pin.`,
    tags: ['Study', 'Weekly'],
    location: 'Headington Library, Level 2',
  },
  {
    id: 'film-screening-ukrainian-cinema',
    title: 'Film screening: contemporary Ukrainian cinema',
    type: 'event',
    date: '2024-11-08',
    description:
      'Screening followed by Q&A with a guest speaker on documentary storytelling.',
    content: `We screened a recent Ukrainian documentary and hosted a thirty-minute Q&A on ethics and production constraints in conflict reporting.

Attendance was capped at 80; we are exploring a repeat screening next term with open captions for a wider audience.

Thanks to the Film Society for technical support and to our guest for joining remotely.`,
    images: ['https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200'],
    tags: ['Film', 'Culture'],
    location: 'Cinema Hall, Oxford Brookes',
  },
  {
    id: 'research-collaboration-oxford-hub',
    title: 'Partnership signed with Oxford Hub for youth programmes',
    type: 'achievement',
    date: '2024-10-22',
    description:
      'A formal collaboration to co-design two mentorship weekends for sixth-form students.',
    content: `Committee leads met with Oxford Hub trustees to sign a memorandum of understanding. Over the next academic year we will co-deliver two mentorship weekends focusing on university applications and confidence building.

OBU UA members can volunteer as mentors; training will be provided in late November.

This partnership does not replace our existing SU activities—it extends our reach into regional schools.`,
    tags: ['Partnership', 'Education'],
    location: 'Oxford',
  },
  {
    id: 'tech-workshop-startup-basics',
    title: 'Workshop: from idea to MVP',
    type: 'event',
    date: '2024-09-14',
    description:
      'Hands-on session on lean validation and pitching, led by society alumni.',
    content: `Alumni founders walked through problem interviews, landing-page tests, and a five-slide pitch structure. Teams formed ad hoc and presented lightning pitches at the end.

Resources (Miro board and reading list) were shared by email to participants.

We plan a follow-up session on fundraising and grant writing in Hilary term.`,
    images: ['https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200'],
    tags: ['Workshop', 'Startups'],
    location: 'Business School, Oxford Brookes',
  },
]

function byDateDesc(a: ContentItem, b: ContentItem): number {
  return new Date(b.date).getTime() - new Date(a.date).getTime()
}

export function getSortedContent(): ContentItem[] {
  return [...contentItems].sort(byDateDesc)
}

export function getContentById(id: string): ContentItem | undefined {
  return contentItems.find((item) => item.id === id)
}

export function getFeaturedContent(): ContentItem | undefined {
  return contentItems.find((item) => item.featured === true)
}

/** Latest items for homepage (newest first). */
export function getLatestContent(count: number): ContentItem[] {
  return getSortedContent().slice(0, Math.max(0, count))
}

export type ContentFilterParam = 'all' | ContentType

export function parseContentFilter(value: string | string[] | undefined): ContentFilterParam {
  const raw = Array.isArray(value) ? value[0] : value
  if (raw === 'event' || raw === 'announcement' || raw === 'achievement') return raw
  return 'all'
}

/** Filtered list, newest first. Invalid filter values behave as `all`. */
export function getFilteredContent(filter: ContentFilterParam): ContentItem[] {
  const sorted = getSortedContent()
  if (filter === 'all') return sorted
  return sorted.filter((item) => item.type === filter)
}

/** Feed for /events: optional exclude (e.g. featured card shown separately). */
export function getContentFeed(filter: ContentFilterParam, excludeId?: string): ContentItem[] {
  return getFilteredContent(filter).filter((item) => item.id !== excludeId)
}

export function formatContentDate(iso: string): string {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function contentTypeLabel(type: ContentType): string {
  const labels: Record<ContentType, string> = {
    event: 'Event',
    announcement: 'Announcement',
    achievement: 'Achievement',
  }
  return labels[type]
}

export function getAllContentIds(): string[] {
  return contentItems.map((item) => item.id)
}

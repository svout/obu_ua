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
    id: 'rally-for-peace-oxford-2026',
    title: 'Rally for Peace in Oxford',
    type: 'event',
    date: '2026-02-22',
    description:
      'Marking 4 years since the full-scale invasion, members of the Oxford Brookes Ukrainian Society joined a city-wide rally to stand in solidarity with Ukraine and call for continued international support.',
    content: `Today marks 4 years since the full-scale invasion, and 12 years since the beginning of Russian aggression in Ukraine.
  
  On Sunday 22nd February, the Oxford Brookes Ukrainian Society took part in the Rally for Peace in Oxford. Standing in Radcliffe Square alongside partner organisations and supporters, we gathered with one clear goal: to show that Ukraine stands strong.
  
  This was not only a moment of remembrance, but a call to action. Each passing year reinforces how vital continued international support remains — for those defending Europe's security, for civilians affected by the war, and for those working tirelessly to save lives.
  
  Our Secretary, Yaroslav Kryvoshyia, spoke on behalf of the society, sharing his personal experience of the beginning of the war and his recent return to Ukraine. He described feeling a mixture of "fear, pride, and pain at the same time" — emotions that reflect the daily reality for millions.
  
  We extend our deepest gratitude to everyone who stood with us.
  
  Slava Ukraini.`,
    images: ['/images/event1.jpeg', '/images/event2.jpeg'],
    tags: ['Advocacy', 'Solidarity', 'Ukraine', 'Community'],
    location: 'Radcliffe Square, Oxford',
    featured: true
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
    images: [
      '/images/event3.jpeg',
      '/images/event4.jpeg',
      '/images/event5.jpeg',
      '/images/event6.jpeg',
    ],
    tags: ['Award', 'Students’ Union', 'Recognition'],
    location: 'Oxford Brookes University',
  },
  {
    id: 'interuniversity-ukrainian-societies-meet-2025',
    title: 'Inter-University Ukrainian Societies Meet',
    type: 'event',
    date: '2025-03-30',
    description:
      'Oxford Brookes Ukrainian Society hosted over 50 student leaders from across the UK, strengthening collaboration and building a unified network of Ukrainian student initiatives.',
    content: `On 30 March 2025, we hosted representatives from the University of Bristol Ukrainian Society and the University of the West of England (UWE) Ukrainian Society at Oxford Brookes University.
  
  Bringing together over 50 student representatives, the event created a platform for meaningful exchange, coordination, and long-term collaboration between Ukrainian societies across institutions.
  
  In partnership with Igor Radchenko and Alina Tarasova, Presidents of the Bristol and UWE Ukrainian Societies, we delivered a programme designed to move beyond introductions and into active dialogue. This included a welcome reception, collaborative workshops, and structured discussions encouraging critical thinking and diverse perspectives.
  
  This initiative reflects a broader goal: building a connected and resilient student network capable of amplifying Ukrainian voices, supporting community initiatives, and increasing collective impact across the UK.
  
  We extend our thanks to everyone involved in organising and supporting the event, and look forward to developing deeper collaborations in the future.`,
    images: [
      '/images/bristol1.jpeg',
      '/images/bristol2.jpeg',
      '/images/bristol3.jpeg',
      '/images/bristol4.jpeg',
    ],
    tags: ['Collaboration', 'Networking', 'Leadership', 'Community'],
    location: 'Oxford Brookes University, Oxford',
    featured: false
  },
  {
    id: 'cambridge-ukrainian-formal-dinner-2025',
    title: 'Cambridge Ukrainian Formal Dinner',
    type: 'event',
    date: '2025-03-14',
    description:
      'Oxford Brookes Ukrainian Society joined leading Ukrainian student organisations from across the UK at Cambridge, strengthening inter-university ties and expanding national collaboration.',
    content: `On 14 March 2025, representatives of the Oxford Brookes Ukrainian Society attended the Cambridge University Ukrainian Society’s Second Annual Ukrainian Formal Dinner at Churchill College, University of Cambridge.
  
  The event brought together over 60 guests, including student leaders, academics, and representatives of Ukrainian societies from across the UK. Alongside peers from Oxford, Nottingham, and national organisations, the evening provided an important space for connection, dialogue, and strengthening inter-university relationships.
  
  Our participation reflects a continued commitment to building a coordinated and active Ukrainian student network across the UK — one that fosters collaboration, shares resources, and amplifies collective impact.
  
  We extend our sincere thanks to the Cambridge University Ukrainian Society for their invitation and excellent organisation of the evening.
  
  We also congratulate Ivan Taran on his election as Chairman of the Ukrainian Students Union and look forward to working together in the year ahead.
  
  We remain focused on deepening partnerships and contributing to a stronger, more connected community.`,
    images: [
      '/images/cambridge2.jpeg',
      '/images/cambridge1.jpeg',
      '/images/cambridge3.jpeg',
    ],
    tags: ['Collaboration', 'Networking', 'Leadership', 'Community'],
    location: 'Churchill College, University of Cambridge',
    featured: false
  },
  {
    id: 'oxford-peace-rally-fundraising-2025',
    title: 'Oxford Peace Rally & Fundraising for Ukraine',
    type: 'event',
    date: '2025-02-23',
    description:
      'Marking the third anniversary of the full-scale invasion, the society contributed to a city-wide rally and helped raise over £1,000 in under a week to support rescue vehicle deliveries to Ukraine.',
    content: `On 23 February 2025, members of the Oxford Brookes Ukrainian Society took part in a Ukrainian Peace Rally in Oxford, marking the third anniversary of the full-scale Russian invasion.
  
  In collaboration with partner organisations and local initiatives, the rally served both as a moment of solidarity and a platform for action. Alongside the event and a film screening organised by our society, we supported fundraising efforts for “Driving Ukraine” — a student-led initiative delivering rescue vehicles to Ukraine.
  
  Through these combined efforts, over £1,000 was raised in less than a week, directly contributing to life-saving support on the ground.
  
  Our President, Nina Shestakova, выступила as one of the main speakers, sharing her personal story and reinforcing the importance of resilience, unity, and continued international attention. Members of the society also took part in interviews, representing the voice and experience of Ukrainians within the UK.
  
  This initiative reflects our ongoing commitment not only to raising awareness, but to delivering tangible impact.
  
  We thank everyone who contributed, supported, and stood with Ukraine.
  
  Slava Ukraini.`,
    images: [
      '/images/medical1.jpeg',
      '/images/medical2.jpeg',
      '/images/medical3.jpeg',
      '/images/medical4.jpeg',
    ],
    tags: ['Fundraising', 'Advocacy', 'Solidarity', 'Impact'],
    location: 'Oxford, United Kingdom',
    featured: true
  },
  {
    id: 'ukrainian-societies-summit-2024',
    title: 'Ukrainian Societies Summit 2024',
    type: 'event',
    date: '2024-11-24',
    description:
      'Oxford Brookes Ukrainian Society participated in a national summit bringing together Ukrainian student leaders, institutional partners, and senior representatives of Ukraine in the UK.',
    content: `On 24 November 2024, representatives of the Oxford Brookes Ukrainian Society attended the 3rd Summit of Ukrainian Societies, organised by the Ukrainian Students Union and hosted at the University of the West of England.
  
  The summit convened student leaders from across the UK, creating a platform for coordination, knowledge exchange, and the development of joint initiatives within the Ukrainian student network.
  
  The programme included contributions from key figures supporting Ukraine internationally. Volodymyr Sterenchuk, CEO of Nova Poshta UK, shared insights into the company’s operations and its role in maintaining critical logistics links with Ukraine during wartime.
  
  Participants also heard from Valerii Zaluzhnyi, Ambassador of Ukraine to the United Kingdom and former Commander-in-Chief of the Armed Forces of Ukraine. His address, delivered remotely, provided a strategic perspective on Ukraine’s position and reinforced the importance of sustained international engagement.
  
  Beyond the formal programme, the summit enabled direct collaboration between societies, leading to the development of new partnerships and future joint initiatives.
  
  Our participation reflects an ongoing commitment to contributing to a coordinated, effective, and nationally connected Ukrainian student movement in the UK.`,
    images: [
      '/images/summit1.jpeg',
      '/images/summit2.jpeg',
    ],
    tags: ['Leadership', 'Networking', 'Collaboration', 'Strategy'],
    location: 'University of the West of England, Bristol',
    featured: true
  },
  {
    id: 'zaluzhnyi-kcl-conversation-2024',
    title: 'Discussion with Ambassador Valerii Zaluzhnyi',
    type: 'event',
    date: '2024-10-03',
    description:
      'Members of the Oxford Brookes Ukrainian Society joined a high-level discussion with Ambassador Valerii Zaluzhnyi, engaging with strategic perspectives on Ukraine’s war effort and future development.',
    content: `On 3 October 2024, members of the Oxford Brookes Ukrainian Society attended a discussion with Valerii Zaluzhnyi, Ambassador of Ukraine to the United Kingdom and former Commander-in-Chief of the Armed Forces of Ukraine. The event was hosted by the KCL Ukrainian Society.
  
  As one of the largest events attended by our members since the society’s foundation, the discussion provided direct insight into Ukraine’s strategic situation and long-term outlook.
  
  Key topics included wartime strategy, Ukraine’s economic and investment prospects, and the role of Ukrainian students studying abroad in shaping the country’s future.
  
  Our participation reflects a continued effort to engage with high-level perspectives and bring these insights back into our community, strengthening both our internal direction and external impact.
  
  We thank the organisers for facilitating this opportunity and look forward to building on the connections and insights gained.`,
    images: [
      '/images/kcl1.jpeg',
      '/images/kcl2.jpeg',
    ],
    tags: ['Leadership', 'Strategy', 'Networking', 'Community'],
    location: 'King’s College London, London',
    featured: true
  },
  {
    id: 'ukrainian-students-union-partnership-2024',
    title: 'Partnership with Ukrainian Students Union',
    type: 'event',
    date: '2024-09-21',
    description:
      'Oxford Brookes Ukrainian Society formally joined the Ukrainian Students Union, becoming part of a national network of over 40 Ukrainian societies across the UK.',
    content: `On 21 September 2024, the Oxford Brookes Ukrainian Society formalised its partnership with the Ukrainian Students Union, marking a key step in the society’s development and national integration.
  
  By joining the Union, we became part of a coordinated network of over 40 Ukrainian societies across universities in the United Kingdom. This partnership provides a foundation for structured collaboration, shared initiatives, and stronger collective representation.
  
  Through this alignment, the society gains access to support in organising events, promoting Ukrainian culture, and expanding connections between students, scholars, and professionals across the UK.
  
  This milestone reflects a transition from an independent student group to an active contributor within a broader national movement, strengthening both our capacity and long-term impact.
  
  We look forward to building a productive and sustained collaboration in the years ahead.`,
    images: [
      '/images/usu1.jpeg',
    ],
    tags: ['Partnership', 'Leadership', 'Network', 'Growth'],
    location: 'United Kingdom',
    featured: true
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

import type { ProjectSummary } from '@/features/projects/types'

export type WhatWeDoCard = {
  icon: string
  title: string
  description: string
}

export const whatWeDoCards: WhatWeDoCard[] = [
  {
    icon: 'GraduationCap',
    title: 'Academic Support',
    description:
      'Peer mentoring, study groups, and resources to help you excel in your studies.',
  },
  {
    icon: 'Globe2',
    title: 'Cultural Events',
    description:
      'Celebrate Ukrainian traditions through festivals, concerts, and cultural exchanges.',
  },
  {
    icon: 'Briefcase',
    title: 'Career Development',
    description:
      'Workshops, networking events, and connections with industry professionals.',
  },
  {
    icon: 'Sparkles',
    title: 'Innovation Hub',
    description:
      'Support for student projects, startups, and entrepreneurial initiatives.',
  },
]

export const homeFeaturedProjects: ProjectSummary[] = [
  {
    id: '1',
    title: 'EduConnect Platform',
    description:
      'A mobile app connecting Ukrainian students with mentors and study groups across UK universities.',
    author: 'Anastasia K.',
    stage: 'MVP',
    tags: ['EdTech', 'Mobile', 'React Native'],
    lookingForTeam: true,
    likes: 23,
  },
  {
    id: '2',
    title: 'Cultural Heritage Archive',
    description:
      'Digital archive preserving Ukrainian folk traditions, stories, and artifacts for future generations.',
    author: 'Dmytro P.',
    stage: 'Research',
    tags: ['Digital Humanities', 'Archiving', 'Web'],
    likes: 18,
  },
  {
    id: '3',
    title: 'Green Campus Initiative',
    description:
      'Sustainability project reducing waste and promoting eco-friendly practices at Oxford Brookes.',
    author: 'Olena M.',
    stage: 'Startup',
    tags: ['Sustainability', 'Impact', 'Community'],
    lookingForTeam: true,
    likes: 31,
  },
]

export type HomeStat = {
  value: number
  label: string
  suffix?: string
  icon: string
}

export const homeStats: HomeStat[] = [
  { value: 50, label: 'Active Members', suffix: '+', icon: 'Users' },
  { value: 20, label: 'Events This Year', suffix: '+', icon: 'CalendarDays' },
  { value: 5, label: 'Student Projects', suffix: '', icon: 'Lightbulb' },
  { value: 7, label: 'Partnerships', suffix: '', icon: 'Handshake' },
]

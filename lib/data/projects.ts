import type { ProjectStage, ProjectSummary } from '@/features/projects/types'

export const allProjects: ProjectSummary[] = [
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
  {
    id: '4',
    title: 'Language Exchange App',
    description:
      'Platform matching Ukrainian and English speakers for language practice and cultural exchange.',
    author: 'Viktor S.',
    stage: 'Idea',
    tags: ['Language', 'Social', 'Mobile'],
    lookingForTeam: true,
    likes: 15,
  },
  {
    id: '5',
    title: 'AI-Powered CV Builder',
    description:
      'Tool helping international students create UK-optimized CVs with AI recommendations.',
    author: 'Maria L.',
    stage: 'MVP',
    tags: ['AI', 'Career', 'Web App'],
    likes: 27,
  },
  {
    id: '6',
    title: 'Ukrainian Music Streaming',
    description:
      'Curated platform showcasing contemporary Ukrainian artists and traditional folk music.',
    author: 'Bohdan T.',
    stage: 'Idea',
    tags: ['Music', 'Streaming', 'Culture'],
    lookingForTeam: true,
    likes: 12,
  },
  {
    id: '7',
    title: 'Student Housing Finder',
    description:
      'Marketplace connecting Ukrainian students with verified accommodation near campus.',
    author: 'Oksana R.',
    stage: 'Startup',
    tags: ['Housing', 'Marketplace', 'Mobile'],
    likes: 35,
  },
  {
    id: '8',
    title: 'Mental Health Support Bot',
    description:
      'Research into culturally-sensitive chatbot providing mental health resources for students.',
    author: 'Ivan K.',
    stage: 'Research',
    tags: ['Healthcare', 'AI', 'Psychology'],
    likes: 22,
  },
  {
    id: '9',
    title: 'Community Recipe Book',
    description:
      'Collaborative platform where members share family recipes and cooking traditions.',
    author: 'Natalia V.',
    stage: 'MVP',
    tags: ['Food', 'Community', 'Web'],
    likes: 19,
  },
]

export const projectStageFilters: Array<ProjectStage | 'All'> = [
  'All',
  'Startup',
  'MVP',
  'Idea',
  'Research',
]

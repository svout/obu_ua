import type {
  CommunityBenefit,
  CommunitySocial,
  CommunityTestimonial,
} from '@/features/community'

export const communityBenefits: CommunityBenefit[] = [
  {
    icon: 'academic',
    title: 'Academic Excellence',
    description:
      'Access peer tutoring, study groups, and academic resources to excel in your courses.',
  },
  {
    icon: 'networking',
    title: 'Networking',
    description:
      'Connect with fellow students, alumni, and professionals in your field of interest.',
  },
  {
    icon: 'cultural',
    title: 'Cultural Events',
    description:
      'Celebrate Ukrainian traditions through festivals, concerts, and cultural gatherings.',
  },
  {
    icon: 'career',
    title: 'Career Support',
    description:
      'Get help with CVs, interview prep, and access to exclusive job opportunities.',
  },
  {
    icon: 'projects',
    title: 'Project Collaboration',
    description: 'Find teammates for your startup ideas and research projects.',
  },
  {
    icon: 'growth',
    title: 'Personal Growth',
    description: 'Develop leadership skills through committee roles and event organization.',
  },
]

export const communityTestimonials: CommunityTestimonial[] = [
  {
    name: 'Yulia Bondarenko',
    role: 'Computer Science, Year 3',
    image: '👩‍💻',
    quote:
      'Joining OBU UA was the best decision of my university experience. I found my closest friends here and got invaluable support during tough times.',
    rating: 5,
  },
  {
    name: 'Andriy Kovalenko',
    role: 'Business Management, Year 2',
    image: '👨‍💼',
    quote:
      'The networking opportunities are incredible. Through the society, I connected with a mentor who helped me land my dream internship.',
    rating: 5,
  },
  {
    name: 'Kateryna Shevchenko',
    role: 'Engineering, Year 4',
    image: '👩‍🔬',
    quote:
      'I launched my startup idea through the projects program. The community feedback and support were instrumental to my success.',
    rating: 5,
  },
  {
    name: 'Oleksandr Petrenko',
    role: 'International Relations, Year 1',
    image: '👨‍🎓',
    quote:
      'As a first-year student, I was nervous about fitting in. OBU UA welcomed me with open arms and made Oxford feel like home.',
    rating: 5,
  },
]

export const communitySocials: CommunitySocial[] = [
  {
    platform: 'Instagram',
    icon: '📷',
    handle: '@obu_ukrainian',
    url: 'https://instagram.com',
    gradient: 'from-pink-500 to-purple-600',
  },
  {
    platform: 'Telegram',
    icon: '✈️',
    handle: '@obuua',
    url: 'https://t.me',
    gradient: 'from-blue-400 to-blue-600',
  },
  {
    platform: 'Discord',
    icon: '💬',
    handle: 'OBU UA Server',
    url: 'https://discord.com',
    gradient: 'from-indigo-500 to-indigo-700',
  },
  {
    platform: 'LinkedIn',
    icon: '💼',
    handle: 'OBU Ukrainian Society',
    url: 'https://linkedin.com',
    gradient: 'from-blue-600 to-blue-800',
  },
]

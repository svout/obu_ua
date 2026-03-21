export type AboutTimelineItem = {
  year: string
  title: string
  description: string
}

export type AboutTeamMember = {
  name: string
  role: string
  image: string
  bio: string
}

export type AboutAchievement = {
  icon: string
  title: string
  description: string
}

export const aboutTimeline: AboutTimelineItem[] = [
  {
    year: '2024',
    title: 'Society Founded',
    description:
      'A small group of Ukrainian students came together with a vision to create a supportive community.',
  },
  {
    year: '2025',
    title: 'First Cultural Festival',
    description:
      'Successfully organized our first major event celebrating Ukrainian culture and traditions.',
  },
  {
    year: '2026',
    title: 'Partnership Program',
    description: 'Launched partnerships with local businesses and UK Ukrainian organizations.',
  }
]

export const aboutTeam: AboutTeamMember[] = [
  {
    name: 'Nina Shestakova',
    role: 'President',
    image: '👩‍🎓',
    bio: 'BA Hons Business and Marketing Management student',
  },
  {
    name: 'Sofiia Olesnevych',
    role: 'Vice President',
    image: '👩‍🎓',
    bio: 'BA (Hons) Marketing Management student',
  },
  {
    name: 'Valeria Tebliashkina',
    role: 'Finance Secretary',
    image: '👩‍💼',
    bio: 'BA (Hons) Real Estate student',
  },
  {
    name: 'Pavlo Yakovenko',
    role: 'Events Secretary',
    image: '👨‍🎓',
    bio: 'BA (Hons) Biomedical Sciences student',
  },
  {
    name: 'Yaroslav Kryvoshyia',
    role: 'Publicity Secretary',
    image: '👨‍🎓',
    bio: 'LLB (Hons) Law student',
  },
  {
    name: 'Platon Shvets',
    role: 'Publicity Secretary',
    image: '👨‍🎓',
    bio: 'BSc Criminology and International Relations student',
  },
]

export const aboutAchievements: AboutAchievement[] = [
  {
    icon: '🏆',
    title: 'Society of the Year',
    description: 'Recognized for outstanding community impact',
  },
  {
    icon: '🌟',
    title: '50+ Active Members',
    description: 'One of the largest cultural societies at OBU',
  },
  {
    icon: '🎯',
    title: '30+ Events Organized',
    description: 'Creating memorable experiences all year round',
  },
  {
    icon: '💼',
    title: '7 Active Partnerships',
    description: 'Collaborating with leading organizations',
  },
]

export type AboutTimelineItem = {
  id: string
  /** Label shown on the card (year, month, or short date) */
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

/**
 * Chronological “Our Journey” — aligned with stories in `lib/content.ts`
 * (founding + USU first, then selected milestones).
 */
export const aboutTimeline: AboutTimelineItem[] = [
  {
    id: 'founded',
    year: '2024',
    title: 'Society founded at Oxford Brookes',
    description:
      'Ukrainian students came together to build a supportive space for culture, peer support, and advocacy on campus — the starting point for everything that followed.',
  },
  {
    id: 'usu-partnership',
    year: 'Sept 2024',
    title: 'Partnership with Ukrainian Students Union',
    description:
      'We formally joined the Ukrainian Students Union, linking OBU UA to a national network of 40+ Ukrainian societies and opening doors to shared initiatives across the UK.',
  },
  {
    id: 'summit-2024',
    year: 'Nov 2024',
    title: 'Ukrainian Societies Summit',
    description:
      'Representatives joined the 3rd Summit of Ukrainian Societies at UWE — coordinating with student leaders, hearing from partners like Nova Poshta UK, and strengthening national collaboration.',
  },
  {
    id: 'peace-rally-2025',
    year: 'Feb 2025',
    title: 'Oxford Peace Rally & fundraising',
    description:
      'We took part in the city’s peace rally marking the third anniversary of the full-scale invasion and helped raise over £1,000 in under a week for rescue vehicles to Ukraine.',
  },
  {
    id: 'student-group-of-year',
    year: 'Mar 2025',
    title: 'Student Group of the Year',
    description:
      'The Students’ Union recognised OBU UA for sustained community impact, inclusive programming, and collaboration with other societies — an award that belongs to every member.',
  },
  {
    id: 'inter-uni-meet',
    year: 'Mar 2025',
    title: 'Inter-University Ukrainian Societies Meet',
    description:
      'We hosted student leaders from Bristol, UWE, and beyond — over 50 representatives — for workshops and dialogue to build a stronger, connected network of Ukrainian initiatives.',
  },
  {
    id: 'rally-peace-2026',
    year: 'Feb 2026',
    title: 'Rally for Peace in Oxford',
    description:
      'Members stood in Radcliffe Square for the city-wide rally for Ukraine — remembrance, advocacy, and a clear call for continued international support alongside partner organisations.',
  },
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

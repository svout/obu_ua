/** Lucide icon id for benefit cards — mapped in the community page */
export type CommunityBenefitIconId =
  | 'academic'
  | 'networking'
  | 'cultural'
  | 'career'
  | 'projects'
  | 'growth'

export type CommunityBenefit = {
  icon: CommunityBenefitIconId
  title: string
  description: string
}

export type CommunityTestimonial = {
  name: string
  role: string
  image: string
  quote: string
  rating: number
}

export type CommunitySocial = {
  platform: string
  icon: string
  handle: string
  url: string
  gradient: string
}

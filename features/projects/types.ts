export type ProjectStage = 'Idea' | 'MVP' | 'Startup' | 'Research'

export type ProjectSummary = {
  id: string
  title: string
  description: string
  /** Додатковий текст для сторінки проекту; абзаци розділяйте порожнім рядком */
  body?: string
  /** Шляхи до зображень у `public/`, напр. `/images/project-photo.jpeg` */
  images?: string[]
  author: string
  stage: ProjectStage
  tags: string[]
  lookingForTeam?: boolean
  likes?: number
  contributors?: string[]
  ownerRole?: string
  contactEmail?: string
  contactTelegram?: string
}

export type ProjectStage = 'Idea' | 'MVP' | 'Startup' | 'Research'

export type ProjectSummary = {
  id: string
  title: string
  description: string
  author: string
  stage: ProjectStage
  tags: string[]
  lookingForTeam?: boolean
  likes?: number
}

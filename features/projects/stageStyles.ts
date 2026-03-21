import type { ProjectStage } from '@/features/projects/types'

export const projectStageBadgeClass: Record<ProjectStage, string> = {
  Idea: 'border border-purple-300 bg-purple-100 text-purple-700',
  MVP: 'border border-blue-300 bg-blue-100 text-blue-700',
  Startup: 'border border-green-300 bg-green-100 text-green-700',
  Research: 'border border-orange-300 bg-orange-100 text-orange-700',
}

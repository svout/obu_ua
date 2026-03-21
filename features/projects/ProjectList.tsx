import { cn } from '@/lib/utils'
import { ProjectCard } from '@/features/projects/ProjectCard'
import type { ProjectSummary } from '@/features/projects/types'

export type ProjectListProps = {
  projects: ProjectSummary[]
  itemWrapperClassName?: string
  className?: string
}

export function ProjectList({
  projects,
  itemWrapperClassName,
  className,
}: ProjectListProps) {
  const list = projects ?? []
  return (
    <div
      className={cn('grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3', className)}
    >
      {list.map((project) => (
        <div key={project.id} className={itemWrapperClassName}>
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  )
}

'use client'

import { useMemo, useState } from 'react'
import { ProjectList } from '@/features/projects/ProjectList'
import { projectStageFilters } from '@/lib/data/projects'
import type { ProjectStage, ProjectSummary } from '@/features/projects/types'
import { cn } from '@/lib/utils'

export type ProjectsExplorerProps = {
  projects: ProjectSummary[]
}

export function ProjectsExplorer({ projects }: ProjectsExplorerProps) {
  const [filter, setFilter] = useState<ProjectStage | 'All'>('All')

  const filtered = useMemo(() => {
    if (filter === 'All') return projects
    return projects.filter((p) => p.stage === filter)
  }, [filter, projects])

  return (
    <div>
      <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
        {projectStageFilters.map((stage) => (
          <button
            key={stage}
            type="button"
            onClick={() => setFilter(stage)}
            className={cn(
              'rounded-full px-6 py-2 text-sm font-semibold transition-all duration-300',
              filter === stage
                ? 'scale-105 bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            )}
          >
            {stage}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="py-20 text-center">
          <div className="mb-4 text-6xl" aria-hidden>
            💡
          </div>
          <h3 className="font-display mb-2 text-2xl font-bold">No projects in this category</h3>
          <p className="text-neutral-600">Try selecting a different filter</p>
        </div>
      ) : (
        <ProjectList projects={filtered} className="mb-12" />
      )}
    </div>
  )
}

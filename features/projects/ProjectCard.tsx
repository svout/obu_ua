 'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { ChevronRight, Heart, UsersRound } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { projectStageBadgeClass } from '@/features/projects/stageStyles'
import type { ProjectSummary } from '@/features/projects/types'
import { cn } from '@/lib/utils'

const LIKE_STORAGE_PREFIX = 'obu-project-liked:'

export type ProjectCardProps = ProjectSummary

export function ProjectCard({
  id,
  title,
  description,
  author,
  stage,
  tags,
  lookingForTeam = false,
  likes = 0,
}: ProjectCardProps) {
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    const stored = window.localStorage.getItem(`${LIKE_STORAGE_PREFIX}${id}`)
    setIsLiked(stored === '1')
  }, [id])

  const likeCount = useMemo(() => likes + (isLiked ? 1 : 0), [likes, isLiked])

  const onLikeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsLiked((prev) => {
      const next = !prev
      window.localStorage.setItem(`${LIKE_STORAGE_PREFIX}${id}`, next ? '1' : '0')
      return next
    })
  }

  return (
    <Link href={`/projects/${id}`} className="block h-full">
      <article className="group relative h-full rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-card card-hover">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <Badge className={projectStageBadgeClass[stage]}>{stage}</Badge>
          {lookingForTeam ? (
            <Badge className="inline-flex items-center gap-1 border border-accent-400/50 bg-accent-50 text-xs font-bold text-accent-800">
              <UsersRound className="h-3.5 w-3.5" aria-hidden />
              Looking for team
            </Badge>
          ) : null}
        </div>

        <h3 className="font-display mb-2 text-xl font-bold text-neutral-900 transition-colors group-hover:text-primary-800">
          {title}
        </h3>

        <div className="mb-3 flex items-center gap-2 text-sm text-neutral-600">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-primary-800 text-sm font-bold text-white">
            {author.charAt(0).toUpperCase()}
          </div>
          <span>{author}</span>
        </div>

        <p className="mb-4 line-clamp-3 text-neutral-600">{description}</p>

        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-neutral-100 pt-4">
          <button
            type="button"
            onClick={onLikeClick}
            aria-pressed={isLiked}
            aria-label={isLiked ? 'Unlike project' : 'Like project'}
            className="inline-flex items-center gap-1.5 rounded-md px-1.5 py-1 text-sm text-neutral-500 transition hover:bg-primary-50 hover:text-primary-900"
          >
            <Heart
              className={cn('h-4 w-4 text-primary-700/70', isLiked && 'fill-primary-700 text-primary-700')}
              strokeWidth={2}
              aria-hidden
            />
            <span>{likeCount}</span>
          </button>

          <div className="flex items-center gap-1 text-sm font-semibold text-primary-800 opacity-0 transition-opacity group-hover:opacity-100">
            <span>View details</span>
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </div>
        </div>
      </article>
    </Link>
  )
}

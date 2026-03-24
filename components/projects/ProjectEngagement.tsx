'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { Heart, Mail, MessageCircle, UsersRound } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const LIKE_STORAGE_PREFIX = 'obu-project-liked:'

export type ProjectEngagementProps = {
  projectId: string
  projectTitle: string
  initialLikes: number
  lookingForTeam: boolean
  ownerName: string
  ownerRole?: string
  contactEmail?: string
  contactTelegram?: string
}

export function ProjectEngagement({
  projectId,
  projectTitle,
  initialLikes,
  lookingForTeam,
  ownerName,
  ownerRole,
  contactEmail,
  contactTelegram,
}: ProjectEngagementProps) {
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    const stored = window.localStorage.getItem(`${LIKE_STORAGE_PREFIX}${projectId}`)
    setIsLiked(stored === '1')
  }, [projectId])

  const likeCount = useMemo(() => initialLikes + (isLiked ? 1 : 0), [initialLikes, isLiked])

  const toggleLike = () => {
    setIsLiked((prev) => {
      const next = !prev
      window.localStorage.setItem(`${LIKE_STORAGE_PREFIX}${projectId}`, next ? '1' : '0')
      return next
    })
  }

  return (
    <section className="mt-10 border-t border-neutral-200 pt-10">
      <h2 className="font-display mb-6 text-2xl font-bold text-neutral-900">Support this project</h2>

      <div className="rounded-2xl border border-neutral-200/90 bg-white p-6 shadow-card">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Project likes</p>
            <p className="mt-1 inline-flex items-center gap-2 text-lg font-semibold text-neutral-900">
              <Heart
                className={cn('h-5 w-5', isLiked ? 'fill-primary-700 text-primary-700' : 'text-primary-700/80')}
                strokeWidth={2}
                aria-hidden
              />
              {likeCount}
            </p>
          </div>
          <Button variant={isLiked ? 'secondary' : 'primary'} className="px-6 py-3" onClick={toggleLike}>
            {isLiked ? 'Liked' : 'Like project'}
          </Button>
        </div>
      </div>

      {lookingForTeam ? (
        <div className="mt-6 rounded-2xl border border-accent-300/60 bg-accent-50/50 p-6">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent-300/70 bg-white px-3 py-1 text-xs font-bold text-accent-900">
            <UsersRound className="h-3.5 w-3.5" aria-hidden />
            Looking for team
          </div>

          <h3 className="font-display text-xl font-bold text-neutral-900">Join this project</h3>
          <p className="mt-2 text-neutral-700">
            {projectTitle} is open for contributors. Reach out to the owner to discuss roles,
            responsibilities, and next steps.
          </p>

          <div className="mt-5 rounded-xl border border-white/80 bg-white/90 p-4">
            <p className="text-sm text-neutral-500">Project owner</p>
            <p className="mt-1 text-lg font-semibold text-neutral-900">{ownerName}</p>
            {ownerRole ? <p className="text-sm text-neutral-600">{ownerRole}</p> : null}

            <div className="mt-4 flex flex-wrap gap-3">
              {contactEmail ? (
                <Link
                  href={`mailto:${contactEmail}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm font-semibold text-neutral-800 transition hover:border-primary-300 hover:text-primary-900"
                >
                  <Mail className="h-4 w-4" aria-hidden />
                  {contactEmail}
                </Link>
              ) : null}
              {contactTelegram ? (
                <Link
                  href={`https://t.me/${contactTelegram.replace(/^@/, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm font-semibold text-neutral-800 transition hover:border-primary-300 hover:text-primary-900"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  {contactTelegram}
                </Link>
              ) : null}
              {!contactEmail && !contactTelegram ? (
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-primary-300 bg-white px-3 py-2 text-sm font-semibold text-primary-900 transition hover:bg-primary-50"
                >
                  Contact via form
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}

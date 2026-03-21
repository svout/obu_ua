import type { LucideIcon } from 'lucide-react'
import {
  Briefcase,
  CalendarDays,
  Circle,
  Globe2,
  GraduationCap,
  Handshake,
  Lightbulb,
  Rocket,
  Sparkles,
  Target,
  Users,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const ICONS: Record<string, LucideIcon> = {
  Users,
  CalendarDays,
  Lightbulb,
  Handshake,
  GraduationCap,
  Globe2,
  Briefcase,
  Sparkles,
  Rocket,
  Target,
}

export type IconByNameProps = {
  name: string
  className?: string
}

export function IconByName({ name, className }: IconByNameProps) {
  const Icon = ICONS[name] ?? Circle
  return <Icon className={cn('shrink-0', className)} strokeWidth={1.75} aria-hidden />
}

import { cn } from '@/lib/utils'

export type LogoProps = {
  /** Primary line, e.g. OBU UA */
  title?: string
  /** Secondary line under title */
  subtitle?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
  /** Flag + wordmark only (no subtitle block) */
  compact?: boolean
  /** Light text for dark backgrounds (e.g. footer) */
  inverted?: boolean
}

const flagSize: Record<NonNullable<LogoProps['size']>, string> = {
  sm: 'h-9 w-9',
  md: 'h-11 w-11',
  lg: 'h-14 w-14',
}

const titleClass: Record<NonNullable<LogoProps['size']>, string> = {
  sm: 'text-lg',
  md: 'text-xl',
  lg: 'text-2xl',
}

/**
 * Wordmark with circular Ukrainian flag (blue over yellow).
 */
export function Logo({
  title = 'OBU UA',
  subtitle,
  size = 'sm',
  className,
  compact = false,
  inverted = false,
}: LogoProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>

      <div className="text-4xl">
        🌻
      </div>
      {!compact ? (
        <div className="min-w-0 leading-tight">
          <div
            className={cn(
              'font-display font-bold tracking-tight',
              inverted ? 'text-white' : 'text-primary-900',
              titleClass[size]
            )}
          >
            {title}
          </div>
          {subtitle ? (
            <div
              className={cn(
                'text-xs font-medium',
                inverted ? 'text-neutral-400' : 'text-neutral-600'
              )}
            >
              {subtitle}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}

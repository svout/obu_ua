import { cn } from '@/lib/utils'

export type ContentHeaderProps = {
  title: string
  highlight?: string
  description: string
  /** `inverse`: light text on dark hero backgrounds */
  variant?: 'default' | 'inverse'
  className?: string
}

export function ContentHeader({
  title,
  highlight,
  description,
  variant = 'default',
  className,
}: ContentHeaderProps) {
  const inverse = variant === 'inverse'
  return (
    <header className={cn('mx-auto max-w-3xl text-center', className)}>
      <h1
        className={cn(
          'font-display mb-4 text-3xl font-bold tracking-tight md:text-7xl',
          inverse ? 'text-white' : 'text-white'
        )}
      >
        {title}
        {highlight ? (
          <>
            {' '}
            <span className={inverse ? 'text-accent-400' : 'gradient-text'}>{highlight}</span>
          </>
        ) : null}
      </h1>
      <p
        className={cn(
          'text-lg leading-relaxed md:text-xl',
          inverse ? 'text-primary-100' : 'text-neutral-600'
        )}
      >
        {description}
      </p>
    </header>
  )
}

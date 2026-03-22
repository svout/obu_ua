import { cn } from '@/lib/utils'

export type SectionHeadingProps = {
  title: string
  highlight: string
  description?: string
  className?: string
}

export function SectionHeading({
  title,
  highlight,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-10 text-center sm:mb-12 md:mb-14', className)}>
      <h2 className="font-display mb-2 text-2xl font-bold tracking-tight text-neutral-900 sm:mb-3 sm:text-3xl md:text-5xl">
        {title} <span className="gradient-text">{highlight}</span>
      </h2>
      {description ? (
        <p className="mx-auto max-w-2xl text-sm text-neutral-600 sm:text-base md:text-lg">{description}</p>
      ) : null}
    </div>
  )
}

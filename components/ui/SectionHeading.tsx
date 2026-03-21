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
    <div className={cn('mb-12 text-center md:mb-14', className)}>
      <h2 className="font-display mb-3 text-3xl font-bold tracking-tight text-neutral-900 md:text-5xl">
        {title} <span className="gradient-text">{highlight}</span>
      </h2>
      {description ? (
        <p className="mx-auto max-w-2xl text-base text-neutral-600 md:text-lg">{description}</p>
      ) : null}
    </div>
  )
}

import { cn } from '@/lib/utils'

export type PageHeroProps = {
  title: string
  highlight: string
  subtitle: string
  className?: string
}

export function PageHero({ title, highlight, subtitle, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        'section-padding bg-gradient-to-br from-primary-900 via-primary-900 to-primary-950 text-white',
        className
      )}
    >
      <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
        <h1 className="font-display mb-5 text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
          {title}{' '}
          <span className="text-accent-400">{highlight}</span>
        </h1>
        <p className="text-lg font-normal leading-relaxed text-primary-100 md:text-xl">{subtitle}</p>
      </div>
    </section>
  )
}

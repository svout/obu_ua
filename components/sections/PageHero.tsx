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
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="font-display mb-4 text-3xl font-bold tracking-tight text-white sm:mb-5 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          {title}{' '}
          <span className="text-accent-400">{highlight}</span>
        </h1>
        <p className="text-base font-normal leading-relaxed text-primary-100 sm:text-lg md:text-xl">{subtitle}</p>
      </div>
    </section>
  )
}

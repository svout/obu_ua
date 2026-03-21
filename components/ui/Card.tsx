import { cn } from '@/lib/utils'

export type CardProps = {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-neutral-200 bg-white shadow-lg transition-all duration-300',
        className
      )}
    >
      {children}
    </div>
  )
}

import Link, { type LinkProps } from 'next/link'
import { cn } from '@/lib/utils'
import type { ButtonVariant } from '@/components/ui/Button'

const variantClass: Record<ButtonVariant, string> = {
  primary: 'btn-primary inline-flex items-center justify-center text-center',
  secondary: 'btn-secondary inline-flex items-center justify-center text-center',
}

export type ButtonLinkProps = LinkProps & {
  variant?: ButtonVariant
  className?: string
  children: React.ReactNode
}

export function ButtonLink({
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={cn(variantClass[variant], className)} {...props}>
      {children}
    </Link>
  )
}

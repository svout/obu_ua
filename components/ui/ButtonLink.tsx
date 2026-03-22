import Link, { type LinkProps } from 'next/link'
import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import type { ButtonVariant } from '@/components/ui/Button'

const variantClass: Record<ButtonVariant, string> = {
  primary: 'btn-primary inline-flex items-center justify-center text-center',
  secondary: 'btn-secondary inline-flex items-center justify-center text-center',
}

export type ButtonLinkProps = LinkProps & {
  variant?: ButtonVariant
  className?: string
  children: ReactNode
} & Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'rel'>

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

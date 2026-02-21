import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

type Variant = 'primary' | 'ghost'

type ButtonProps = PropsWithChildren<
  {
    variant?: Variant
    className?: string
  } & ButtonHTMLAttributes<HTMLButtonElement>
>

export function Button({
  variant = 'primary',
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = [
    'btn',
    `btn--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}



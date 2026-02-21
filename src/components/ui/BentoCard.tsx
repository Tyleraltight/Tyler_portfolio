import type { PropsWithChildren, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'subtle'

type ResponsiveSpan = {
  base?: number
  md?: number
  lg?: number
}

export type BentoCardProps = PropsWithChildren<{
  variant?: Variant
  colSpan?: ResponsiveSpan
  rowSpan?: ResponsiveSpan
  interactive?: boolean
  accent?: ReactNode
  className?: string
  href?: string
}>

export function BentoCard({
  variant = 'secondary',
  colSpan,
  rowSpan,
  interactive = false,
  accent,
  className,
  href,
  children,
}: BentoCardProps) {
  const classes = [
    'bento-card',
    `bento-card--${variant}`,
    interactive && 'bento-card--interactive',
    colSpan?.base && `col-span-${colSpan.base}`,
    rowSpan?.base && `row-span-${rowSpan.base}`,
    colSpan?.md && `col-span-md-${colSpan.md}`,
    rowSpan?.md && `row-span-md-${rowSpan.md}`,
    colSpan?.lg && `col-span-lg-${colSpan.lg}`,
    rowSpan?.lg && `row-span-lg-${rowSpan.lg}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const content = (
    <div className={classes}>
      {accent && <div className="bento-card-accent">{accent}</div>}
      <div className="bento-card-body">{children}</div>
    </div>
  )

  if (href) {
    return (
      <a href={href} className="bento-card-link" target="_blank" rel="noreferrer">
        {content}
      </a>
    )
  }

  return content
}



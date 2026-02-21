import type { PropsWithChildren } from 'react'

type ResponsiveSpan = {
  base?: number
  md?: number
  lg?: number
}

export type BentoGridItemSpan = {
  colSpan?: ResponsiveSpan
  rowSpan?: ResponsiveSpan
}

type BentoGridProps = PropsWithChildren<{
  className?: string
}>

export function BentoGrid({ className, children }: BentoGridProps) {
  return (
    <div className={['bento-grid', className].filter(Boolean).join(' ')}>
      {children}
    </div>
  )
}



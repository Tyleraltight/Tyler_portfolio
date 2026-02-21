import type { PropsWithChildren } from 'react'

type TypographyProps = PropsWithChildren<{
  className?: string
}>

export function Heading({ children, className }: TypographyProps) {
  return <h1 className={['heading', className].filter(Boolean).join(' ')}>{children}</h1>
}

export function Subheading({ children, className }: TypographyProps) {
  return (
    <h2 className={['subheading', className].filter(Boolean).join(' ')}>{children}</h2>
  )
}

export function Body({ children, className }: TypographyProps) {
  return <p className={['body', className].filter(Boolean).join(' ')}>{children}</p>
}

export function MetaText({ children, className }: TypographyProps) {
  return (
    <p className={['meta-text', className].filter(Boolean).join(' ')}>{children}</p>
  )
}



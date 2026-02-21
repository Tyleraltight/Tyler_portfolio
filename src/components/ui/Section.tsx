import type { PropsWithChildren, ReactNode } from 'react'

type SectionProps = PropsWithChildren<{
  id?: string
  title?: ReactNode
  subtitle?: ReactNode
  description?: ReactNode
  className?: string
}>

export function Section({
  id,
  title,
  subtitle,
  description,
  className,
  children,
}: SectionProps) {
  return (
    <section id={id} className={['section', className].filter(Boolean).join(' ')}>
      {(title || subtitle || description) && (
        <header className="section-header">
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
          {title && <h2 className="section-title">{title}</h2>}
          {description && (
            <p className="section-description">{description}</p>
          )}
        </header>
      )}
      <div className="section-body">{children}</div>
    </section>
  )
}



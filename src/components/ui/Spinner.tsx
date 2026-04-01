import type { CSSProperties } from 'react'

interface SpinnerProps {
  size?: number
  color?: string
  className?: string
}

export function Spinner({ size = 24, color = '#94a3b8', className }: SpinnerProps) {
  const style: CSSProperties = {
    width: size,
    height: size,
    borderColor: `${color}33`,
    borderTopColor: color,
  }

  return <span className={`spinner ${className ?? ''}`} style={style} />
}

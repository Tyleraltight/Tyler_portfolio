import { useState } from 'react'

export function BackToTop() {
  const [isHovered, setIsHovered] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      className="back-to-top-btn"
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Back to top"
    >
      {isHovered ? (
        <span className="back-to-top-text">TOP</span>
      ) : (
        <svg
          width="56"
          height="56"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="back-to-top-icon"
        >
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      )}
    </button>
  )
}

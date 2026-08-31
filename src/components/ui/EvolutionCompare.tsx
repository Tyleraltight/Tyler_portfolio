import { motion } from 'framer-motion'

type EvolutionCompareProps = {
  originImage: string
  originLabel: string
  resultImage: string
  resultLabel: string
  story: string
  zhStory?: string
  language?: string
}

export function EvolutionCompare({
  originImage,
  originLabel,
  resultImage,
  resultLabel,
  story,
  zhStory,
  language = 'en',
}: EvolutionCompareProps) {
  const currentStory = language === 'zh' && zhStory ? zhStory : story

  return (
    <div className="pure-evolution-flow">
      <div className="pure-evolution-stage">
        {/* Step 1: Origin Image */}
        <motion.div
          className="pure-evolution-item pure-evolution-item--origin"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
        >
          <img src={originImage} alt={originLabel} className="pure-evolution-image pure-evolution-image--origin" />
          <span className="pure-evolution-label">{originLabel}</span>
        </motion.div>

        {/* Transition Arrow */}
        <div className="pure-evolution-arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Step 2: Full IP Master Sheet */}
        <motion.div
          className="pure-evolution-item pure-evolution-item--result"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1], delay: 0.08 }}
        >
          <img src={resultImage} alt={resultLabel} className="pure-evolution-image pure-evolution-image--result" />
          <span className="pure-evolution-label">{resultLabel}</span>
        </motion.div>
      </div>

      {/* Clean Editorial Story Paragraph */}
      <p className="editorial-narrative-text">{currentStory}</p>
    </div>
  )
}

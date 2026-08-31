import { motion } from 'framer-motion'

type EvolutionCompareProps = {
  originImage: string
  originLabel: string
  midImage?: string
  midLabel?: string
  resultImage: string
  resultLabel: string
  story: string
  zhStory?: string
  language?: string
  onImageClick?: (src: string) => void
}

export function EvolutionCompare({
  originImage,
  originLabel,
  midImage,
  midLabel,
  resultImage,
  resultLabel,
  story,
  zhStory,
  language = 'en',
  onImageClick,
}: EvolutionCompareProps) {
  const currentStory = language === 'zh' && zhStory ? zhStory : story

  return (
    <div className="pure-evolution-flow">
      <div className="pure-evolution-stage">
        {/* Step 1: Origin Image (Google Antigravity Logo) */}
        <motion.div
          className="pure-evolution-item pure-evolution-item--origin"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          onClick={() => onImageClick?.(originImage)}
        >
          <img src={originImage} alt={originLabel} className="pure-evolution-image pure-evolution-image--origin" />
          <span className="pure-evolution-label">{language === 'zh' ? '01 原型 LOGO' : originLabel}</span>
        </motion.div>

        {/* Transition Arrow 1 */}
        <div className="pure-evolution-arrow">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M4 12h16M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Step 2: Mid Image (Pixel Mascot Sprite) */}
        {midImage && (
          <>
            <motion.div
              className="pure-evolution-item pure-evolution-item--mid"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1], delay: 0.05 }}
              onClick={() => onImageClick?.(midImage)}
            >
              <img src={midImage} alt={midLabel || 'Pixel Mascot'} className="pure-evolution-image pure-evolution-image--mid" />
              <span className="pure-evolution-label">{language === 'zh' ? '02 像素角色原型' : (midLabel || 'Pixel Mascot')}</span>
            </motion.div>

            {/* Transition Arrow 2 */}
            <div className="pure-evolution-arrow">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M4 12h16M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </>
        )}

        {/* Step 3: Full IP Master Sheet */}
        <motion.div
          className="pure-evolution-item pure-evolution-item--result"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
          onClick={() => onImageClick?.(resultImage)}
        >
          <img src={resultImage} alt={resultLabel} className="pure-evolution-image pure-evolution-image--result" />
          <span className="pure-evolution-label">{language === 'zh' ? '03 IP 角色矩阵总装' : resultLabel}</span>
        </motion.div>
      </div>

      {/* Clean Editorial Story Paragraph */}
      <p className="editorial-narrative-text">{currentStory}</p>
    </div>
  )
}

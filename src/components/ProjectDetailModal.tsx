import { useEffect } from 'react'
import { motion } from 'framer-motion'
import type { Project } from '../data/projects'
import { EvolutionCompare } from './ui/EvolutionCompare'
import { useLanguage } from '../contexts/LanguageContext'

type Props = {
    project: Project
    onClose: () => void
}

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
}

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: 'spring' as const, damping: 30, stiffness: 300 },
    },
    exit: {
        opacity: 0,
        y: 20,
        scale: 0.98,
        transition: { duration: 0.18, ease: 'easeOut' as const },
    },
}

export function ProjectDetailModal({ project, onClose }: Props) {
    const { language } = useLanguage()

    // Resolve localized strings cleanly
    const title = language === 'zh' && project.zh?.title ? project.zh.title : project.title
    const subtitle = language === 'zh' && project.zh?.subtitle ? project.zh.subtitle : project.subtitle
    const description = language === 'zh' && project.zh?.description ? project.zh.description : project.description
    const concept = language === 'zh' && project.zh?.concept ? project.zh.concept : project.concept
    const workflow = language === 'zh' && project.zh?.workflow ? project.zh.workflow : project.workflow
    const useCase = language === 'zh' && project.zh?.useCase ? project.zh.useCase : project.useCase

    const hasVideo = !!project.videoUrl
    const hasImage = !!project.image
    const hasCaseStudy = !!(concept || workflow || useCase)
    const hasEvolution = !!project.evolution

    // Lock body scroll when modal is open
    useEffect(() => {
        const prev = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = prev
        }
    }, [])

    // Close on Escape key
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }, [onClose])

    return (
        <motion.div
            className="editorial-backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.22 }}
            onClick={onClose}
        >
            <motion.div
                className="editorial-sheet"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
            >
                {/* ── Top Bar: Title & Sans-serif Close Button on Same Line ── */}
                <header className="editorial-top-bar">
                    <div className="editorial-top-title-group">
                        <span className="editorial-top-main-title">{title}</span>
                        {subtitle && <span className="editorial-top-subtitle-badge">{subtitle}</span>}
                    </div>
                    <button className="editorial-close-btn" onClick={onClose} aria-label="Close">
                        ×
                    </button>
                </header>

                {/* ── Main Editorial Document Flow ── */}
                <div className="editorial-body">
                    {/* CASE A: Evolution Project (Rainbow Byte) — Immediate full-screen Origin → Finished Product comparison */}
                    {hasEvolution && project.evolution && project.image ? (
                        <section className="editorial-spread editorial-spread--evolution">
                            <EvolutionCompare
                                originImage={project.evolution.originImage}
                                originLabel={project.evolution.originLabel}
                                resultImage={project.image}
                                resultLabel={project.evolution.resultLabel}
                                story={project.evolution.story}
                                zhStory={project.evolution.zhStory}
                                language={language}
                            />
                        </section>
                    ) : (
                        /* CASE B: Standard Design Project (IRONBITE, IANG) — Clean uncropped hero + Frameless Narrative */
                        <section className="editorial-spread editorial-spread--hero">
                            {hasVideo ? (
                                <div className="pure-hero-media-wrap">
                                    <video
                                        src={project.videoUrl}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="pure-hero-media"
                                    />
                                </div>
                            ) : hasImage ? (
                                <div className="pure-hero-media-wrap">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="pure-hero-media"
                                    />
                                </div>
                            ) : null}

                            {description && (
                                <p className="editorial-narrative-text">{description}</p>
                            )}
                        </section>
                    )}

                    {/* SPREAD 3: Process & Case Study Columns (01 Concept, 02 Workflow, 03 Deliverables) */}
                    {hasCaseStudy && (
                        <section className="editorial-spread editorial-spread--process">
                            <div className="editorial-process-grid">
                                {concept && (
                                    <div className="editorial-process-col">
                                        <div className="editorial-col-header">
                                            <span className="editorial-col-num">01</span>
                                            <h4 className="editorial-col-title">
                                                {language === 'zh' ? '核心概念' : 'Concept'}
                                            </h4>
                                        </div>
                                        <p className="editorial-col-body">{concept}</p>
                                    </div>
                                )}

                                {workflow && (
                                    <div className="editorial-process-col">
                                        <div className="editorial-col-header">
                                            <span className="editorial-col-num">02</span>
                                            <h4 className="editorial-col-title">
                                                {language === 'zh' ? '设计推导' : 'Workflow'}
                                            </h4>
                                        </div>
                                        <p className="editorial-col-body">{workflow}</p>
                                    </div>
                                )}

                                {useCase && (
                                    <div className="editorial-process-col">
                                        <div className="editorial-col-header">
                                            <span className="editorial-col-num">03</span>
                                            <h4 className="editorial-col-title">
                                                {language === 'zh' ? '落地交付' : 'Deliverables'}
                                            </h4>
                                        </div>
                                        <p className="editorial-col-body">{useCase}</p>
                                    </div>
                                )}
                            </div>
                        </section>
                    )}
                </div>
            </motion.div>
        </motion.div>
    )
}

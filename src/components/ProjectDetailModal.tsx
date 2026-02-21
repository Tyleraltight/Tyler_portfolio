import { useEffect } from 'react'
import { motion } from 'framer-motion'
import type { Project } from '../data/projects'
import { Body, MetaText } from './ui/Typography'

type Props = {
    project: Project
    onClose: () => void
}

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
}

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: 'spring' as const, damping: 28, stiffness: 320 },
    },
    exit: {
        opacity: 0,
        y: 30,
        scale: 0.97,
        transition: { duration: 0.2, ease: 'easeIn' as const },
    },
}

export function ProjectDetailModal({ project, onClose }: Props) {
    const hasVideo = !!project.videoUrl
    const hasImage = !!project.image
    const hasMedia = hasVideo || hasImage
    const hasCaseStudy = !!(project.concept || project.workflow || project.useCase)
    const hasLegacyCaseStudy = !!(project.intent || project.workflow || project.toolsUsed)

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
            className="modal-backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.25 }}
            onClick={onClose}
        >
            <motion.div
                className={`modal-card ${hasMedia ? 'modal-card--video' : ''}`}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button className="modal-close" onClick={onClose} aria-label="Close">
                    ✕
                </button>

                {hasMedia ? (
                    <>
                        {/* Media slot — side-by-side layout */}
                        <div className="modal-video-slot">
                            {hasVideo ? (
                                <video
                                    src={project.videoUrl}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="modal-video"
                                />
                            ) : (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="modal-media-image"
                                />
                            )}
                        </div>

                        <div className="modal-body">
                            <MetaText>
                                {project.subtitle} · AI Visual
                            </MetaText>
                            <h2 className="modal-title">{project.title}</h2>
                            <Body>{project.description}</Body>

                            {hasCaseStudy && (
                                <div className="modal-case-study">
                                    <MetaText className="modal-case-study-label">Case Study</MetaText>

                                    {project.concept && (
                                        <div className="modal-field">
                                            <span className="modal-field-label">Concept</span>
                                            <Body>{project.concept}</Body>
                                        </div>
                                    )}

                                    {project.workflow && (
                                        <div className="modal-field">
                                            <span className="modal-field-label">Workflow</span>
                                            <Body>{project.workflow}</Body>
                                        </div>
                                    )}

                                    {project.useCase && (
                                        <div className="modal-field">
                                            <span className="modal-field-label">Use Case</span>
                                            <Body>{project.useCase}</Body>
                                        </div>
                                    )}

                                    {project.tags && project.tags.length > 0 && (
                                        <div className="modal-tool-tags">
                                            {project.tags.map((tag) => (
                                                <span key={tag} className="modal-tool-tag">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <>
                        {/* Image modal — original stacked layout */}
                        <div className="modal-image-slot">
                            {project.image ? (
                                <img src={project.image} alt={project.title} />
                            ) : (
                                <span className="modal-image-placeholder">Image preview</span>
                            )}
                        </div>

                        <div className="modal-body">
                            <MetaText>
                                {project.subtitle} · {project.kind === 'ai-visual' ? 'AI Visual' : 'Project'}
                            </MetaText>
                            <h2 className="modal-title">{project.title}</h2>
                            <Body>{project.description}</Body>

                            {/* Case study fields (concept/workflow/useCase) */}
                            {hasCaseStudy && (
                                <div className="modal-case-study">
                                    <MetaText className="modal-case-study-label">Case Study</MetaText>

                                    {project.concept && (
                                        <div className="modal-field">
                                            <span className="modal-field-label">Concept</span>
                                            <Body>{project.concept}</Body>
                                        </div>
                                    )}

                                    {project.workflow && (
                                        <div className="modal-field">
                                            <span className="modal-field-label">Workflow</span>
                                            <Body>{project.workflow}</Body>
                                        </div>
                                    )}

                                    {project.useCase && (
                                        <div className="modal-field">
                                            <span className="modal-field-label">Use Case</span>
                                            <Body>{project.useCase}</Body>
                                        </div>
                                    )}

                                    {project.tags && project.tags.length > 0 && (
                                        <div className="modal-tool-tags">
                                            {project.tags.map((tag) => (
                                                <span key={tag} className="modal-tool-tag">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Legacy case study fields (intent/toolsUsed) */}
                            {!hasCaseStudy && hasLegacyCaseStudy && (
                                <div className="modal-case-study">
                                    <MetaText className="modal-case-study-label">Case Study</MetaText>

                                    {project.intent && (
                                        <div className="modal-field">
                                            <span className="modal-field-label">Intent</span>
                                            <Body>{project.intent}</Body>
                                        </div>
                                    )}

                                    {project.workflow && (
                                        <div className="modal-field">
                                            <span className="modal-field-label">Workflow</span>
                                            <Body>{project.workflow}</Body>
                                        </div>
                                    )}

                                    {project.toolsUsed && project.toolsUsed.length > 0 && (
                                        <div className="modal-field">
                                            <span className="modal-field-label">Tools</span>
                                            <div className="modal-tool-tags">
                                                {project.toolsUsed.map((tool) => (
                                                    <span key={tool} className="modal-tool-tag">
                                                        {tool}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </>
                )}
            </motion.div>
        </motion.div>
    )
}

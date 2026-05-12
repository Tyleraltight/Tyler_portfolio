import { useState } from 'react'
import './App.css'
import { HeroSection } from './sections/HeroSection'
import { FeaturedProjectsSection } from './sections/FeaturedProjectsSection'
import { AboutSection } from './sections/AboutSection'
import { StyledContactFooter } from './components/StyledContactFooter'
import { BackToTop } from './components/ui/BackToTop'
import { LanguageToggle } from './components/LanguageToggle'
import { ProjectSidebarTOC } from './components/ProjectSidebarTOC'
import { useLanguage } from './contexts/LanguageContext'

function App() {
  const { language } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="app-root">
      <div className="app-left-sidebar">
        <ProjectSidebarTOC />
      </div>

      <main className="app-shell">
        <header className="app-header">
          <div className="app-logo">FOR WORK AND PROGRESS</div>
          
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>

          <nav className={`app-nav ${isMobileMenuOpen ? 'app-nav--open' : ''}`} aria-label="Primary">
            <a href="#work" className="app-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              {language === 'zh' ? '作品' : 'Work'}
            </a>
            <a href="#about" className="app-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              {language === 'zh' ? '关于' : 'About'}
            </a>
            <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
              <a href="#contact" className="app-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                {language === 'zh' ? '联系' : 'Contact'}
              </a>
              <LanguageToggle />
            </div>
          </nav>
        </header>

        <HeroSection />
        <FeaturedProjectsSection />
        <AboutSection />
        <StyledContactFooter />
      </main>
      
      <div className="app-right-sidebar">
        <BackToTop />
      </div>
    </div>
  )
}

export default App

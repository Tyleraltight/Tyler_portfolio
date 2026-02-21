import './App.css'
import { HeroSection } from './sections/HeroSection'
import { FeaturedProjectsSection } from './sections/FeaturedProjectsSection'
import { AboutSection } from './sections/AboutSection'
import { StyledContactFooter } from './components/StyledContactFooter'

function App() {
  return (
    <div className="app-root">
      <main className="app-shell">
        <header className="app-header">
          <div className="app-logo">FOR WORK AND PROGRESS</div>
          <nav className="app-nav" aria-label="Primary">
            <a href="#work" className="app-nav-link">
              Work
            </a>
            <a href="#about" className="app-nav-link">
              About
            </a>
            <a href="#contact" className="app-nav-link">
              Contact
            </a>
          </nav>

        </header>

        <HeroSection />
        <FeaturedProjectsSection />
        <AboutSection />
        <StyledContactFooter />
      </main>
    </div>
  )
}

export default App

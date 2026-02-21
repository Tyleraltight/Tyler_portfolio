import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'

export function HeroSection() {
  const handleScroll = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero-section">
      <Container>
        <div className="hero-intro">
          <h1 className="hero-heading">
            <span className="hero-heading-main">I&apos;m Tyler— a senior product designer</span>
            <span className="hero-heading-sub">
              who crafts calm, responsible experiences for high-impact teams
            </span>
          </h1>
          <Button className="hero-cta" onClick={handleScroll}>
            Get Started Now
            <span className="hero-cta-arrow">↓</span>
          </Button>
        </div>
      </Container>
    </section>
  )
}

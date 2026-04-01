import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'
import { TrustStatement } from '../components/ui/TrustStatement'
import { Magnetic } from '../components/ui/Magnetic'

export function HeroSection() {
  const handleScroll = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero-section">
      <Container>
        <div className="hero-intro">
          <h1 className="hero-heading">
            <span className="hero-heading-main">I&apos;m Tyler— a senior Design Engineer AND Creative Developer</span>
            <span className="hero-heading-sub">
              <TrustStatement />
            </span>
          </h1>
          <Magnetic intensity={0.15}>
            <Button className="hero-cta" onClick={handleScroll}>
              Get Started Now
              <span className="hero-cta-arrow">↓</span>
            </Button>
          </Magnetic>
        </div>
      </Container>
    </section>
  )
}

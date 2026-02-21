import { BentoCard } from '../components/ui/BentoCard'
import { BentoGrid } from '../components/ui/BentoGrid'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { MetaText } from '../components/ui/Typography'
import { profileData } from '../data/profile'

export function AboutSection() {
  const { about, now } = profileData

  return (
    <Section
      id="about"
      title="About"
      subtitle="Profile"
      className="about-section"
    >
      <Container>
        <BentoGrid>
          {/* WHO card */}
          <BentoCard
            colSpan={{ base: 4, md: 2, lg: 2 }}
            rowSpan={{ base: 1, md: 1, lg: 1 }}
          >
            <MetaText>{about.title}</MetaText>
            <p className="about-card-body">{about.content}</p>
          </BentoCard>

          {/* NOW card */}
          <BentoCard
            colSpan={{ base: 4, md: 2, lg: 2 }}
            rowSpan={{ base: 1, md: 1, lg: 1 }}
          >
            <MetaText>{now.title}</MetaText>

            {/* Education */}
            <div className="about-now-section">
              <span className="about-now-label">{now.education.label}</span>
              {now.education.items.map((item, i) => (
                <div key={i} className="about-edu-row">
                  <div className="about-edu-left">
                    <span className="about-edu-arrow">→</span>
                    <div>
                      <span className="about-edu-school">{item.institution}</span>
                      <span className="about-edu-degree">{item.degree}</span>
                    </div>
                  </div>
                  <span className="about-edu-duration">{item.duration}</span>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="about-now-section">
              <span className="about-now-label">{now.languages.label}</span>
              <ul className="about-now-list">
                {now.languages.items.map((lang) => (
                  <li key={lang.name} className="about-now-item">
                    <span className="about-lang-name">{lang.name}:</span>{' '}
                    <span className="about-lang-level">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </BentoCard>
        </BentoGrid>
      </Container>
    </Section>
  )
}

import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import NewsletterSection from '../components/NewsletterSection'
import styles from './About.module.css'

const team = [
  { name: 'TODO: Director Name', role: 'Center Director', initials: 'CD' },
  { name: 'TODO: Admin Name', role: 'Training Administrator', initials: 'TA' },
  { name: 'TODO: Assessor Name', role: 'Lead Assessor', initials: 'LA' },
]

const values = [
  { icon: '🎯', title: 'Excellence', desc: 'We hold ourselves to the highest standards in training delivery and assessment.' },
  { icon: '🤝', title: 'Integrity', desc: 'Honest, transparent, and fair in all our dealings with trainees and partners.' },
  { icon: '🌱', title: 'Growth', desc: 'Committed to lifelong learning for our students, staff, and community.' },
  { icon: '🏭', title: 'Industry Alignment', desc: 'Programs built around real employer needs and TESDA national standards.' },
]

export default function About() {
  return (
    <>
      {/* PAGE HERO */}
      <section className={styles.pageHero}>
        <div className="container">
          <p className="section-label" style={{ color: 'var(--gold)' }}>Our Story</p>
          <h1>About I-Train</h1>
          <p>Providing quality technical education and skills development for the people of Davao and beyond.</p>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section>
        <div className="container">
          <div className={styles.mvGrid}>
            <div className={styles.mvCard}>
              <span className={styles.mvIcon}>🎯</span>
              <h3>Our Mission</h3>
              <p>To provide quality, accessible, and industry-relevant technical training and assessment services that empower individuals with the skills needed for meaningful employment and entrepreneurship.</p>
            </div>
            <div className={styles.mvCard}>
              <span className={styles.mvIcon}>🔭</span>
              <h3>Our Vision</h3>
              <p>To be the leading technical training and assessment center in Mindanao, recognized for producing highly competent and globally competitive technical professionals.</p>
            </div>
            <div className={styles.mvCard}>
              <span className={styles.mvIcon}>🏛️</span>
              <h3>TESDA Accredited</h3>
              <p>I-Train is officially registered and accredited by the Technical Education and Skills Development Authority (TESDA), ensuring all certifications are nationally recognized.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <p className="section-label">What We Stand For</p>
            <h2 className="section-title">Our Core Values</h2>
          </div>
          <div className={styles.valuesGrid}>
            {values.map(v => (
              <div key={v.title} className={styles.valueCard}>
                <span className={styles.valueIcon}>{v.icon}</span>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM — placeholder, easy to update */}
      <section>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <p className="section-label">The People</p>
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              Our experienced staff are dedicated professionals with industry backgrounds and TESDA certifications.
            </p>
          </div>
          <div className={styles.teamGrid}>
            {team.map(t => (
              <div key={t.name} className={styles.teamCard}>
                <div className={styles.avatar}>{t.initials}</div>
                <h4>{t.name}</h4>
                <span>{t.role}</span>
              </div>
            ))}
          </div>
          <p className={styles.teamNote}>
            {/* TODO: Replace placeholder names with actual staff info */}
            Team details coming soon — update <code>src/pages/About.tsx</code>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaInner}>
            <h2>Ready to Start Your Training?</h2>
            <p>Browse our available programs and enroll in a course that fits your goals.</p>
            <Link to="/courses" className="btn btn-gold">
              View All Courses <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  )
}

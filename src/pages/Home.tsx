import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Award, Users, BookOpen, Briefcase, ChevronRight } from 'lucide-react'
import NewsletterSection from '../components/NewsletterSection'
import styles from './Home.module.css'

const stats = [
  { value: '500+', label: 'Graduates' },
  { value: '15+', label: 'Programs Offered' },
  { value: '98%', label: 'Assessment Pass Rate' },
  { value: '10+', label: 'Years of Service' },
]

const courses = [
  {
    icon: '💻',
    title: 'Computer Systems Servicing NC II',
    duration: '3 months',
    level: 'NC II',
    desc: 'Install, configure, and maintain computer systems and networks.'
  },
  {
    icon: '⚡',
    title: 'Electrical Installation & Maintenance NC II',
    duration: '3 months',
    level: 'NC II',
    desc: 'Residential and commercial wiring, panel boards, and safety standards.'
  },
  {
    icon: '🔧',
    title: 'Automotive Servicing NC II',
    duration: '4 months',
    level: 'NC II',
    desc: 'Engine diagnostics, maintenance, and repair of automotive systems.'
  },
  {
    icon: '🔥',
    title: 'Shielded Metal Arc Welding NC II',
    duration: '2 months',
    level: 'NC II',
    desc: 'Industry-standard welding techniques and safety practices.'
  },
  {
    icon: '📺',
    title: 'Consumer Electronics Servicing NC II',
    duration: '3 months',
    level: 'NC II',
    desc: 'Troubleshoot and repair consumer electronics and appliances.'
  },
  {
    icon: '🏗️',
    title: 'Masonry NC II',
    duration: '2 months',
    level: 'NC II',
    desc: 'Brick and block laying, concrete work, and construction standards.'
  },
]

const whyUs = [
  { icon: <Award size={22} />, title: 'TESDA Accredited', desc: 'All programs are officially registered and accredited by TESDA.' },
  { icon: <BookOpen size={22} />, title: 'Hands-on Training', desc: 'Learn through practice with real equipment and industry scenarios.' },
  { icon: <Users size={22} />, title: 'Expert Trainers', desc: 'Certified instructors with years of industry experience.' },
  { icon: <Briefcase size={22} />, title: 'Job Placement Support', desc: 'Career guidance and connections to local and national employers.' },
]

const blogPosts = [
  {
    date: 'April 20, 2025',
    category: 'Skills',
    title: 'Why TESDA Certification Opens Doors Locally and Abroad',
    excerpt: 'Discover how a national certification from TESDA can fast-track your career in the Philippines and overseas.',
  },
  {
    date: 'March 15, 2025',
    category: 'Updates',
    title: 'New Batch for Computer Systems Servicing Now Open',
    excerpt: 'We\'re accepting enrollees for our next CSS NC II batch. Limited slots available — apply today.',
  },
  {
    date: 'February 8, 2025',
    category: 'Student Stories',
    title: 'From Graduate to Employed: Success Stories from I-Train',
    excerpt: 'Meet our alumni who secured jobs within weeks of completing their technical training.',
  },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.badge}>TESDA Accredited · Davao City</span>
            <h1 className="fade-up delay-1">
              Build Real Skills.<br />
              <span className={styles.heroAccent}>Earn Your Certificate.</span>
            </h1>
            <p className="fade-up delay-2">
              I-Train Technical Training and Assessment Center offers industry-aligned vocational programs in Davao City. Get nationally certified and launch your career.
            </p>
            <div className={`${styles.heroCta} fade-up delay-3`}>
              <Link to="/courses" className="btn btn-gold">
                Explore Programs <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Get in Touch
              </Link>
            </div>
            <ul className={`${styles.heroChecks} fade-up delay-4`}>
              {['Free assessment inquiry', 'Flexible schedules', 'TESDA-registered trainers'].map(c => (
                <li key={c}><CheckCircle size={15} /> {c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map(s => (
              <div key={s.label} className={styles.statCard}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className={styles.coursesSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <p className="section-label">Our Programs</p>
              <h2 className="section-title">Technical Courses We Offer</h2>
              <p className="section-sub">
                TESDA-registered programs designed to meet the demands of local and international industries.
              </p>
            </div>
            <Link to="/courses" className="btn btn-primary">
              View All Courses <ChevronRight size={16} />
            </Link>
          </div>
          <div className={styles.coursesGrid}>
            {courses.map(c => (
              <div key={c.title} className={styles.courseCard}>
                <span className={styles.courseIcon}>{c.icon}</span>
                <div className={styles.courseLevel}>{c.level}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <div className={styles.courseMeta}>
                  <span>⏱ {c.duration}</span>
                  <Link to="/courses">Learn more <ArrowRight size={13} /></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className={styles.whySection}>
        <div className="container">
          <div className={styles.whyInner}>
            <div className={styles.whyLeft}>
              <p className="section-label">Why Choose I-Train</p>
              <h2 className="section-title">Training You Can Trust</h2>
              <p className="section-sub">
                We combine government-accredited curriculum with practical, real-world training to ensure our graduates are job-ready from day one.
              </p>
              <Link to="/about" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
                About Our Center
              </Link>
            </div>
            <div className={styles.whyRight}>
              {whyUs.map(w => (
                <div key={w.title} className={styles.whyCard}>
                  <div className={styles.whyIcon}>{w.icon}</div>
                  <div>
                    <h4>{w.title}</h4>
                    <p>{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className={styles.blogSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <p className="section-label">Latest Updates</p>
              <h2 className="section-title">From Our Blog</h2>
            </div>
            <Link to="/blog" className="btn btn-outline" style={{ color: 'var(--navy)', borderColor: 'var(--gray-200)' }}>
              All Posts <ChevronRight size={16} />
            </Link>
          </div>
          <div className={styles.blogGrid}>
            {blogPosts.map(p => (
              <article key={p.title} className={styles.blogCard}>
                <div className={styles.blogMeta}>
                  <span className={styles.blogCat}>{p.category}</span>
                  <span>{p.date}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
                <Link to="/blog" className={styles.readMore}>
                  Read more <ArrowRight size={13} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <NewsletterSection />
    </>
  )
}

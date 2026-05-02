import { useState } from 'react'
import { Clock, Award, Users, ArrowRight } from 'lucide-react'
import NewsletterSection from '../components/NewsletterSection'
import styles from './Courses.module.css'

type Course = {
  icon: string
  title: string
  duration: string
  level: string
  slots: number
  category: string
  desc: string
  topics: string[]
}

const courses: Course[] = [
  {
  icon: '🚜', category: 'Heavy Equipment',
  title: 'Heavy Equipment Operation (Hydraulic Excavator) NC II',
  duration: '3 months', level: 'NC II', slots: 15,
  desc: 'Operate hydraulic excavators safely and efficiently for earthmoving, trenching, and construction site operations in compliance with TESDA standards.',
  topics: ['Excavator controls & systems', 'Earthmoving techniques', 'Trenching & grading', 'Equipment pre-operation checks', 'Workplace safety & signaling'],
},
  {
    icon: '💻', category: 'ICT',
    title: 'Computer Systems Servicing NC II',
    duration: '3 months', level: 'NC II', slots: 25,
    desc: 'Covers installation, configuration, diagnosis, and repair of computer systems and local area networks.',
    topics: ['PC hardware assembly', 'OS installation & config', 'LAN setup & troubleshooting', 'Network cabling', 'System maintenance'],
  },
  {
    icon: '⚡', category: 'Electrical',
    title: 'Electrical Installation & Maintenance NC II',
    duration: '3 months', level: 'NC II', slots: 20,
    desc: 'Residential and commercial wiring, panel board installation, conduit works, and electrical safety standards.',
    topics: ['Residential wiring', 'Panel board installation', 'Conduit works', 'Electrical safety', 'PEC standards'],
  },
  {
    icon: '🔧', category: 'Automotive',
    title: 'Automotive Servicing NC II',
    duration: '4 months', level: 'NC II', slots: 20,
    desc: 'Engine diagnostics, maintenance procedures, and repair of automotive systems per industry standards.',
    topics: ['Engine overhaul', 'Automotive electricals', 'Brake systems', 'Transmission service', 'Wheel alignment'],
  },
  {
    icon: '🔥', category: 'Welding',
    title: 'Shielded Metal Arc Welding NC II',
    duration: '2 months', level: 'NC II', slots: 25,
    desc: 'Develop proficiency in SMAW techniques for flat, horizontal, vertical, and overhead positions.',
    topics: ['SMAW techniques', 'Joint preparation', 'Welding safety', 'Weld quality inspection', 'Blueprint reading'],
  },
  {
    icon: '📺', category: 'Electronics',
    title: 'Consumer Electronics Servicing NC II',
    duration: '3 months', level: 'NC II', slots: 25,
    desc: 'Troubleshoot, repair, and maintain consumer electronic products and home appliances.',
    topics: ['Circuit analysis', 'Component testing', 'TV & audio repair', 'Appliance servicing', 'Safety standards'],
  },
  {
    icon: '🏗️', category: 'Construction',
    title: 'Masonry NC II',
    duration: '2 months', level: 'NC II', slots: 20,
    desc: 'Brick laying, block laying, concrete works, and plastering to industry construction standards.',
    topics: ['Brick & block laying', 'Concrete mixing', 'Plastering', 'Scaffold safety', 'Blueprint reading'],
  },
  {
    icon: '🛠️', category: 'Automotive',
    title: 'Automotive Servicing NC I',
    duration: '2 months', level: 'NC I', slots: 25,
    desc: 'Entry-level automotive servicing: lubrication, oil change, tire rotation, and basic maintenance.',
    topics: ['Oil & filter change', 'Tire service', 'Battery maintenance', 'Fluid inspection', 'Safety procedures'],
  },
  {
    icon: '🔌', category: 'Electrical',
    title: 'Consumer Electronics Servicing NC I',
    duration: '1.5 months', level: 'NC I', slots: 30,
    desc: 'Foundation skills in electronic component identification, testing, and basic circuit repair.',
    topics: ['Component ID', 'Multimeter use', 'Basic soldering', 'Safety practices', 'Simple circuit repair'],
  },
]

const categories = ['All', 'ICT', 'Electrical', 'Automotive', 'Welding', 'Electronics', 'Construction', 'Heavy Equipment']

export default function Courses() {
  const [active, setActive] = useState('All')
  const [expanded, setExpanded] = useState<string | null>(null)

  const filtered = active === 'All' ? courses : courses.filter(c => c.category === active)

  return (
    <>
      <section className={styles.pageHero}>
        <div className="container">
          <p className="section-label" style={{ color: 'var(--gold)' }}>Programs</p>
          <h1>Our Courses & Programs</h1>
          <p>TESDA-accredited technical training programs designed for employability and national certification.</p>
        </div>
      </section>

      <section>
        <div className="container">
          {/* Filter */}
          <div className={styles.filterRow}>
            {categories.map(cat => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${active === cat ? styles.filterActive : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className={styles.grid}>
            {filtered.map(c => (
              <div key={c.title} className={`${styles.card} ${expanded === c.title ? styles.cardOpen : ''}`}>
                <div className={styles.cardTop}>
                  <span className={styles.icon}>{c.icon}</span>
                  <div className={styles.badges}>
                    <span className={styles.level}>{c.level}</span>
                    <span className={styles.cat}>{c.category}</span>
                  </div>
                </div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>

                <div className={styles.meta}>
                  <span><Clock size={13} /> {c.duration}</span>
                  <span><Users size={13} /> {c.slots} slots</span>
                  <span><Award size={13} /> TESDA Cert.</span>
                </div>

                {expanded === c.title && (
                  <div className={styles.topics}>
                    <strong>Topics Covered</strong>
                    <ul>
                      {c.topics.map(t => <li key={t}>{t}</li>)}
                    </ul>
                  </div>
                )}

                <div className={styles.cardActions}>
                  <button
                    className={styles.toggleBtn}
                    onClick={() => setExpanded(expanded === c.title ? null : c.title)}
                  >
                    {expanded === c.title ? 'Show less' : 'View topics'}
                  </button>
                  <a href="/contact" className={styles.enrollBtn}>
                    Enroll <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  )
}

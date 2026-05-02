import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import NewsletterSection from '../components/NewsletterSection'
import styles from './Blog.module.css'

type Post = {
  date: string
  category: string
  title: string
  excerpt: string
  readTime: string
  featured?: boolean
}

const posts: Post[] = [
  {
    date: 'April 20, 2025', category: 'Skills & Career', readTime: '5 min read', featured: true,
    title: 'Why TESDA Certification Opens Doors Locally and Abroad',
    excerpt: 'A TESDA National Certificate doesn\'t just prove your skills — it\'s a passport to better opportunities. We break down how TESDA certification impacts hiring decisions both locally and in popular OFW destinations.',
  },
  {
    date: 'March 15, 2025', category: 'Announcements', readTime: '2 min read',
    title: 'New Batch for Computer Systems Servicing Now Open',
    excerpt: 'We\'re accepting enrollees for our next CSS NC II batch starting May 2025. Limited slots available — apply today and take the first step toward your IT career.',
  },
  {
    date: 'February 28, 2025', category: 'Student Stories', readTime: '4 min read',
    title: 'From Graduate to Employed: Success Stories from I-Train',
    excerpt: 'We sat down with three I-Train graduates who secured jobs within weeks of completing their programs. Their stories show what\'s possible when skills meet determination.',
  },
  {
    date: 'January 10, 2025', category: 'Industry News', readTime: '6 min read',
    title: 'The Growing Demand for Skilled Electricians in Mindanao',
    excerpt: 'Infrastructure projects across Mindanao are fueling unprecedented demand for licensed electricians. Here\'s what that means for aspiring EIM NC II completers.',
  },
  {
    date: 'December 5, 2024', category: 'Training Tips', readTime: '3 min read',
    title: '5 Habits That Help Technical Trainees Succeed',
    excerpt: 'Great technicians aren\'t just born — they\'re built through consistent habits. Our senior trainers share the practices that separate top graduates from the rest.',
  },
  {
    date: 'November 18, 2024', category: 'Announcements', readTime: '2 min read',
    title: 'I-Train Passes TESDA Reaccreditation Assessment',
    excerpt: 'We\'re proud to announce that I-Train Technical Training and Assessment Center has successfully passed the latest TESDA institutional reaccreditation.',
  },
]

const categories = ['All', 'Announcements', 'Skills & Career', 'Student Stories', 'Training Tips', 'Industry News']

export default function Blog() {
  const [activecat, setActivecat] = useState('All')

  const featured = posts.find(p => p.featured)
  const rest = posts.filter(p => !p.featured)
  const filtered = activecat === 'All' ? rest : rest.filter(p => p.category === activecat)

  return (
    <>
      <section className={styles.pageHero}>
        <div className="container">
          <p className="section-label" style={{ color: 'var(--gold)' }}>Knowledge & Updates</p>
          <h1>I-Train Blog</h1>
          <p>Training tips, career guidance, student stories, and the latest news from I-Train.</p>
        </div>
      </section>

      <section>
        <div className="container">
          {/* Featured post */}
          {featured && activecat === 'All' && (
            <article className={styles.featured}>
              <div className={styles.featuredText}>
                <div className={styles.postMeta}>
                  <span className={styles.catBadge}>{featured.category}</span>
                  <span>{featured.date}</span>
                  <span>{featured.readTime}</span>
                </div>
                <h2>{featured.title}</h2>
                <p>{featured.excerpt}</p>
                <a href="#" className="btn btn-primary" style={{ width: 'fit-content' }}>
                  Read Article <ArrowRight size={15} />
                </a>
              </div>
              <div className={styles.featuredThumb}>
                <div className={styles.thumbPlaceholder}>
                  <span>📰</span>
                  <p>Featured Post</p>
                </div>
              </div>
            </article>
          )}

          {/* Filter */}
          <div className={styles.filterRow}>
            {categories.map(c => (
              <button
                key={c}
                className={`${styles.filterBtn} ${activecat === c ? styles.filterActive : ''}`}
                onClick={() => setActivecat(c)}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Posts grid */}
          <div className={styles.grid}>
            {filtered.map(p => (
              <article key={p.title} className={styles.card}>
                <div className={styles.postMeta}>
                  <span className={styles.catBadge}>{p.category}</span>
                  <span>{p.date}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.readTime}>{p.readTime}</span>
                  <a href="#" className={styles.readMore}>
                    Read more <ArrowRight size={13} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p style={{ textAlign: 'center', color: 'var(--gray-400)', padding: '3rem 0' }}>
              No posts in this category yet. Check back soon!
            </p>
          )}
        </div>
      </section>

      <NewsletterSection />
    </>
  )
}

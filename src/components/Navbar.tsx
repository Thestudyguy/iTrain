import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import styles from './Navbar.module.css'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Courses', to: '/courses' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => setOpen(false), [location])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <nav className={styles.nav}>
          <Link to="/" className={styles.logo}>
            <span className={styles.logoIcon}>i</span>
            <span>
              <strong>I-TRAIN</strong>
              <small>Technical Training & Assessment Center</small>
            </span>
          </Link>

          <ul className={`${styles.links} ${open ? styles.open : ''}`}>
            {links.map(l => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={location.pathname === l.to ? styles.active : ''}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/courses" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem' }}>
                Enroll Now
              </Link>
            </li>
          </ul>

          <button
            className={styles.burger}
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>
    </header>
  )
}

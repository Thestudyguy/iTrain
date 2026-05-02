import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Facebook, Youtube } from 'lucide-react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>i</span>
              <span>
                <strong>I-TRAIN</strong>
                <small>Technical Training & Assessment Center</small>
              </span>
            </div>
            <p>Empowering individuals with industry-relevant skills and nationally recognized certifications in Davao City, Philippines.</p>
            <div className={styles.socials}>
              <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="#" aria-label="YouTube"><Youtube size={18} /></a>
            </div>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4>Programs</h4>
            <ul>
              <li><Link to="/courses">Computer Systems Servicing</Link></li>
              <li><Link to="/courses">Electrical Installation</Link></li>
              <li><Link to="/courses">Automotive Servicing</Link></li>
              <li><Link to="/courses">Welding Technology</Link></li>
              <li><Link to="/courses">Consumer Electronics</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul className={styles.contactList}>
              <li>
                <MapPin size={15} />
                <span>Davao City, Davao del Sur, Philippines</span>
              </li>
              <li>
                <Phone size={15} />
                <a href="tel:+63822000000">(082) 200-0000</a>
              </li>
              <li>
                <Mail size={15} />
                <a href="mailto:info@itrainph.edu">info@itrainph.edu</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} I-Train Technical Training & Assessment Center. All rights reserved.</p>
          <p>TESDA Accredited · Davao City, Philippines</p>
        </div>
      </div>
    </footer>
  )
}

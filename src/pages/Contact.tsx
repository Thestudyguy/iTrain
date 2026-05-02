import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react'
import styles from './Contact.module.css'

type FormState = {
  name: string
  email: string
  phone: string
  course: string
  message: string
}

const courses = [
  'Computer Systems Servicing NC II',
  'Electrical Installation & Maintenance NC II',
  'Automotive Servicing NC II',
  'Shielded Metal Arc Welding NC II',
  'Consumer Electronics Servicing NC II',
  'Masonry NC II',
  'Other / General Inquiry',
]

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', course: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const set = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [field]: e.target.value }))

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    // TODO: connect to your form backend (Formspree, Resend, etc.)
    setTimeout(() => setStatus('success'), 1400)
  }

  return (
    <>
      <section className={styles.pageHero}>
        <div className="container">
          <p className="section-label" style={{ color: 'var(--gold)' }}>Get in Touch</p>
          <h1>Contact Us</h1>
          <p>Inquire about enrollment, schedule a visit, or ask about our programs — we'd love to hear from you.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className={styles.grid}>
            {/* INFO */}
            <div className={styles.info}>
              <h2>Visit or Reach Out</h2>
              <p>Our staff are available during regular business hours to assist with inquiries and enrollment.</p>

              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}><MapPin size={18} /></div>
                  <div>
                    <strong>Address</strong>
                    <p>Davao City, Davao del Sur<br />Philippines</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}><Phone size={18} /></div>
                  <div>
                    <strong>Phone</strong>
                    <p><a href="tel:+63822000000">(082) 200-0000</a></p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}><Mail size={18} /></div>
                  <div>
                    <strong>Email</strong>
                    <p><a href="mailto:info@itrainph.edu">info@itrainph.edu</a></p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}><Clock size={18} /></div>
                  <div>
                    <strong>Office Hours</strong>
                    <p>Monday – Friday: 8:00 AM – 5:00 PM<br />Saturday: 8:00 AM – 12:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Map embed placeholder */}
              <div className={styles.mapBox}>
                <iframe
                  title="I-Train Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.2!2d125.6762831!3d7.3173532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f945e0bb63cd6b%3A0x8c6ee51d302d25c5!2sI-TRAIN%20TECHNICAL%20TRAINING%20AND%20ASSESSMENT%20CENTER!5e0!3m2!1sen!2sph!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* FORM */}
            <div className={styles.formWrap}>
              <h2>Send an Inquiry</h2>
              <p>Fill out the form and our team will get back to you within 1 business day.</p>

              {status === 'success' ? (
                <div className={styles.success}>
                  <CheckCircle size={32} />
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. We'll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={submit} className={styles.form}>
                  <div className={styles.row}>
                    <label>
                      Full Name *
                      <input type="text" required placeholder="Juan dela Cruz" value={form.name} onChange={set('name')} />
                    </label>
                    <label>
                      Email *
                      <input type="email" required placeholder="juan@email.com" value={form.email} onChange={set('email')} />
                    </label>
                  </div>
                  <label>
                    Phone Number
                    <input type="tel" placeholder="09xx xxx xxxx" value={form.phone} onChange={set('phone')} />
                  </label>
                  <label>
                    Course of Interest
                    <select value={form.course} onChange={set('course')}>
                      <option value="">Select a program...</option>
                      {courses.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </label>
                  <label>
                    Message *
                    <textarea required rows={5} placeholder="Tell us about your inquiry..." value={form.message} onChange={set('message')} />
                  </label>
                  <button type="submit" className="btn btn-primary" disabled={status === 'loading'} style={{ width: '100%', justifyContent: 'center' }}>
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import styles from './NewsletterSection.module.css'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    // TODO: wire up your email provider (Mailchimp, Resend, etc.)
    setTimeout(() => {
      setStatus('success')
      setEmail('')
    }, 1200)
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.text}>
            <p className={styles.label}>Stay Updated</p>
            <h2>Subscribe to Our Newsletter</h2>
            <p>Get the latest course schedules, training tips, scholarship announcements, and I-Train news delivered straight to your inbox.</p>
          </div>
          <div className={styles.formWrap}>
            {status === 'success' ? (
              <div className={styles.success}>
                <CheckCircle size={28} />
                <div>
                  <strong>You're subscribed!</strong>
                  <p>Thanks for signing up. We'll keep you posted on what's new at I-Train.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputRow}>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    className={styles.input}
                  />
                  <button
                    type="submit"
                    className={`btn btn-gold ${styles.submit}`}
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'Subscribing...' : (<><Send size={15} /> Subscribe</>)}
                  </button>
                </div>
                <p className={styles.note}>No spam. Unsubscribe anytime.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

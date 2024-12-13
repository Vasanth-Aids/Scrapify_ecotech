import Link from 'next/link'
import styles from './Career.module.css'

const Career = () => {
  return (
    <section id="career" className={`${styles.career} section-padding`}>
      <div className="container">
        <h2 className={styles.sectionTitle}>INTERNSHIP & JOB RECRUITMENT</h2>

        <div className={styles.careerDomains}>
          <div className={styles.domain}>
            <div className={styles.domainIcon}>
              <svg viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"
                />
              </svg>
            </div>
            <h3>Software Domain</h3>
          </div>

          <div className={styles.domain}>
            <div className={styles.domainIcon}>
              <svg viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z"
                />
              </svg>
            </div>
            <h3>Electronics Domain</h3>
          </div>

          <div className={styles.domain}>
            <div className={styles.domainIcon}>
              <svg viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"
                />
              </svg>
            </div>
            <h3>Hardware & Mechanical domain</h3>
          </div>
        </div>

        <div className={styles.applyButtonContainer}>
          <Link href="/apply">
            <button className="btn btn-primary btn-large">
              <svg viewBox="0 0 24 24" className={styles.icon} style={{ marginRight: '0.5rem' }}>
                <path
                  fill="currentColor"
                  d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"
                />
              </svg>
              Apply now!
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Career


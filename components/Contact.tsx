import Link from 'next/link'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <section id="contact" className={`${styles.contact} section-padding`}>
      <div className="container">
        <div className={styles.contactContent}>
          <div className={styles.contactHeader}>
            <h2>WE'RE DESIGNING</h2>
            <h3>THE FUTURE</h3>
          </div>
          <div className={styles.contactInfo}>
            <Link href="/contact">
              <button className="btn btn-primary btn-large">
                Send us a message
              </button>
            </Link>
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <svg viewBox="0 0 24 24" className={styles.icon}>
                  <path
                    fill="currentColor"
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                  />
                </svg>
                <a
                  href="https://www.google.com/maps/place/iTamilnadu+Technology+(iTNT)+Hub+-Chennai,+Tamil+Nadu,+India/@13.0141704,80.2354163,17z/data=!3m1!4b1!4m6!3m5!1s0x3a52679f6aaaaaab:0x39c1ce8be59987d!8m2!3d13.0141704!4d80.2354163!16s%2Fg%2F11tdnt_ktw?entry=ttu&g_ep=EgoyMDI0MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  iTNT Hub, Anna University, Guindy - 600015
                </a>
              </div>
              <div className={styles.contactItem}>
                <svg viewBox="0 0 24 24" className={styles.icon}>
                  <path
                    fill="currentColor"
                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                  />
                </svg>
                <a href="mailto:info@scrapify.ai">info@scrapifyecotech.in</a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.socialLinks}>
          <a
            href="https://www.linkedin.com/company/scrapify-ecotech-private-limited/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BRqAJzeZGTfK1CbI3N4uoBw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
              />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/scrapifyecotech/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact


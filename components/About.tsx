import Image from 'next/image'
import styles from './About.module.css'

const About = () => {
  return (
    <section id="about" className={`${styles.about} section-padding`}>
      <div className="container">
        <div className={styles.aboutContent}>
          <div className={styles.aboutImage}>
            <Image src="/images/azhagu.png" alt="Azhagu Pandia Raja M P" width={300} height={300} />
          </div>
          <div className={styles.aboutInfo}>
            <h2>Azhagu Pandia Raja M P</h2>
            <h3>Founder & Chief Executive Officer</h3>
            <p>
              Hey there, I'm Azhagu. I've spent 5 years at HCL as a Software
              Engineer, then delved into a 2-year stint with the Indian Smart
              City Fellowship along with Housing urban affairs. Following that,
              I served as the City Innovation Officer for the Greater Chennai
              Corporation for 2 years. I also shared my knowledge as a Guest
              Faculty in the Department of Politics and Public Administration at
              University of Madras. Now, I'm channeling my enthusiasm into
              entrepreneurship as part of Scrapify Ecotech Pvt. Ltd.
            </p>
            <div className={styles.aboutLinks}>
              <a
                href="https://www.linkedin.com/in/azhagu?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACrJBRQB6KZt8nOBSPGfhHu8PybEcwnXXuc&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B4Dw%2BVWUUT2yA%2FkdO3T5IFQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <svg viewBox="0 0 24 24" className={styles.icon}>
                  <path
                    fill="currentColor"
                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
                  />
                </svg>
              </a>
              <a
                href="mailto:azhagu@scrapify.ai"
                className="btn btn-outline"
              >
                <svg viewBox="0 0 24 24" className={styles.icon}>
                  <path
                    fill="currentColor"
                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


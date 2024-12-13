import Image from 'next/image'
import styles from './Company.module.css'

const Company = () => {
  return (
    <section id="company" className={`${styles.company} section-padding`}>
      <div className="container">
        <div className={styles.companyContent}>
          <div className={styles.companyImage}>
            <Image
              src="/images/scrapify-logo.jpg"
              alt="Scrapify Ecotech Logo"
              width={300}
              height={300}
              className={styles.logo}
            />
          </div>
          <div className={styles.companyInfo}>
            <h2>Scrapify Ecotech Pvt. Ltd.</h2>
            <p>
              Scrapify Ecotech is a leading climate tech company dedicated to
              sustainability. We develop innovative software solutions to foster
              a circular economy and cutting-edge hardware products designed to
              clean and restore waterbodies. Our mission is to protect and
              preserve the environment for future generations.
            </p>
            <p>
              Our company is located at the iTNT Hub in Anna University,
              partnered with the School of Sustainability at IIT Madras,
              Crescent Innovation & Incubation Council (CIIC) and supported by
              PSG-STEP (PSG-Science & Technology Entrepreneurial Park).
            </p>
            <div className={styles.companyLocation}>
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
                iTNT Hub, Chennai
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Company


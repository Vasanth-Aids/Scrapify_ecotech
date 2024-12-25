'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from './Hero.module.css'

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const heroElement = heroRef.current
    if (heroElement) {
      heroElement.classList.add(styles.animate)
    }
  }, [])

  return (
    <section id="home" className={styles.hero} ref={heroRef}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          <span className={styles.heroWelcome}>WELCOME TO</span>
          <span className={styles.heroCompany}>SCRAPIFY ECOTECH</span>
        </h1>
        <p className={styles.heroTagline}>
          WHERE INNOVATION MEETS SUSTAINABILITY
        </p>
        <div className={styles.heroIcons}>
          <div className={styles.iconItem}>
            <div className={styles.iconCircle}>
              <Image src="/images/circular.svg" alt="" width={40} height={40} />
            </div>
            <span>CIRCULAR</span>
          </div>
          <div className={styles.iconItem}>
            <div className={styles.iconCircle}>
              <Image src="/images/sustain.png" alt="" width={40} height={40} />
            </div>
            <span>SUSTAIN</span>
          </div>
          <div className={styles.iconItem}>
            <div className={styles.iconCircle}>
              <Image src={"/images/innovate.svg"} alt="" width={40} height={40} />
            </div>
            <span>INNOVATE</span>
          </div>
        </div>
      </div>
      <div className={styles.heroImage}>
        <Image
          src={"/images/scrapify-logo.jpg"}
          alt="Scrapify Logo"
          width={200}
          height={200}
          className={styles.logo}
        />
      </div>
    </section>
  );
}

export default Hero


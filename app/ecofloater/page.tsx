import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Image from 'next/image'
import styles from './ecofloater.module.css'

export default function Ecofloater() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Ecofloater</h1>
            <p>Revitalizing Waterbodies</p>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.imageContainer}>
            <Image src="/images/ecofloater.jpg" alt="Ecofloater Prototype" width={600} height={400} className={styles.image} />
          </div>
          <div className={styles.textContent}>
            <h2>About Ecofloater</h2>
            <p>Ecofloater is an innovative autonomous water drone designed to clean and maintain water bodies. This cutting-edge device helps reduce floating waste like plastic debris and oil spills while monitoring water quality parameters.</p>
            <h3>Key Features:</h3>
            <ul>
              <li>Autonomous operation for efficient cleaning</li>
              <li>Advanced sensors for water quality monitoring</li>
              <li>Eco-friendly design with solar power capabilities</li>
              <li>Real-time data transmission for analysis</li>
            </ul>
          </div>
        </section>

        <section className={styles.benefits}>
          <h2>Benefits of Ecofloater</h2>
          <div className={styles.benefitsList}>
            <div className={styles.benefitItem}>
              <h3>Environmental Impact</h3>
              <p>Reduces pollution in water bodies and improves aquatic ecosystems</p>
            </div>
            <div className={styles.benefitItem}>
              <h3>Cost-Effective</h3>
              <p>Automated cleaning reduces manual labor costs and increases efficiency</p>
            </div>
            <div className={styles.benefitItem}>
              <h3>Data-Driven Insights</h3>
              <p>Provides valuable data for water management and conservation efforts</p>
            </div>
          </div>
        </section>

        <section className={styles.technicalSpecs}>
          <h2>Technical Specifications</h2>
          <div className={styles.specsList}>
            <div className={styles.specItem}>
              <h3>Dimensions</h3>
              <p>Length: 1.5m, Width: 1m, Height: 0.5m</p>
            </div>
            <div className={styles.specItem}>
              <h3>Weight</h3>
              <p>50 kg (including batteries)</p>
            </div>
            <div className={styles.specItem}>
              <h3>Battery Life</h3>
              <p>Up to 8 hours of continuous operation</p>
            </div>
            <div className={styles.specItem}>
              <h3>Cleaning Capacity</h3>
              <p>Up to 500 kg of debris per day</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}


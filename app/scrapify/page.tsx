import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import styles from './scrapify.module.css'

export default function Scrapify() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Scrapify.ai</h1>
            <p>Digital Solution for Waste Management</p>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.imageContainer}>
            <Image src="/images/scrapify-ai1.jpg" alt="Scrapify.ai Interface" width={600} height={400} className={styles.image} />
          </div>
          <div className={styles.textContent}>
            <h2>About Scrapify.ai</h2>
            <p>Scrapify.ai is a revolutionary web application designed to streamline waste management processes. It serves as a crucial link between waste generators and waste collectors, facilitating efficient and sustainable waste disposal practices.</p>
            <h3>Key Features:</h3>
            <ul>
              <li>User-friendly interface for easy navigation</li>
              <li>Real-time tracking of waste collection and disposal</li>
              <li>Integration with local waste management authorities</li>
              <li>Data analytics for optimizing waste management strategies</li>
            </ul>
            <div className={styles.ctaButtons}>
              <Link href="https://scrapify.ai/" target="_blank" className="btn btn-primary">Visit Website</Link>
              <Link href="https://scrapify.ai/home/seller" target="_blank" className="btn btn-outline">Register Now</Link>
            </div>
          </div>
        </section>

        <section className={styles.benefits}>
          <h2>Benefits of Using Scrapify.ai</h2>
          <div className={styles.benefitsList}>
            <div className={styles.benefitItem}>
              <h3>Environmental Impact</h3>
              <p>Reduce landfill waste and promote recycling</p>
            </div>
            <div className={styles.benefitItem}>
              <h3>Cost Efficiency</h3>
              <p>Optimize waste collection routes and reduce operational costs</p>
            </div>
            <div className={styles.benefitItem}>
              <h3>Community Engagement</h3>
              <p>Encourage responsible waste disposal practices among citizens</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}


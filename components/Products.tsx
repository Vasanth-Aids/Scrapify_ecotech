import Image from 'next/image'
import Link from 'next/link'
import styles from './Products.module.css'

const Products = () => {
  return (
    <section id="products" className={`${styles.products} section-padding`}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Our Products</h2>
        <div className={styles.productGrid}>

          <div className={styles.product}>
            <div className={styles.productImage}>
              <Image src="/images/ecofloater.jpg" alt="Ecofloater Device" width={500} height={300} />
            </div>
            <div className={styles.productContent}>
              <h3>Ecofloater</h3>
              <p>Revitalizing Waterbodies</p>
              <p>
                Introducing "Ecofloater" – the latest in water conservation
                technology! This autonomous water drone is designed to clean up
                our water bodies by removing trash, reducing algal blooms, and
                clearing oil spills. Join us in protecting our environment with
                Ecofloater!
              </p>
              <Link href="/ecofloater" className="btn btn-primary">
                Learn more
              </Link>
            </div>
          </div>
        </div> 
      </div>
    </section>
  )
}

export default Products


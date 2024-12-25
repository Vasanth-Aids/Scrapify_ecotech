import Image from "next/image";
import Link from "next/link";
import styles from "./Products.module.css";

const Products = () => {
  return (
    <section id="products" className={`${styles.products} section-padding`}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Scrapify.ai</h2>
        <div className={styles.productGrid}>
          <div className={styles.product}>
            <div className={styles.productImage}>
              <Image
                src="/images/1.png"
                alt="Scrapify.ai Portal Interface"
                width={500}
                height={300}
              />
            </div>
            <div className={styles.productContent}>
              <h3>Scrapify.ai</h3>
              <p>Portal for Buyer and Seller</p>
              <p>
                This web portal connects waste generators and collectors. Users
                can post and buy sorted waste, promoting efficient and
                eco-friendly waste management.
              </p>
              <div className={styles.buttonGroup}>
                <Link href="/scrapify" className="btn btn-primary">
                  Learn more
                </Link>
                <a
                  href="https://scrapify.ai/home/seller"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  Register now!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

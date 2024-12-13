'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.href
    const targetId = href.replace(/.*\#/, "")
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navbarContainer}>
        <Link href="/" className={styles.logo}>
          Scrapify
        </Link>
        <div className={styles.navLinks}>
          <Link href="/#home" className={styles.navLink} onClick={handleSmoothScroll}>Home</Link>
          <Link href="/#products" className={styles.navLink} onClick={handleSmoothScroll}>Products</Link>
          <Link href="/#company" className={styles.navLink} onClick={handleSmoothScroll}>Company</Link>
          <Link href="/#career" className={styles.navLink} onClick={handleSmoothScroll}>Career</Link>
          <Link href="/#about" className={styles.navLink} onClick={handleSmoothScroll}>About</Link>
          <Link href="/#contact" className={styles.navLink} onClick={handleSmoothScroll}>Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar


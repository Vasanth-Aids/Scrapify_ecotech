'use client'

import { useState, useEffect } from 'react'
import styles from './ScrollPopup.module.css'

const ScrollPopup = () => {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300 && !showPopup && !localStorage.getItem('popupShown')) {
        setShowPopup(true)
        localStorage.setItem('popupShown', 'true')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [showPopup])

  const closePopup = () => {
    setShowPopup(false)
  }

  if (!showPopup) return null

  return (
    <div className={`${styles.scrollPopup} ${styles.show}`}>
      <h3>Welcome to Scrapify Ecotech!</h3>
      <p>Discover our innovative eco-friendly solutions.</p>
      <button onClick={closePopup} className="btn btn-primary">
        Close
      </button>
    </div>
  )
}

export default ScrollPopup


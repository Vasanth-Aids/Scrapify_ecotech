'use client'

import { useState, FormEvent } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import styles from './contact.module.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    enquiry: ''
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    enquiry: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    let isValid = true
    const newErrors = { ...errors }

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
      isValid = false
    } else {
      newErrors.name = ''
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
      isValid = false
    } else {
      newErrors.email = ''
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
      isValid = false
    } else {
      newErrors.subject = ''
    }

    if (!formData.enquiry.trim()) {
      newErrors.enquiry = 'Enquiry is required'
      isValid = false
    } else {
      newErrors.enquiry = ''
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validateForm()) {
      // Here you would typically send the form data to your server
      console.log('Form submitted:', formData)
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        enquiry: ''
      })
      alert('Message sent successfully!')
    }
  }

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.contactSection}>
          <h1>Contact Us</h1>
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              {errors.name && <span className={styles.error}>{errors.name}</span>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              {errors.email && <span className={styles.error}>{errors.email}</span>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
              {errors.subject && <span className={styles.error}>{errors.subject}</span>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="enquiry">Enquiry</label>
              <textarea
                id="enquiry"
                name="enquiry"
                value={formData.enquiry}
                onChange={handleInputChange}
                required
              ></textarea>
              {errors.enquiry && <span className={styles.error}>{errors.enquiry}</span>}
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  )
}


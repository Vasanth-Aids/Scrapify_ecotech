'use client'

import { useState, FormEvent } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import styles from './apply.module.css'

export default function Apply() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    resume: null as File | null,
    linkedin: ''
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    resume: '',
    linkedin: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({ ...prev, resume: e.target.files![0] }))
    }
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

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required'
      isValid = false
    } else {
      newErrors.address = ''
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
      isValid = false
    } else {
      newErrors.phone = ''
    }

    if (!formData.resume) {
      newErrors.resume = 'Resume is required'
      isValid = false
    } else {
      newErrors.resume = ''
    }

    if (!formData.linkedin.trim()) {
      newErrors.linkedin = 'LinkedIn profile is required'
      isValid = false
    } else {
      newErrors.linkedin = ''
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
        address: '',
        phone: '',
        resume: null,
        linkedin: ''
      })
      alert('Application submitted successfully!')
    }
  }

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.applySection}>
          <h1>Apply for a Position</h1>
          <form onSubmit={handleSubmit} className={styles.applyForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Full Name</label>
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
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
              {errors.address && <span className={styles.error}>{errors.address}</span>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              {errors.phone && <span className={styles.error}>{errors.phone}</span>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="resume">Resume</label>
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleFileChange}
                required
              />
              {errors.resume && <span className={styles.error}>{errors.resume}</span>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="linkedin">LinkedIn Profile</label>
              <input
                type="url"
                id="linkedin"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleInputChange}
                required
              />
              {errors.linkedin && <span className={styles.error}>{errors.linkedin}</span>}
            </div>
            <button type="submit" className="btn btn-primary">Submit Application</button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  )
}


'use client'

import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Products from '../components/Products'
import Company from '../components/Company'
import Career from '../components/Career'
import About from '../components/About'
import Contact from '../components/Contact'
import ScrollPopup from '../components/ScrollPopup'

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Company />
        <Career />
        <About />
        <Contact />
      </main>
      <Footer />
      <ScrollPopup />
    </>
  )
}


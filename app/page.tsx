'use client'
import React, { useState, useEffect } from 'react'
import NavHeader from '@/components/navHeader'
import Hero from '@/components/hero'
import About from '@/components/about'
import Skills from '@/components/skills'
import Experience from '@/components/experience'
import Project from '@/components/project'
import Footer from '@/components/footer'

const Page = () => {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTop(true)
      } else {
        setShowTop(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div>
      <NavHeader />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Project />
      <Footer />

      {/* Back to Top Arrow */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 z-[99999] right-5 bg-[#D0BCFE] text-[#381e72] p-3 rounded-lg flex justify-center items-center size-8 shadow-lg hover:scale-110 transition-transform"
        >
          <p className='text-xl font-bold'  >↑</p>
        </button>
      )}
    </div>
  )
}

export default Page

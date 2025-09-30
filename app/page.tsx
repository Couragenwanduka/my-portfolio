import React from 'react'
import NavHeader from '@/components/navHeader'
import Hero from '@/components/hero'
import About from '@/components/about'
import Skills from '@/components/skills'
import Experience from '@/components/experience'
import Project from '@/components/project'
import Footer from '@/components/footer'

const page = () => {
  return (
    <div>
           <NavHeader/>
           <Hero/>
           <About/>
           <Skills/>
           <Experience/>
           <Project/>
           <Footer/>
    </div>
  )
}

export default page
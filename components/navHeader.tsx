'use client'

import React, { useState } from 'react'

const NavHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className='bg-[#141218] flex justify-between items-center py-6 px-6 md:px-10 border-b border-[#49454F]'>
      <div>
        <h1 className='font-roboto font-[100] text-[32px] md:text-[40px] text-[#CAC4D0]'>NDUKA.</h1>
      </div>

      {/* Desktop Menu */}
      <nav className='hidden lg:flex'>
        <ul className='flex gap-8 text-[#CAC4D0] items-center'>
          <li className='font-medium'><a href="#about">About</a></li>
          <li><a href="#skill">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#footer">Contact</a></li>
          <a href="/Full stack developer.pdf" download="Courage_Nduka_CV.pdf">
            <button className='border px-4 py-2 rounded-lg text-[#CAC4D0] hover:bg-[#2a2631] transition'>Download CV</button>
          </a>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <div className='lg:hidden'>
        <button onClick={() => setMenuOpen(!menuOpen)} className='text-[#CAC4D0]'>
          {menuOpen ? (
            <span className='text-3xl'>&times;</span> // close icon
          ) : (
            <span className='text-3xl'>&#9776;</span> // hamburger icon
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className='absolute top-[80px] left-0 w-full bg-[#141218] flex flex-col items-center py-6 gap-6 lg:hidden z-50'>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skill" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#footer" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="/Full stack developer.pdf" download="Courage_Nduka_CV.pdf">
            <button className='border px-4 py-2 rounded-lg text-[#CAC4D0] hover:bg-[#2a2631] transition'>Download CV</button>
          </a>
        </nav>
      )}
    </header>
  )
}

export default NavHeader

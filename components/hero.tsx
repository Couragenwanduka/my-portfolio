'use client'

import React from 'react'

const Hero = () => {
  return (
    <div
      className='flex flex-col-reverse md:flex-row justify-between bg-[#141218] px-6 md:px-10 pt-10 md:pt-20 gap-10 md:gap-0'
      id='hero'
    >
      <div className='flex flex-col justify-center items-start gap-6 lg:gap-10'>
        <div>
          <h1 className='font-bold text-[32px] lg:text-[56px] font-roboto text-[#E6E0E9]'>
            Nduka Courage
          </h1>
          <p className='font-light text-[20px] lg:text-[32px]'>
            Software Developer
          </p>
          <p className='font-[400] text-[16px] md:text-[22px] font-roboto'>
            I build reliable, scalable, and intuitive digital products that deliver seamless user experiences.
          </p>
        </div>

        <button className='bg-[#D0BCFE] px-4 py-3 lg:py-5 rounded-lg text-[#381e72] text-[14px] mb-10 lg:mb-0 lg:text-[16px] cursor-pointer'>
          Get in Touch
        </button>
      </div>

      <div className='flex justify-center lg:justify-end '>
        <img
          src="/Courage Image 2.svg"
          alt="Hero Image"
          className='w-full max-w-[400px] md:max-w-[500px] lg:max-w-[700px] object-contain'
        />
      </div>
    </div>
  )
}

export default Hero

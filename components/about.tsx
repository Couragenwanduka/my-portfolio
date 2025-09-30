'use client'

import React from 'react'

const About = () => {
  return (
    <div className='bg-[#0F0D13] px-6 md:px-10 py-10 flex flex-col gap-16' id='about'>
      {/* Section Title */}
      <div className='flex justify-center'>
        <h1 className='font-medium text-[28px] md:text-[36px] font-roboto text-[#CCC2DC]'>
          About me
        </h1>
      </div>

      {/* Content */}
      <div className='flex flex-col lg:flex-row gap-10 md:gap-16 items-center'>
        {/* Image */}
        <img
          src="/2984 1.png"
          alt="About me"
          className='rounded-lg w-full max-w-[400px] md:max-w-[500px] object-cover'
        />

        {/* Text */}
        <div className='font-medium text-[14px] md:text-[16px] font-roboto flex flex-col gap-6 md:gap-11'>
          <p>
            I am a dedicated full-stack developer passionate about creating innovative, cost-efficient solutions that deliver outstanding user experiences. With expertise in backend technologies like Node.js, Express, and Prisma, and frontend tools like React, Next.js, and Tailwind CSS, I thrive at bridging the gap between design and functionality.
          </p>
          <p>
            When working on projects for clients or companies, I focus on building solutions that are not only efficient but also scalable and user-centric. As the lead backend developer for the Bookworm project, I successfully delivered an MVP in just two months, demonstrating my ability to manage complexity and deliver under tight deadlines.
          </p>
          <p>
            What I may lack in experience, I more than make up for with hard work, passion, and an unrelenting drive to succeed. I am constantly exploring new tools and technologies to expand my skill set and keep up with industry trends.
          </p>
          <p>
            In my downtime, I enjoy reading about emerging tech trends, experimenting with new frameworks, and contributing to open-source projects. I’m committed to growing as a developer and building solutions that make an impact.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About

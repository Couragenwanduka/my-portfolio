'use client'
import React from 'react'
import { toast } from 'sonner'

const Footer = () => {
  const profile = [
    { image: '/).svg', link: 'https://github.com/Couragenwanduka' },
    // { image: '/Q.svg', link: '' },
    { image: '/D.svg', link: 'https://x.com/couragenwaigbo?s=21' },
    { image: '/C.svg', link: 'https://www.linkedin.com/in/couragenduka?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
  ]

  // Function to copy text
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        toast.success('Copied: ' + text) // ✅ You can replace this with a toast later
      })
      .catch(err => {
        console.error('Failed to copy:', err)
      })
  }

  return (
    <div className='bg-[#131218] flex flex-col justify-center items-center p-20 gap-3' id='footer'>
      <p className="font-medium text-[36px] font-roboto text-[#CCC2DC]">Get in Touch</p>

      <div className='flex gap-3'>
  {profile.map((item, index) => (
    <a 
      href={item.link} 
      key={index} 
      target="_blank" 
      rel="noopener noreferrer" // ✅ security best practice
    >
      <img 
        src={item.image} 
        alt='social media icons' 
        className='size-[30px] cursor-pointer' 
      />
    </a>
  ))}
</div>


      <div className='flex flex-col gap-2 mt-4'>
        <span className='flex gap-2 items-center text-[22px] font-normal'>
          <p>Email:</p>
          <p>courageobunike@gmail.com</p>
          <button
            onClick={() => handleCopy("courageobunike@gmail.com")}
            className='cursor-pointer'
          >
            <img src="/copy.svg" alt="Copy Email" className="w-5 h-5" />
          </button>
        </span>

        <span className='flex gap-2 items-center text-[22px] font-normal'>
          <p>Phone:</p>
          <p>09049854437</p>
          <button
            onClick={() => handleCopy("09049854437")}
            className='cursor-pointer'
          >
            <img src="/copy.svg" alt="Copy Phone" className="w-5 h-5" />
          </button>
        </span>
      </div>
    </div>
  )
}

export default Footer

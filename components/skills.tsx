'use client'

import React from 'react'

const Skills = () => {
    const skill = [
        { image: '/js.svg', label: 'JavaScript' },
        { image: '/ts.svg', label: 'TypeScript' },
        { image: '/python.svg', label: 'Python' },
        { image: '/go.svg', label: 'Go' },
        { image: '/react.svg', label: 'React' },
        { image: '/nextIcon.svg', label: 'Next.js' },
        { image: '/tailwind.svg', label: 'Tailwind CSS' },
        { image: '/node.svg', label: 'Node.js' },
        { image: '/express-js.svg', label: 'Express' },
        { image: '/prisma.svg', label: 'Prisma' },
        { image: '/postgresql.svg', label: 'Postgresql' },
        { image: '/mongoDb.svg', label: 'MongoDB' },
        { image: '/redis.svg', label: 'Redis' },
    ]

    return (
        <div className='bg-[#211F26] px-6 md:px-32 py-10 flex flex-col gap-16' id='skill'>
            <div className='flex justify-center items-center'>
                <h1 className='font-medium text-[28px] md:text-[36px] font-roboto text-[#CCC2DC]'>Skills</h1>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8'>
                {skill.map((item, index) => (
                    <div key={index} className='flex flex-col gap-2 md:gap-3 items-center'>
                        <img src={item.image} alt={item.label} className='h-[38px] w-[38px] md:h-[48px] md:w-[48px]' />
                        <h2 className='text-[14px] md:text-[16px] font-medium text-[#ccc2dc]'>{item.label}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills

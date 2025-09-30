'use client'

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// import Swiper styles
import  "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Project = () => {

    const projects = [
        {
            title:'Uifry', 
            image:'/Screenshot 2025-01-05 at 15.57.34.png',
            description:'uifry is a static site application built with Next.js that features an About page, Services page, Contact page, and Blog page. It provides a responsive design for optimal viewing on all devices and includes an interactive map powered by Leaflet.js for routing functionality.' ,
            liveLink:'https://uifry-beta-lake.vercel.app/',
            gitHub:'https://github.com/Couragenwanduka/Uifry.git',
            techology:['Next Js', 'Typescript', 'Taillwind']
        },
        {
            image:'/Screenshot 2025-01-05 at 15.59.48.png', title:'Mencix' , 
            description:"A modern and visually appealing landing page designed to effectively communicate the brand’s message and engage users. The page features a clean layout, responsive design, and intuitive navigation to ensure seamless user experience across all devices. Key sections include a hero banner, services overview, testimonials, and a call-to-action for user interaction.",
            liveLink:'https://mecnix-alpha.vercel.app/',
            techology:['React Js', 'Javascript', 'Tailwind CSS']
        },
        {
            image:'/Screenshot 2025-01-05 at 16.01.39.png', title:'Dimp' , 
            description:"A modern and visually appealing landing page designed to effectively communicate the brand’s message and engage users. The page features a clean layout, responsive design, and intuitive navigation to ensure seamless user experience across all devices. Key sections include a hero banner, services overview, testimonials, and a call-to-action for user interaction.",
            liveLink:'https://dimp-fe.vercel.app/',
            techology:['React Js', 'Javascript', 'Tailwind CSS']
        },
        {
            image:'/Screenshot 2025-01-05 at 16.25.55.png', title:'Google Flight Clone' , 
            description:"A responsive web application replicating the core functionalities of Google Flights. The project allows users to search, filter, and compare flight options seamlessly. Key features include a dynamic search interface, real-time filtering, and a visually appealing design inspired by Google’s material design principles. Built with a focus on performance and usability, it ensures a smooth user experience across devices",
            liveLink:'https://spotter-ten.vercel.app/',
            gitHub:'https://github.com/Couragenwanduka/spotter.git',
            techology:['React Js', 'Typescript', 'Tailwind CSS']
        },
        {
            image:'/e2dcf0f7-5345-4e81-a713-972b0bde4cac.webp', 
            title:'Expense Tracker',
            description:'This backend system for an expense tracking app uses a monolithic architecture and MongoDB for flexibility and scalability. The database schema follows the first three normalization rules (1NF to 3NF) to ensure data consistency, reduce redundancy, and maintain a structured design.',
            gitHub:'https://github.com/Couragenwanduka/Expense-Tracker-api.git'
        },
        {
            image:'/Screenshot 2025-01-05 at 16.25.00.png',
            title:'Datum',
            description:'A robust backend API for managing student records, analyzing data with Google Gemini, and providing personalized feedback. Built with PostgreSQL, Express, and Node.js for efficient data handling and insights.',
            gitHub:'https://github.com/Couragenwanduka/datumBackend.git'
        },
        {
            image:'/download2.png',
            title:"Simple Auth Api written in Go",
            description:'A simple authentication API built with Go, Gorilla Mux, and JWT. It provides endpoints for registration, login, and refreshing JWT tokens.',
            gitHub:'https://github.com/Couragenwanduka/Go_api.git'
        },
        {
            image:'/download.jpeg',
            title: 'Mecnix Blog',
            description:'A blog API built with Node.js, Express, and MongoDB. It includes endpoints for creating, reading, updating, and deleting blog posts, as well as user authentication and authorization. the code was written for my company but the project was decommuntioned and i was given permisison to use it',
            gitHub:'https://github.com/Couragenwanduka/MecnixBlog.git'
        },
        {
            image:'/download (1).jpeg',
            title: 'Bookworm Api',
            description:'A RESTful API for managing bookstore books, authors, and publishers. It uses Node.js, Express, and MongoDB for efficient data handling and provides endpoints for CRUD operations on these entities.',
            gitHub:'https://github.com/Couragenwanduka/Bookworm_Backend.git'
        },
         {
            image:'/IMG_3760.PNG',
            title: 'Firts',
            description:'A simple mobile app showcasing a few screens built with React Native and NativeWind, demonstrating clean design and responsive layouts for seamless user experiences.',
            gitHub:'https://github.com/Couragenwanduka/Firts.git'
        },
        {
            image:'/Screenshot 2025-01-05 at 16.49.56.png',
            title: 'Zwilt',
            description:'An Application that helps comapanies with hiring process',
            liveLink:'https://app.zwilt.com/auth/signin'
        },
        {
            image:'/Screenshot 2025-01-05 at 16.53.06.png',
            title: 'solraLab',
            description:'A simple blog application built with Next.js and React',
            liveLink:'https://www.solralab.com/'
        }

    ]
  return (
        <div className="py-16 md:py-32 bg-[#0F0D13]" id="projects">
            <div className="flex justify-center items-center mb-10">
                <h1 className="font-medium text-[28px] md:text-[36px] font-roboto text-[#CCC2DC]">
                    Projects
                </h1>
            </div>

            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Pagination, Autoplay]}
            >
                {projects.map((project, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex justify-center items-center">
                            <div className="flex flex-col lg:flex-row w-full max-w-[90vw] md:w-[150vh] bg-[#211F26] p-6 md:p-10 rounded-lg gap-5 md:gap-7">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full md:w-[553px] h-[200px] md:h-[292px] object-cover rounded-xl"
                                />

                                <div className="flex flex-col gap-4 md:gap-6">
                                    <div className="flex flex-wrap gap-2 items-center">
                                        <p className="text-[20px] md:text-[28px] font-medium text-[#E6E0E9]">{project.title}</p>
                                        {project.liveLink && (
                                            <button
                                                onClick={() => window.open(project.liveLink, "_blank")}
                                                className="cursor-pointer"
                                            >
                                                <img src="/Arrow up-right.svg" alt="Live Link" className="w-6 h-6 md:w-6 md:h-6"/>
                                            </button>
                                        )}
                                    </div>

                                    <p className="text-[14px] md:text-[16px] font-medium text-[#CAC4D0]">{project.description}</p>

                                    {project.techology && (
                                        <div className="flex flex-wrap gap-2">
                                            {project.techology.map((tech) => (
                                                <span key={tech} className="text-[12px] md:text-[14px] px-2 py-1 bg-[#3C3A45] rounded">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Project;

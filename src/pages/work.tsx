import { useState } from 'react';
import { PiLinkSimpleHorizontal } from "react-icons/pi";
import { PiGithubLogoThin } from "react-icons/pi";

const Work = () => {
    const [selectedCategory, setSelectedCategory] = useState('Frontend');

    const feWork = [
        {
            image:'src/public/image/Screenshot 2025-01-05 at 15.57.34.png', 
            title:'Uifry' , 
            description:'uifry is a static site application built with Next.js that features an About page, Services page, Contact page, and Blog page. It provides a responsive design for optimal viewing on all devices and includes an interactive map powered by Leaflet.js for routing functionality.' ,
            liveLink:'https://uifry-beta-lake.vercel.app/',
            gitHub:'https://github.com/Couragenwanduka/Uifry.git',
            techology:'Next Js, Typescript, Taillwind'
        },
        {
            image:'src/public/image/Screenshot 2025-01-05 at 15.59.48.png', title:'Mencix' , 
            description:"A modern and visually appealing landing page designed to effectively communicate the brand’s message and engage users. The page features a clean layout, responsive design, and intuitive navigation to ensure seamless user experience across all devices. Key sections include a hero banner, services overview, testimonials, and a call-to-action for user interaction.",
            liveLink:'https://mecnix-alpha.vercel.app/',
            techology:'React Js, Javascript, Tailwind CSS'
        },
        {
            image:'src/public/image/Screenshot 2025-01-05 at 16.01.39.png', title:'Dimp' , 
            description:"A modern and visually appealing landing page designed to effectively communicate the brand’s message and engage users. The page features a clean layout, responsive design, and intuitive navigation to ensure seamless user experience across all devices. Key sections include a hero banner, services overview, testimonials, and a call-to-action for user interaction.",
            liveLink:'https://dimp-fe.vercel.app/',
            techology:'React Js, Javascript, Tailwind CSS'
        },
        {
            image:'src/public/image/Screenshot 2025-01-05 at 16.25.55.png', title:'Google Flight Clone' , 
            description:"A responsive web application replicating the core functionalities of Google Flights. The project allows users to search, filter, and compare flight options seamlessly. Key features include a dynamic search interface, real-time filtering, and a visually appealing design inspired by Google’s material design principles. Built with a focus on performance and usability, it ensures a smooth user experience across devices",
            liveLink:'https://spotter-ten.vercel.app/',
            gitHub:'https://github.com/Couragenwanduka/spotter.git',
            techology:' React Js, Typescript, Axios'
        }
    ]
    const BackendWork = [
        {
            image:'src/public/image/e2dcf0f7-5345-4e81-a713-972b0bde4cac.webp', 
            title:'Expense Tracker',
            description:'This backend system for an expense tracking app uses a monolithic architecture and MongoDB for flexibility and scalability. The database schema follows the first three normalization rules (1NF to 3NF) to ensure data consistency, reduce redundancy, and maintain a structured design.',
            gitHub:'https://github.com/Couragenwanduka/Expense-Tracker-api.git'
        },
        {
            image:'src/public/image/Screenshot 2025-01-05 at 16.25.00.png',
            title:'Datum',
            description:'A robust backend API for managing student records, analyzing data with Google Gemini, and providing personalized feedback. Built with PostgreSQL, Express, and Node.js for efficient data handling and insights.',
            gitHub:'https://github.com/Couragenwanduka/datumBackend.git'
        },
        {
            image:'src/public/image/download2.png',
            title:"Simple Auth Api written in Go",
            description:'A simple authentication API built with Go, Gorilla Mux, and JWT. It provides endpoints for registration, login, and refreshing JWT tokens.',
            gitHub:'https://github.com/Couragenwanduka/Go_api.git'
        },
        {
            image:'src/public/image/download.jpeg',
            title: 'Mecnix Blog',
            description:'A blog API built with Node.js, Express, and MongoDB. It includes endpoints for creating, reading, updating, and deleting blog posts, as well as user authentication and authorization. the code was written for my company but the project was decommuntioned and i was given permisison to use it',
            gitHub:'https://github.com/Couragenwanduka/MecnixBlog.git'
        },
        {
            image:'src/public/image/download (1).jpeg',
            title: 'Bookworm Api',
            description:'A RESTful API for managing bookstore books, authors, and publishers. It uses Node.js, Express, and MongoDB for efficient data handling and provides endpoints for CRUD operations on these entities.',
            gitHub:'https://github.com/Couragenwanduka/Bookworm_Backend.git'
        }
    ]

    const mobileWork = [
        {
            image:'src/public/image/IMG_3760.PNG',
            title: 'Firts',
            description:'A simple mobile app showcasing a few screens built with React Native and NativeWind, demonstrating clean design and responsive layouts for seamless user experiences.',
            gitHub:'https://github.com/Couragenwanduka/Firts.git'
        }
    ]

    const liveProjects = [
        {
            image:'src/public/image/Screenshot 2025-01-05 at 16.49.56.png',
            title: 'Zwilt',
            description:'An Application that helps comapanies with hiring process',
            liveLink:'https://app.zwilt.com/auth/signin'
        },
        {
            image:'src/public/image/Screenshot 2025-01-05 at 16.53.06.png',
            title: 'solraLab',
            description:'A simple blog application built with Next.js and React',
            liveLink:'https://www.solralab.com/'
        }
    ]
        
    const handleCategoryChange = (category: string) => {
      setSelectedCategory(category);
      };
    
      const renderWorks = () => {
        interface WorkItem {
          image: string;
          title: string;
          description: string;
          liveLink?: string;
          gitHub?: string;
          techology?: string;
        }

        const renderProject = (work: WorkItem, index: number) => (
          <div key={index} className="relative group overflow-hidden">
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-lg font-semibold mb-2">{work.title}</h3>
              <p className="text-gray-300 text-sm mb-4 break-words w-9/12 text-center">{work.description}</p>
              {work.liveLink && (
                <a
                  href={work.liveLink}
                  className="text-blue-400 hover:underline mb-2 flex justify-center items-center gap-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PiLinkSimpleHorizontal />
                  Live
                </a>
              )}
              {work.gitHub && (
                <a
                  href={work.gitHub}
                  className="text-blue-400 hover:underline flex justify-center items-center gap-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PiGithubLogoThin />
                  GitHub
                </a>
              )}
            </div>
          </div>
        );
    
        switch (selectedCategory) {
          case 'Frontend':
            return <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{feWork.map(renderProject)}</div>;
          case 'Backend':
            return <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{BackendWork.map(renderProject)}</div>;
          case 'Mobile':
            return <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{mobileWork.map(renderProject)}</div>;
          case 'Live':
            return <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{liveProjects.map(renderProject)}</div>;
          default:
            return null;
        }
      };
    
      return (
        <main className="p-16" id="works">
          <div>
            <h1 className="text-[200px] font-bold text-[#e7e9e7] font-sans">02</h1>
            <p className="text-5xl text-black absolute top-[377%] 2xl:top-[300%] ml-4 font-serif">Selected Works.</p>
          </div>
    
          <section className="flex justify-center gap-4 mt-8">
            <button
              className={`px-6 text-black ${selectedCategory === 'Frontend' ? 'border-b-2 border-black' : ''}`}
              onClick={() => handleCategoryChange('Frontend')}
            >
              Frontend Works
            </button>
            <button
              className={`px-6 text-black ${selectedCategory === 'Backend' ? 'border-b-2 border-black' : ''}`}
              onClick={() => handleCategoryChange('Backend')}
            >
              Backend Works
            </button>
            <button
              className={`px-6 text-black ${selectedCategory === 'Mobile' ? 'border-b-2 border-black' : ''}`}
              onClick={() => handleCategoryChange('Mobile')}
            >
              Mobile Works
            </button>
            <button
              className={`px-6 text-black ${selectedCategory === 'Live' ? 'border-b-2 border-black' : ''}`}
              onClick={() => handleCategoryChange('Live')}
            >
              Live Projects
            </button>
          </section>
    
          <section className="mt-8">
            {renderWorks()}
          </section>
        </main>
      );
    };
    
    export default Work;
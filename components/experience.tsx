'use client'

import React from "react";

const Experience = () => {
  const experiences = [
    {
      company: "SeamFlex",
      position: "Front-end Developer",
      type: "",
      duration: "June 2025 - Present",
      description: [
        "As a Frontend Developer, I build and maintain both web and mobile applications for the company.",
        "My responsibilities include developing responsive and user-friendly web interfaces using modern JavaScript frameworks.",
        "I also build cross-platform mobile applications with technologies like React Native.",
        "I collaborate closely with UI/UX designers to bring designs to life.",
        "Optimizing applications for performance, accessibility, and cross-browser compatibility is part of my work.",
        "I integrate frontend with backend APIs to deliver seamless user experiences.",
        "I participate in code reviews, testing, and continuous improvement processes.",
        "I focus on delivering high-quality, scalable solutions that align with the company’s vision and improve the user experience across all platforms.",
      ],
    },
    {
      company: "Mecnix",
      position: "Full Stack Developer",
      type: "",
      duration: "Apr 2024 - June 2025",
      description: [
        "Developed and maintained full-stack applications using React, Next, and Node.js, delivering scalable solutions for business needs.",
        "Designed and implemented APIs to support seamless communication between frontend and backend systems.",
        "Improved existing projects by optimizing code for performance and scalability, resulting in reduced load times.",
        "Worked closely with designers to create responsive and visually appealing user interfaces using Tailwind CSS.",
      ],
    },
    {
      company: "Genesys Tech Hub",
      position: "Back-end Developer",
      type: "(Internship)",
      duration: "Nov 2023 - April 2023",
      description: [
        "Built backend services using Node.js for scalable, high-performance applications.",
        "Designed optimized database schemas in MySQL, NoSQL, and PostgreSQL, ensuring efficient data storage and retrieval with an emphasis on scalability.",
        "Implemented unit and integration tests using Jest, improving code reliability and maintainability.",
        "Collaborated with product teams to design technical solutions that addressed customer pain points, bridging technical and business requirements.",
      ],
    },
  ];

  return (
    <div className="bg-[#141218] px-6 md:px-32 py-10 flex flex-col gap-16" id="experience">
      <div className="flex justify-center items-center">
        <h1 className="font-medium text-[28px] md:text-[36px] font-roboto text-[#CCC2DC]">
          Experience
        </h1>
      </div>

      <div className="bg-[#211F26] py-8 md:py-[52px] px-4 md:px-[30px] rounded-lg flex flex-col gap-6">
        {experiences.map((experience, index) => (
          <div key={index} className="flex flex-col gap-3 border-b border-[#49454F] pb-6 md:pb-8">
            <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-0">
              <p className="text-[18px] md:text-[22px] font-normal font-roboto text-[#E6E0E9]">
                {experience.company}
              </p>
              <p className="font-medium text-[10px] md:text-[12px] text-white">{experience.duration}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-1 sm:gap-3 text-[#CAC4D0] font-normal text-[12px] md:text-[14px]">
              <p>{experience.position}</p>
              {experience.type && <p>{experience.type}</p>}
            </div>

            <div className="flex flex-col gap-2">
              {experience.description.map((para, i) => (
                <p key={i} className="text-[14px] md:text-[16px] font-medium text-[#CAC4D0]">
                  {para}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

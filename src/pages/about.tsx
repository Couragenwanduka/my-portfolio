const About = () => {
  return (
    <main className="md:p-16 p-5" id="about-me">
      {/* About Section */}
      <section className="mb-20 mt-16">
        <div>
          <h1 className="text-[200px] font-bold text-[#e7e9e7] font-sans">01</h1>
          <p className="text-5xl text-black absolute top-[102%] md:top-[63%] lg:top-[150%] 2xl:top-[147%] ml-4 font-serif">About Me.</p>
        </div>
        <div className="text-black font-sans text-xl space-y-4 leading-10">
          <p>
            I am a dedicated full-stack developer passionate about creating
            innovative, cost-efficient solutions that deliver outstanding user
            experiences. With expertise in backend technologies like Node.js,
            Express, and Prisma, and frontend tools like React, Next.js, and
            Tailwind CSS, I thrive at bridging the gap between design and
            functionality.
          </p>
          <p>
            When working on projects for clients or companies, I focus on
            building solutions that are not only efficient but also scalable
            and user-centric. As the lead backend developer for the Bookworm
            project, I successfully delivered an MVP in just two months,
            demonstrating my ability to manage complexity and deliver under
            tight deadlines.
          </p>
          <p>
            What I may lack in experience, I more than make up for with hard
            work, passion, and an unrelenting drive to succeed. I am constantly
            exploring new tools and technologies to expand my skill set and
            keep up with industry trends.
          </p>
          <p>
            In my downtime, I enjoy reading about emerging tech trends,
            experimenting with new frameworks, and contributing to open-source
            projects. I’m committed to growing as a developer and building
            solutions that make an impact.
          </p>
        </div>
      </section>

      {/* Experience and Volunteer Section */}
      <section className="flex justify-between">
        {/* Experience Section */}
        <section className="mb-12 flex flex-col justify-center items-center">
          <div className="mb-6 flex justify-center gap-1 w-full">
            <h2 className="w-[3px] h-[25px] bg-[#c93f1c]"></h2>
            <h2 className="text-3xl font-thin text-black font-serif w-full">Experience</h2>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Mecnix</h3>
              <p className="text-gray-600">Full Stack Developer - April 2023 - Present</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Punch Agency</h3>
              <p className="text-gray-600">MERN Stack - July 2023 - November 2023</p>
              <p className="text-gray-500 italic">Contract</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Genesys Tech Hub</h3>
              <p className="text-gray-600">Backend Developer - December 2022 - October 2023</p>
              <p className="text-gray-500 italic">Internship</p>
            </div>
          </div>
        </section>

        {/* Volunteer Section */}
        <section className="mb-12">
          <div className="mb-6 flex justify-center gap-1 w-full">
            <h2 className="w-[3px] h-[25px] bg-[#c93f1c]"></h2>
            <h2 className="text-3xl font-thin text-black font-serif w-full">Volunteer</h2>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Enugu State Tech Hub</h3>
            <p className="text-gray-600">JavaScript Coordinator</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mt-5">UpSkill</h3>
            <p className="text-gray-600">Mentor</p>
          </div>
        </section>
      </section>

      {/* Skills Section */}
      <section>
        <div className="mb-6 flex justify-center items-center text-center gap-1 w-full">
          <div className="flex justify-center items-center">
            <h2 className="w-[3px] h-[25px] bg-[#c93f1c]"></h2>
            <h2 className="text-3xl font-thin text-black font-serif w-full">Skills</h2>
          </div>
        </div>

        {/* Skills Desktop */}
        <div className="md:flex justify-between hidden">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Languages</h3>
            <ul className="text-gray-600 list-disc list-inside">
              <li>JavaScript</li>
              <li>Python</li>
              <li>TypeScript</li>
              <li>Go</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Frameworks, Libraries, and RTE</h3>
            <ul className="text-gray-600 list-disc list-inside">
              <li>React</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>Prisma</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Databases</h3>
            <ul className="text-gray-600 list-disc list-inside">
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>Redis</li>
            </ul>
          </div>
        </div>

        {/* Skills Mobile */}
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Languages</h3>
            <ul className="text-gray-600 list-disc list-inside">
              <li>JavaScript</li>
              <li>Python</li>
              <li>TypeScript</li>
              <li>Go</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Databases</h3>
            <ul className="text-gray-600 list-disc list-inside">
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>Redis</li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Frameworks, Libraries, and RTE</h3>
          <ul className="text-gray-600 list-disc list-inside">
            <li>React</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Prisma</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default About;

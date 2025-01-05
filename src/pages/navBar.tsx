import { useState, useEffect } from "react";

const NavBar = ({activeSection} : {activeSection: string}) => {
  const [showSecondaryNav, setShowSecondaryNav] = useState(false);

  useEffect(() => {
    // Scroll detection for the secondary nav
    const handleScroll = () => {
      const scrollThreshold = 600; // Adjust based on your requirement
      setShowSecondaryNav(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  console.log(activeSection, 'hmmmm')

  return (
    <>
      {/* Primary Navigation Bar */}
      <div className="absolute top-5 w-full flex justify-center items-center">
        <div className="bg-[#191919] flex w-[90%] justify-between h-20 items-center">
          <span className="text-white text-3xl font-serif ml-10">Nduka.</span>
          <ul className="flex gap-4 text-[#535353] mr-10 cursor-pointer">
            <li className={`${activeSection === "intro" ? "text-white" : ""}`}>
              Intro
            </li>
            <li className={`${activeSection === "about-me" ? "text-white" : ""}`}>
              About
            </li>
            <li className={`${activeSection === "works" ? "text-white" : ""}`}>
              Works
            </li>
            <li className={`${activeSection === "footer" ? "text-white" : ""}`}>
              Contact
            </li>
          </ul>
        </div>
      </div>

      {/* Secondary Navigation Bar */}
      <div
        className={`fixed top-0 w-full flex justify-center items-center shadow-md bg-[#191919] z-50 h-24 transition-transform duration-600 ease-in-out ${
          showSecondaryNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex w-[90%] justify-between h-16 items-center">
          <span className="text-white text-3xl font-serif ">Nduka.</span>
          <ul className="flex gap-4 text-[#535353]  cursor-pointer">
            <li className={`${activeSection === "intro" ? "text-white" : ""}`}>
              Intro
            </li>
            <li className={`${activeSection === "about-me" ? "text-white" : ""}`}>
              About
            </li>
            <li className={`${activeSection === "works" ? "text-white" : ""}`}>
              Works
            </li>
            <li className={`${activeSection === "footer" ? "text-white" : ""}`}>
              Contact
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;

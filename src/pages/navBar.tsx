import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = ({ activeSection }: { activeSection: string }) => {
  const [showSecondaryNav, setShowSecondaryNav] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Scroll detection for the secondary nav
    const handleScroll = () => {
      const scrollThreshold = 600; // Adjust based on your requirement
      setShowSecondaryNav(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section>
      {/* Desktop */}
      <section className="hidden md:block">
        {/* Primary Navigation Bar */}
        <div className="absolute top-5 w-full flex justify-center items-center">
          <div className="bg-[#191919] flex w-[90%] justify-between h-20 items-center">
            <span className="text-white text-3xl font-serif ml-10">Nduka.</span>
            <ul className="flex gap-4 text-[#535353] mr-10 cursor-pointer">
              <li className={`${activeSection === "intro" ? "text-white" : ""}`}>Intro</li>
              <li className={`${activeSection === "about-me" ? "text-white" : ""}`}>About</li>
              <li className={`${activeSection === "works" ? "text-white" : ""}`}>Works</li>
              <li className={`${activeSection === "footer" ? "text-white" : ""}`}>Contact</li>
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
            <span className="text-white text-3xl font-serif">Nduka.</span>
            <ul className="flex gap-4 text-[#535353] cursor-pointer">
              <li className={`${activeSection === "intro" ? "text-white" : ""}`}>Intro</li>
              <li className={`${activeSection === "about-me" ? "text-white" : ""}`}>About</li>
              <li className={`${activeSection === "works" ? "text-white" : ""}`}>Works</li>
              <li className={`${activeSection === "footer" ? "text-white" : ""}`}>Contact</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mobile */}
      <section className="md:hidden">
        <div className="fixed top-0 w-full flex justify-center items-center z-40">
          <div className="bg-[#191919] flex w-full justify-between h-20 items-center">
            <span className="text-white text-3xl font-serif ml-5">Nduka.</span>
            <span className="relative">
              {isMenuOpen ? (
                <h1
                  className="text-3xl mr-5 text-white/50 font-thin cursor-pointer transition-all duration-300 ease-in-out"
                  onClick={toggleMenu}
                >
                  X
                </h1>
              ) : (
                <RxHamburgerMenu
                  size={32}
                  className="text-white/50 w-7 mr-5 cursor-pointer transition-all duration-300 ease-in-out"
                  onClick={toggleMenu}
                />
              )}
            </span>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="fixed top-20 z-40 border-t border-white/50 left-0 w-full bg-[#191919] flex flex-col pl-5 gap-8 py-8 text-[#535353] text-xl">
            <li
              className={`${
                activeSection === "intro" ? "text-white" : ""
              } cursor-pointer`}
            >
              Intro
            </li>
            <li
              className={`${
                activeSection === "about-me" ? "text-white" : ""
              } cursor-pointer`}
            >
              About
            </li>
            <li
              className={`${
                activeSection === "works" ? "text-white" : ""
              } cursor-pointer`}
            >
              Works
            </li>
            <li
              className={`${
                activeSection === "footer" ? "text-white" : ""
              } cursor-pointer`}
            >
              Contact
            </li>
          </ul>
        )}
      </section>
    </section>
  );
};

export default NavBar;

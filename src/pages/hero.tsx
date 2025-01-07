import { RiLinkedinLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { PiGithubLogoLight } from "react-icons/pi";
import { RiArrowDownSFill } from "react-icons/ri";

const Hero = () => {

    const handleScroll = (id:string) => {
      const element = document.querySelector(id);
      if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top,
          behavior: "smooth", // This provides the base smoothness
        });
      }
    };

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/image/Courage Nduka's Cv.pdf"; // Replace with your file's URL
        link.download = "My Cv"; // Set the desired file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
  return (
    <main className="bg-[#eceeec] h-full" id="intro">
      {/* Hero Section  desktop */}
      <div className="hidden md:flex">
        {/* Text Section */}
        <div className="w-[50%] flex flex-col justify-center items-center ml-16 md:mt-10 lg:mt-0">
          <div>
            <h1 className="text-[#c9401c] text-left text-3xl font-sans">Hello</h1>
            <p className="font-serif  md:text-3xl lg:text-5xl break-words lg:w-12/12  w-9/12 text-left">
              I'm Courage Nduka, a software Developer based in Lagos, Nigeria
            </p>
            <span className="flex gap-7 mt-10 md:w-[85%] lg:w-full">
                <button className="h-16 w-60 bg-black text-white hover:bg-[#c9401c]" onClick={() => handleScroll("#about-me")} >
                  More About Me
                </button>
                <button className="h-16 w-60 border border-black hover:bg-black hover:text-white" onClick={() => handleScroll("#footer")}>
                  GET IN TOUCH
                </button>
            </span>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-[50%] md:h-full">
          <img src="/image/IMG_0983.JPG" alt="Hero Image" />
        </div>
      </div>

      {/* Hero Section Mobile */}
      <div className="mt-14 md:hidden">
         <div className="w-full">
             <img src="/image/IMG_0983.JPG" alt="Hero Image" />
          </div>
            {/* Text Section */}
          <div className="absolute top-48 flex flex-col justify-center items-center ml-5">
            <div>
              <h1 className="text-[#c9401c] text-left text-3xl font-sans">Hello</h1>
              <p className="font-serif text-3xl break-words w-11/12 text-left text-white ">
                I'm Courage Nduka, a software Developer based in Lagos, Nigeria
              </p>
              <span className="flex flex-col gap-7 mt-10">
                  <button className="h-16 w-60 bg-black text-white hover:bg-[#c9401c]" onClick={() => handleScroll("#about-me")} >
                    More About Me
                  </button>
                  <button className="h-16 w-60 border border-black hover:bg-black hover:text-white" onClick={() => handleScroll("#footer")}>
                    GET IN TOUCH
                  </button>
              </span>
            </div>
          </div>
      </div>

      {/* Call to Action */}
      <div className="absolute inset-1/2 -translate-x-full 2xl:mt-96 mt-72 -translate-y-1/2 w-80 ml-56 hidden lg:block">
        <div className="flex justify-center items-center h-24 group">
          <span className="w-44 h-[3px] bg-white"></span>
          <span className="border-2 h-16 flex justify-center items-center w-56 group-hover:bg-white cursor-pointer" onClick={handleDownload}>
            <p className="text-white font-serif text-sm group-hover:text-black">GET MY CV</p>
          </span>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="absolute right-5 top-0 2xl:mt-[40%] mt-[30%]  flex flex-col gap-5 justify-center items-center">
        <span className="cursor-pointer">
          <a href="http://linkedin.com/in/couragenduka">
            <RiLinkedinLine size={32} className="text-white w-7" />
          </a>
        </span>
        <span className="cursor-pointer">
          <a href="https://x.com/couragenwaigbo">
            <FaXTwitter size={32} className="text-white w-7" />
          </a>
        </span>
        <span className="cursor-pointer">
          <a href="https://github.com/Couragenwanduka">
            <PiGithubLogoLight size={32} className="text-white w-7" />
          </a>
        </span>
        <span className="w-[1px] h-[90px] bg-white"></span>
        <span className="w-10 h-10 border flex justify-center items-center rounded-full cursor-pointer" onClick={() => handleScroll("#footer")}>
          <RiArrowDownSFill size={32} className="text-white w-7" />
        </span>
      </div>
    </main>
  );
};

export default Hero;

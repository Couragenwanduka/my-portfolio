import Hero from "./pages/hero"
import About from "./pages/about"
import Work from "./pages/work"
import Footer from "./pages/footer"
import NavBar from "./pages/navBar"
import { useState, useEffect } from "react";
const App = () => {
  const [activeSection, setActiveSection] = useState("");
   useEffect(() => {
      // Section observer logic
      const sections = document.querySelectorAll("main");
      const options = { root: null, threshold: 0.6 };
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      }, options);
  
      sections.forEach((section) => observer.observe(section));
  
      return () => {
        sections.forEach((section) => observer.unobserve(section));
      };
    });
  return (
    <div>
      <NavBar  activeSection={activeSection}/>
      <Hero />
      <About />
      <Work />
      <Footer />
    </div>
  )
}

export default App

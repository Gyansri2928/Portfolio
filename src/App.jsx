import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./index.css";
// --- (1) IMPORT useState ---
import { useEffect, useState } from "react"; 
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "./components/hookmediaquery";
import Header from "./components/header";
import "./font/Conneqt/stylesheet.css";
import Photo from "./components/photo";
import Contact from "./components/contact";
import Education from "./components/education";
import Designation from "./components/designation";
import Title from "./components/title";
import Experience from "./components/experience";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";

function App() {
  const { pathname } = useLocation();
  const isDesktop = useMediaQuery("(min-width: 993px)");

  // --- (2) ADD isScrolled STATE ---
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // --- (3) ADD SCROLL LISTENER EFFECT ---
  useEffect(() => {
    const handleScroll = () => {
      // Set to true if scrolled more than 50px, otherwise false
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty array ensures this runs only once

  if (!isDesktop) {
    return (
      <div className="container-md shadow-lg">
        {/* --- (4) PASS isScrolled PROP --- */}
        <Header isMobile={true} isScrolled={isScrolled} />
        <Photo />
        <Title />
        <Designation />
        <About />
        <Contact />
        <Experience />
        <Skills isMobile={true} />
        <Projects />
        <Education />
      </div>
    );
  } else {
    return (
      <div className="container-md shadow-lg">
        {/* --- (4) PASS isScrolled PROP --- */}
        <Header isMobile={false} isScrolled={isScrolled} />
        <div className="row">
          <div className="col-5" id="leftPanel">
            <Photo />
            <Contact />
            <Education />
            <Skills isMobile={false} />
          </div>
          <div className="col-7" id="rightPanel">
            <Title />
            <Designation />
            <About />
            <Experience />
            <Projects />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

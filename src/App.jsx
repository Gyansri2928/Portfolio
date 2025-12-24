import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./index.css";
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // --- MOBILE LAYOUT (Stacked) ---
  if (!isDesktop) {
    return (
      <div className="container-md shadow-lg bg-white">
        <Header isMobile={true} isScrolled={isScrolled} />
        {/* On mobile, we stack them in a logical reading order */}
        <Photo />
        <div className="p-3">
            <Title />
            <Designation />
            <Contact />
            <hr />
            <About />
            <Skills isMobile={true} />
            <Experience />
            <Projects />
            <Education />
        </div>
      </div>
    );
  } 
  
  // --- DESKTOP LAYOUT (Split View) ---
  else {
    return (
      <div 
        className="container-md shadow-lg p-0" 
        style={{ minHeight: "100vh", overflow: "hidden" }} // Ensure full height
      >
        <div className="row g-0" style={{ minHeight: "100vh" }}>
          
          {/* --- LEFT SIDEBAR (Dark Background) --- */}
          {/* Matches the 'Dark Teal/Black' side of your reference image */}
          <div 
            className="col-5 text-white" 
            id="leftPanel"
            style={{ backgroundColor: "#1e293b", padding: "2rem" }} // Dark slate color
          >
            {/* 1. Contact Info (Top Left in image) */}
            <div className="mb-3">
                <Contact /> 
            </div>

            {/* 2. Photo (Hexagon shape logic will be in Photo component, or basic img here) */}
            <Photo />

            {/* 3. Profile / About Summary */}
            <div id="about" className="mt-4">
                <h5 style={{borderBottom: "2px solid #fd7e14", display: "inline-block", paddingBottom: "5px"}}>PROFILE</h5>
                <About />
            </div>

            {/* 4. Work Experience (On the dark side in your image) */}
            <div id="experience" className="mt-3">
                <h5 style={{borderBottom: "2px solid #fd7e14", display: "inline-block", paddingBottom: "5px"}}>WORK EXPERIENCE</h5>
                <Experience />
            </div>

            {/* 5. Education */}
            <div id="education" className="mt-2">
                <h5 style={{borderBottom: "2px solid #fd7e14", display: "inline-block", paddingBottom: "5px"}}>EDUCATION</h5>
                <Education />
            </div>
          </div>

          {/* --- RIGHT CONTENT (White Background) --- */}
          <div 
            className="col-7 bg-white" 
            id="rightPanel"
            style={{ position: "relative" }}
          >
            {/* Header sits on top of the right panel */}
            <Header isMobile={false} isScrolled={isScrolled} />
            
            <div style={{ padding: "3rem" }}>
                {/* 1. Name & Title (Large text) */}
                <div style={{ marginBottom: "3rem" }}>
                    <Title />
                    <Designation />
                </div>

                {/* 2. Skills (The Sliders) */}
                <div id="skills" className="mb-5">
                     {/* You might need to add a header <h5>SKILLS</h5> inside the Skills component or here */}
                    <Skills isMobile={false} />
                </div>

                {/* 3. Projects (Replacing 'References' from the image) */}
                <div id="projects">
                    {/* Header handled inside component or add here */}
                    <Projects />
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
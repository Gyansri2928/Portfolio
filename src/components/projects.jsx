import React from "react";
import { FaGithub } from "react-icons/fa";

function Projects() {
  // Reusable component for a single project item
  const ProjectItem = ({ title, description, techStack, githubLink }) => (
    <div className="mb-4">
      {/* Title & Link Row */}
      <div className="d-flex justify-content-between align-items-center mb-1">
        <h5 style={{ fontWeight: "700", color: "#212529", marginBottom: "0" }}>
          {title}
        </h5>
        
        {/* GitHub Icon Link */}
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#212529", transition: "color 0.2s" }}
          onMouseEnter={(e) => (e.target.style.color = "#fd7e14")}
          onMouseLeave={(e) => (e.target.style.color = "#212529")}
        >
          <FaGithub size={20} />
        </a>
      </div>

      {/* Tech Stack (Orange Accent) */}
      <div className="mb-2" style={{ fontSize: "0.9rem", color: "#fd7e14", fontWeight: "600" }}>
        {techStack}
      </div>

      {/* Description */}
      <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: "1.5", marginBottom: "5px" }}>
        {description}
      </p>
      
      {/* Subtle separator line (optional, keeps it clean) */}
      <hr style={{ borderColor: "#eee", marginTop: "15px" }} />
    </div>
  );

  return (
    <div className="my-4" id="projects">
      {/* Header matching Skills section */}
      <div className="mb-4">
        <h3 style={{ 
            display: "inline-block", 
            borderBottom: "3px solid #fd7e14", 
            paddingBottom: "5px",
            color: "#333",
            textTransform: "uppercase"
        }}>
            Projects
        </h3>
      </div>

      {/* Project 1: KrishiHal */}
      <ProjectItem 
        title="KrishiHal (Final Year Project)"
        techStack="Python, Flask, Next.js, PyTorch"
        description="A full-stack agri-tech platform for farmers featuring AI-driven pest detection, crop recommendations, and weather forecasting."
        githubLink="https://github.com/Krishi-Hal/kirishi-hal-website.git"
      />

      {/* Project 2: Aaj Ka Andaaz */}
      <ProjectItem 
        title="Aaj Ka Andaaz"
        techStack="Flutter, Node.js, Express, MongoDB"
        description="A personalized, cross-platform style recommendation engine. Helps users discover and curate fashion styles tailored to their preferences."
        githubLink="https://github.com/Gyansri2928/aajkaandaaz-app.git"
      />

      {/* Project 3: TrendyFeat */}
      <ProjectItem 
        title="TrendyFeat"
        techStack="Firebase, Flutter, GetX"
        description="A comprehensive e-commerce shoe shopping application featuring a client panel, admin panel, and robust backend."
        githubLink="https://github.com/Gyansri2928/TrendyFeet.git"
      />

      {/* Project 4: Satark */}
      <ProjectItem 
        title="Satark (Samsung Hackathon)"
        techStack="React, Flask, YOLOv4, OpenCV"
        description="AI-powered crime detection website. Auto-detects suspicious gestures and weapons via camera and sends SMS alerts to police."
        githubLink="https://github.com/KaranManral/crime_detective.git"
      />

    </div>
  );
}

export default Projects;
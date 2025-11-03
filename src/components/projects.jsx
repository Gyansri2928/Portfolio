import React from "react";
import { FiLink2 } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
// Image imports have been removed as they are no longer used

function Projects() {
  return (
    <div className="row my-4" id="projects">
      <div className="row my-4">
        <div className="col" id="projectsHead">
          PROJECTS
        </div>
      </div>
      <div className="row" style={{ margin: "0 auto" }}>
        
        {/* --- Card 1: KrishiHal --- */}
        <div className="card mb-3 shadow-sm">
          <div className="card-body">
            <h5 className="card-title text-muted">KrishiHal (Final year project)</h5>
            <p className="card-text text-muted">
              A full-stack agri-tech platform for farmers featuring AI-driven pest detection, crop recommendations, and weather forecasting. Developed as a final-year project using Python, Flask, Next.js, and PyTorch.
            </p>
            <div className="cardlink">
              <a
                href="https://github.com/Krishi-Hal/kirishi-hal-website.git" // <-- ADD LINK
                className="card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              {/* <a
                href="YOUR_LIVE_DEMO_URL_HERE"
                className="card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiLink2 />
              </a> */}
            </div>
          </div>
        </div>

        {/* --- Card 2: Aaj Ka Andaaz --- */}
        <div className="card mb-3 shadow-sm">
          <div className="card-body">
            <h5 className="card-title text-muted">Aaj Ka Andaaz</h5>
            <p className="card-text text-muted">
              A personalized, cross-platform style recommendation engine. This full-stack application helps users discover and curate fashion styles tailored to their preferences.
            </p>
            <div className="cardlink">
              <a
                href="https://github.com/Gyansri2928/aajkaandaaz-app.git" // <-- ADD LINK
                className="card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* --- Card 3: TrendyFeat (Updated) --- */}
        <div className="card mb-3 shadow-sm">
          <div className="card-body">
            <h5 className="card-title text-muted">
              TrendyFeat
            </h5>
            <p className="card-text text-muted">
              A comprehensive e-commerce shoe shopping application featuring a client panel, admin panel, and robust backend. It includes all essential features of a modern e-commerce platform.
              <br/>
              <strong>Tech Stack:</strong> Firebase, Flutter, Getx(state management)
            </p>
            <div className="cardlink">
              <a
                href="https://github.com/Gyansri2928/TrendyFeet.git" // <-- ADD LINK
                className="card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* --- Card 4: Satark (Updated) --- */}
        <div className="card mb-3 shadow-sm">
          <div className="card-body">
            <h5 className="card-title text-muted">Satark (Hackathon Project)</h5>
            <p className="card-text text-muted">
              An AI-powered crime detection website developed for the Samsung Innovation Campus Hackathon (2024). It auto-detects suspicious gestures, expressions (anger), and harmful tools via camera, then sends an SMS alert to the nearby police station with the current location. It also features criminal image matching.
              <br/>
              <strong>Tech Stack:</strong> React, Tailwind CSS, Flask, YOLOv4, OpenCV (cv2)
            </p>
            <div className="cardlink">
              <a
                href="https://github.com/KaranManral/crime_detective.git" // <-- ADD LINK
                className="card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;


import React from "react";

function About() {
  return (
    <div className="row mb-4" id="about">
      {/* Header matching other Sidebar sections (Contact, Experience, Education) */}

      <div className="col-12">
        <p style={{ 
            color: "#e0e0e0",   // Light grey text for better contrast on dark background
            fontSize: "0.95rem", 
            lineHeight: "1.7",  // Slightly more breathing room for text blocks
            textAlign: "left"   // Left align looks cleaner in sidebars
        }}>
          Detail-oriented and adaptable MCA graduate with a strong foundation in
          full-stack development and AI. Passionate about building innovative,
          real-world solutions, with hands-on experience in mobile development
          using Flutter and web development using the MERN stack and Next.js.
          <br /><br />
          Proven ability to architect and deploy complex applications,
          integrating AI/ML models (PyTorch, OpenCV) with robust backends
          (Flask, Node.js). Skilled in both creating engaging user interfaces
          and engineering complex server-side logic, demonstrating a versatile
          skill set ready to tackle diverse technical challenges.
        </p>
      </div>
    </div>
  );
}

export default About;
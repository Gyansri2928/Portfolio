import React from "react";

function Experience() {
  return (
    <div className="row mb-4" id="experience">
      {/* Note: We typically handle the main "EXPERIENCE" header in the App.jsx 
         parent to keep spacing consistent, but I kept this here just in case.
         If you see double headers, remove this block.
      */}

      {/* ITEM 1: Prodigy InfoTech */}
      <div className="col-12 mb-4">
        {/* Role Title - Big and White */}
        <h5 className="text-white mb-1" style={{ fontWeight: "600" }}>
          Flutter Developer
        </h5>
        
        {/* Company & Date - Orange Accent */}
        <div className="mb-2" style={{ color: "#fd7e14", fontSize: "0.9rem", fontWeight: "500" }}>
          Prodigy InfoTech Limited | <span style={{ fontStyle: "italic", color: "#ccc" }}>Aug 2024 - Sep 2024</span>
        </div>

        {/* Description - Light Grey for readability */}
        <p style={{ color: "#e0e0e0", fontSize: "0.9rem", lineHeight: "1.6" }}>
          Worked as a Flutter Developer intern for 1 month. focused on Dart, GetX, and real-time database usage. 
          Improved skills in state management, UI design, and third-party package integration.
        </p>
      </div>

      {/* Placeholder for your NEW job (Agenthum Solutions). 
         Uncomment this when you want to add it! 
      */}
      {/* <div className="col-12 mb-4">
        <h5 className="text-white mb-1" style={{ fontWeight: "600" }}>
          Software Developer
        </h5>
        <div className="mb-2" style={{ color: "#fd7e14", fontSize: "0.9rem", fontWeight: "500" }}>
          Agenthum Solutions | <span style={{ fontStyle: "italic", color: "#ccc" }}>Dec 2025 - Present</span>
        </div>
        <p style={{ color: "#e0e0e0", fontSize: "0.9rem", lineHeight: "1.6" }}>
          Recently joined to contribute to full-stack development and innovative software solutions.
        </p>
      </div>
      */}

    </div>
  );
}

export default Experience;
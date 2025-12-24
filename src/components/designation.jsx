import React from "react";

function Designation() {
  return (
    <div className="row mb-5"> {/* Generous bottom margin to separate from the next section */}
      <div className="col">
        {/* Position Title */}
        <h3
          style={{
            fontFamily: "sans-serif",
            fontSize: "1.3rem",
            fontWeight: "400",
            textTransform: "uppercase", // Classic resume style
            color: "#6c757d", // Muted grey text
            letterSpacing: "2px", // Adds elegance
            margin: "0", 
            marginBottom: "0.5rem"
          }}
        >
          Software Developer
        </h3>
        
        {/* The Orange Accent Line (Short & Thick) */}
        <div 
          style={{
            backgroundColor: "#fd7e14", // The orange accent color
            height: "4px",             // Thickness
            width: "60px",             // Short width (not full page)
            borderRadius: "2px"        // Rounded edges
          }} 
        />
      </div>
    </div>
  );
}

export default Designation;
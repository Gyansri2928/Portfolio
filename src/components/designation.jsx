import React from "react";

function Designation() {
  return (
    <div className="row">
      <div className="col">
        {/* Your Title */}
        <h3
          className="text-muted"
          style={{
            font: "small-caps 24px sans-serif",
            marginTop: "1rem",     // Space above title
            marginBottom: "0.5rem" // Space between title and line
          }}
        >
          Software Developer
        </h3>
        
        {/* The Separator Line */}
        <hr 
          style={{
            backgroundColor: "#EBEBEB", // A light grey color for the line
            height: "2px",             // Makes the line visible
            border: "none",            // Removes the default 3D border
            margin: "0",               // Resets default margins
            marginBottom: "3rem"       // Adds 3rem of space below the line
          }} 
        />
      </div>
    </div>
  );
}

export default Designation;
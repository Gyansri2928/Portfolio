import React from "react";

function Title() {
  return (
    <div className="row mb-2"> {/* Added mb-2 for small spacing before Designation */}
      <div className="col">
        <h1
          style={{
            fontSize: "calc(32px + 1.5vw)", // Slightly larger for impact
            fontFamily: "Conneqt, sans-serif",
            fontWeight: "700", // Bold looks better for the main header name
            fontStyle: "normal",
            color: "#212529", // Dark, sharp text
            letterSpacing: "2px", // Modern spacing
            lineHeight: "1.1",
            margin: "0" // Reset default browser margins
          }}
        >
          GYAN SAGAR SRIVASTAVA
        </h1>
      </div>
    </div>
  );
}

export default Title;
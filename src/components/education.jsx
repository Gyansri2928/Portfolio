import React from "react";

// Helper component adapted for the Dark Sidebar
function EducationEntry({ level, degree, school, location, dates }) {
  return (
    <div className="mb-4">
      {/* Degree Name (White & Bold) */}
      <h6 className="text-white mb-1" style={{ fontSize: "1rem", fontWeight: "600" }}>
        {degree}
      </h6>
      
      {/* School & Location (Orange Accent) */}
      <div style={{ color: "#fd7e14", fontSize: "0.9rem", fontWeight: "500", marginBottom: "2px" }}>
        {school}, {location}
      </div>
      
      {/* Dates (Light Grey) */}
      <div style={{ color: "#ccc", fontSize: "0.85rem", fontStyle: "italic" }}>
        {dates}
      </div>
      
      {/* Optional: 'Level' text is usually redundant if Degree is shown, 
          but if you want to keep it, you can add it as a small label above.
          I removed it here for a cleaner look, as "Master of..." implies the level. 
      */}
    </div>
  );
}

function Education() {
  return (
    <div className="row" id="education">
      {/* Header matching other Sidebar sections */}

      <div className="col-12">
        <EducationEntry
          degree="Master of Computer Applications"
          school="University of Lucknow"
          location="Lucknow"
          dates="2023 - 2025"
        />

        <EducationEntry
          degree="Bachelor of Computer Applications"
          school="Lovely Professional University"
          location="Punjab"
          dates="2020 - 2023"
        />

        <EducationEntry
          degree="Senior Secondary (High School)"
          school="Aditya Birla Public School"
          location="Renusagar"
          dates="2020"
        />
      </div>
    </div>
  );
}

export default Education;
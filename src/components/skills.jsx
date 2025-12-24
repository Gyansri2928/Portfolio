import React from "react";

// Helper Component: Renders a single "Slider" style skill
// Matches the visual from your uploaded image (Orange line with a dot)
const SkillSlider = ({ name, percentage }) => (
  <div className="mb-3">
    <div className="d-flex justify-content-between">
      <span style={{ fontWeight: "600", fontSize: "0.95rem", color: "#333" }}>
        {name}
      </span>
      {/* Optional: Show percentage number if you want, or keep it clean like the image */}
      {/* <span className="text-muted small">{percentage}%</span> */}
    </div>
    
    {/* The Slider Track (Grey Background) */}
    <div 
      style={{ 
        height: "5px", 
        width: "100%", 
        backgroundColor: "#e9ecef", 
        borderRadius: "2px",
        marginTop: "5px",
        position: "relative"
      }}
    >
      {/* The Filled Part (Orange) */}
      <div 
        style={{ 
          width: `${percentage}%`, 
          height: "100%", 
          backgroundColor: "#083170ff", // The orange accent color
          borderRadius: "2px",
          position: "relative",
          transition: "width 1s ease-in-out" // Smooth animation on load
        }}
      >
        {/* The "Dot" at the end of the slider (Visual detail from your image) */}
        <div 
            style={{
                position: "absolute",
                right: "-6px", // Half the width of the dot to center it
                top: "-3px",   // Center vertically relative to the 5px line
                width: "12px",
                height: "12px",
                backgroundColor: "#072a5fff",
                borderRadius: "50%",
                border: "2px solid white", // Makes it pop
                boxShadow: "0 1px 3px rgba(0,0,0,0.2)"
            }}
        />
      </div>
    </div>
  </div>
);

function Skills() { 
  // I added 'level' (percentage) to your existing data.
  // Adjust these values based on your actual confidence!
  
  const skillSets = [
    {
      category: "Core & Languages",
      items: [
        { name: "Dart (Flutter)", level: 90 }, // High due to Internship
        { name: "JavaScript / TypeScript", level: 85 },
        { name: "Python", level: 80 }, // Used in KrishiHal
        { name: "C++ / Java", level: 75 },
        { name: "HTML & CSS", level: 90 }
      ]
    },
    {
      category: "Frameworks & Libraries",
      items: [
        { name: "React.js / Next.js", level: 85 },
        { name: "Flutter", level: 90 },
        { name: "Node.js (Express)", level: 80 },
        { name: "Flask", level: 75 },
        { name: "Tailwind CSS", level: 85 }
      ]
    },
    {
      category: "Tools & AI",
      items: [
        { name: "SQL & MongoDB", level: 80 },
        { name: "Firebase", level: 85 },
        { name: "PyTorch & OpenCV", level: 70 }, // AI projects
        { name: "Git & GitHub", level: 90 }
      ]
    }
  ];

  return (
    <div className="my-4" id="skills">
      {/* Main Header with orange underline */}
      <div className="mb-4">
         <h3 style={{ 
            display: "inline-block", 
            borderBottom: "3px solid #072b61ff", 
            paddingBottom: "5px",
            marginBottom: "20px",
            color: "#333" 
         }}>
            SKILLS
         </h3>
      </div>

      <div className="row">
        {skillSets.map((section, index) => (
          // We can split them into columns if space permits, or stack them.
          // Since the right panel is wide (col-7), let's put "Core" and "Frameworks" side-by-side
          // and "Tools" below, or just stack categories.
          // Here I stack categories for a clean vertical read.
          <div key={index} className="col-12 mb-4">
             <h6 className="text-uppercase text-muted mb-3" style={{ fontSize: "0.85rem", letterSpacing: "1px" }}>
                {section.category}
             </h6>
             <div className="row">
                {/* Render the sliders */}
                {section.items.map((skill) => (
                    <div className="col-md-6" key={skill.name}> {/* 2 columns of sliders per category */}
                        <SkillSlider name={skill.name} percentage={skill.level} />
                    </div>
                ))}
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
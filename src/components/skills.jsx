import React from "react";

// Helper component to render a list of skills as badges
const SkillCategory = ({ title, skills }) => (
  <div className="mb-3">
    <h5 className="text-muted">{title}</h5>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {skills.map((skill) => (
        <span
          key={skill}
          className="badge bg-dark rounded-pill p-2 m-1"
          style={{ fontSize: "0.9rem", fontWeight: "normal" }}
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

function Skills(props) { // The 'props' is still here in case App.jsx passes it
  
  const languages = ["C++", "Java", "Python", "JavaScript", "Dart", "HTML", "CSS"];
  const frameworks = ["React.js", "Next.js", "Node.js", "Flask", "Flutter", "Tailwind CSS"];
  const toolsAndTech = ["SQL", "Firebase", "PyTorch", "OpenCV", "REST API", "MongoDB"];

  // This layout is responsive by default, so we don't need the isMobile check
  return (
    <div className="row my-4" id="skills">
      <div className="row my-4">
        <div className="col" id="skillsHead">
          TECHNOLOGIES
        </div>
      </div>
      <div className="row">
        <div className="col">
          <SkillCategory title="Languages" skills={languages} />
          <SkillCategory title="Frameworks & Libraries" skills={frameworks} />
          <SkillCategory title="Databases & Tools" skills={toolsAndTech} />
        </div>
      </div>
    </div>
  );
}

export default Skills;


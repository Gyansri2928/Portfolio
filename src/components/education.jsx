import React from "react";

// A small helper component to keep entries consistent
function EducationEntry({ level, degree, school, location, dates }) {
  return (
    <div className="row mb-3"> {/* Reduced vertical margin */}
      <div className="col px-3 text-muted">
        <h6 className="mb-0" style={{ fontWeight: "bold", color: "#495057" }}>{level}</h6>
        <p className="mb-0" style={{ fontSize: "0.95rem" }}>{degree}</p>
        <p className="mb-0" style={{ fontSize: "0.95rem" }}>{school}, {location}</p>
        <p className="mb-0" style={{ fontSize: "0.9rem" }}>{dates}</p>
      </div>
    </div>
  );
}

function Education() {
  return (
    <div className="row" id="education">
      <div className="row my-4">
        <div className="col-12" id="eduHead">
          EDUCATION
        </div>
      </div>

      <EducationEntry
        level="Masters"
        degree="Master of Computer Applications"
        school="University of Lucknow"
        location="Lucknow"
        dates="2023 - 2025"
      />

      <EducationEntry
        level="Bachelors"
        degree="B.C.A."
        school="Lovely Professional University"
        location="Punjab"
        dates="2020 - 2023"
      />

      <EducationEntry
        level="Senior Secondary"
        degree="High School Diploma"
        school="Aditya Birla Public School"
        location="Renusagar"
        dates="Year of 2020"
      />
    </div>
  );
}

export default Education;

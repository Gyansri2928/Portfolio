import React from "react";

function Header(props) {
  function goToModule(event, moduleID) {
    event.preventDefault();
    document.getElementById(moduleID).scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }

  return (
    // --- (1) ADDED 'sticky-top' TO MAKE THE HEADER STICK ---
    <nav className="navbar navbar-expand-lg sticky-top" id="navbarTop">
      
      {/* --- (2) ADDED CONDITIONAL NAME BLOCK --- */}
      {props.isScrolled && (
        <a
          className="navbar-brand"
          href="#!"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{
            marginLeft: "1rem",
            fontWeight: 500, // Or "bold"
            fontSize: "calc(12px + 1vw)",
          }}
        >
          Gyan Sagar Srivastava
        </a>
      )}

      <button
        className="navbar-toggler m-2 bg-white"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
        style={{ justifyContent: "end" }}
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item mx-3">
            <a
              className="nav-link"
              href="#!"
              onClick={(e) => {
                e.preventDefault();
                // --- (3) Added 'smooth' behavior for a nicer scroll ---
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Home
            </a>
          </li>
          <li className="nav-item mx-3">
            <a
              className="nav-link"
              href="#!"
              onClick={(e) => {
                goToModule(e, "about");
              }}
            >
              About
            </a>
          </li>
          <li className="nav-item mx-3">
            <a
              className="nav-link"
              href="#!"
              onClick={(e) => {
                if (props.isMobile) goToModule(e, "education");
                else {
                  e.preventDefault();
                  // --- (3) Added 'smooth' behavior ---
                  window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: "smooth",
                  });
                }
              }}
            >
              Education
            </a>
          </li>
          <li className="nav-item mx-3">
            <a
              className="nav-link"
              href="#!"
              onClick={(e) => {
                goToModule(e, "experience");
              }}
            >
              Experience
            </a>
          </li>
          <li className="nav-item mx-3">
            <a
              className="nav-link"
              href="#!"
              onClick={(e) => {
                goToModule(e, "skills");
              }}
            >
              Skills
            </a>
          </li>
          <li className="nav-item mx-3">
            <a
              className="nav-link"
              href="#!"
              onClick={(e) => {
                goToModule(e, "projects");
              }}
            >
              Projects
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;

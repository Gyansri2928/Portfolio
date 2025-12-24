import React from "react";

function Header(props) {
  // Common orange accent color from the resume design
  const accentColor = "#fd7e14"; 

  function goToModule(event, moduleID) {
    event.preventDefault();
    const element = document.getElementById(moduleID);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start", // Changed to start so titles aren't cut off
        inline: "nearest",
      });
    }
  }

  return (
    // UPDATED: Added 'bg-white' to match the right-side resume paper look
    // Removed specific ID 'navbarTop' if not needed for specific CSS, kept for safety
    <nav className="navbar navbar-expand-lg sticky-top bg-white shadow-sm" id="navbarTop" style={{ padding: "0.5rem 2rem" }}>
      
      {/* LOGIC: In the resume design, your name is HUGE at the top of the right column.
         We only show this small navbar name when the user scrolls down and the big name disappears.
      */}
      {props.isScrolled ? (
        <a
          className="navbar-brand text-dark"
          href="#!"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{
            fontWeight: "bold",
            fontSize: "1.2rem",
            color: "#333",
          }}
        >
          Gyan Sagar Srivastava
        </a>
      ) : (
        // Spacer to keep the hamburger menu pushed to the right even when name is hidden
        <div className="navbar-brand" style={{ opacity: 0 }}>&nbsp;</div>
      )}

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={{ border: "none" }} // Cleaner look
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
        style={{ justifyContent: "end" }}
      >
        <ul className="navbar-nav">
          {[
            { id: "home", label: "Home", action: (e) => window.scrollTo({ top: 0, behavior: "smooth" }) },
            { id: "about", label: "About", action: (e) => goToModule(e, "about") },
            { id: "education", label: "Education", action: (e) => goToModule(e, "education") },
            { id: "experience", label: "Experience", action: (e) => goToModule(e, "experience") },
            { id: "skills", label: "Skills", action: (e) => goToModule(e, "skills") },
            { id: "projects", label: "Projects", action: (e) => goToModule(e, "projects") },
          ].map((item) => (
            <li className="nav-item mx-2" key={item.id}>
              <a
                className="nav-link"
                href="#!"
                onClick={(e) => {
                  e.preventDefault();
                  item.action(e);
                }}
                style={{
                  color: "#555", // Dark grey text
                  fontWeight: "500",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.color = accentColor)} // Orange on hover
                onMouseLeave={(e) => (e.target.style.color = "#555")}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
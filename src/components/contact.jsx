import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Contact() {
  // Common styles for the links
  const linkStyle = {
    textDecoration: "none",
    color: "white", // White text for dark background
    fontSize: "0.9rem",
    fontWeight: "400",
    transition: "color 0.2s"
  };

  // Common style for the rows
  const rowStyle = {
    marginBottom: "15px",
    display: "flex",
    alignItems: "center"
  };

  return (
    <div className="mb-4">
      {/* Header with Orange Underline */}
      <div className="mb-3">
        <h5 style={{ 
            borderBottom: "2px solid #fd7e14", 
            display: "inline-block", 
            paddingBottom: "5px",
            color: "white",
            letterSpacing: "1px",
            fontWeight: "bold"
        }}>
          CONTACT
        </h5>
      </div>

      {/* LinkedIn */}
      <div style={rowStyle}>
        <FaLinkedin size={20} style={{ color: "#fd7e14", marginRight: "15px" }} />
        <a
          href="https://www.linkedin.com/in/gyan-sagar-srivastava-b7422419b/"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
          onMouseEnter={(e) => e.target.style.color = "#fd7e14"} // Hover effect
          onMouseLeave={(e) => e.target.style.color = "white"}
        >
          gyansrivastava29
        </a>
      </div>

      {/* GitHub */}
      <div style={rowStyle}>
        <FaGithub size={20} style={{ color: "#fd7e14", marginRight: "15px" }} />
        <a
          href="https://github.com/Gyansri2928"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
          onMouseEnter={(e) => e.target.style.color = "#fd7e14"}
          onMouseLeave={(e) => e.target.style.color = "white"}
        >
          GyanSri2928
        </a>
      </div>

      {/* Email */}
      <div style={rowStyle}>
        <FaEnvelope size={20} style={{ color: "#fd7e14", marginRight: "15px" }} />
        <a
          href="mailto:gyansri28@gmail.com"
          style={linkStyle}
          onMouseEnter={(e) => e.target.style.color = "#fd7e14"}
          onMouseLeave={(e) => e.target.style.color = "white"}
        >
          gyansri28@gmail.com
        </a>
      </div>
    </div>
  );
}

export default Contact;
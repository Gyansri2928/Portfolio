import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <div className="row" id="contact">
      <div className="row my-2">
        <div className="col" id="contactHead">
          CONTACT
        </div>
      </div>
<div
  className="row m-2 d-flex align-items-center" // Add d-flex and align-items-center
  style={{ borderBottom: "2px solid black", padding: 0 }}
>
  <div className="col-12 d-flex align-items-center"> {/* Use col-12, then apply flex to the inner content */}
      <FaLinkedin style={{ marginRight: "10px" }} /> {/* Add right margin to icon */}
      <a
        className="text-muted"
        href="https://www.linkedin.com/in/gyan-sagar-srivastava-b7422419b/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        gyansrivastava29
      </a>
  </div>
</div>
      <div
        className="row m-2"
        style={{ borderBottom: "2px solid black", padding: 0 }}
      >
        <div className="col-1">
          <FaGithub />
        </div>
        <div className="col-10">
          <a
            className="text-muted"
            href="https://github.com/Gyansri2928"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            GyanSri2928
          </a>
        </div>
      </div>
      <div
        className="row m-2"
        style={{ borderBottom: "2px solid black", padding: 0 }}
      >
        <div className="col-1">
          <FaEnvelope />
        </div>
        <div className="col-10">
          <a
            className="text-muted"
            href="mailto:gyansri28@gmail.com"
            style={{ textDecoration: "none" }}
          >
            gyansri28@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;

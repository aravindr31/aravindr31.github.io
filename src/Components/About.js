import React from "react";
import "../Stylesheets/About.css";
function About() {
  return (
      
    <div className="about">

      <div className="about_heading">
        <h1>
          .about <span>me</span>
        </h1>
      </div>
      <div className="about_content">
        <div className="about_content_left">
          <h4>
            Hello! My name is Brittany and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </h4>
          <br />
          <h4>
            Fast-forward to today, and I've had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients.
          </h4>
        </div>
        <div className="about_content_right">
          <img
            src="/Hack_Mask.png"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;

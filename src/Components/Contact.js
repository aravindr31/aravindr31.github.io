import React from "react";
import "../Stylesheets/Contact.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
function Contact() {
  return (
    <div className="contact">
      <div className="contact_heading">
        <h1>
          .contact <span>me</span>
        </h1>
      </div>
      <div className="contact_content">
        <div className="contact_content_top">
          <h4>
            I'm seeking out opportunities to collaborate with companies /
            agencies / individuals, not just work for them. I want to bring my
            collective design experience to the table where we can work together
            to solve real business-problems in a way that optimizes all of our
            respective experience and knowledge.
          </h4>
          <br/>
          <h4>
            I want to avoid subjective pissing-matches, and favor open-minded
            collaborators where egos are out of the equation. If that all sounds
            about right, then lets for sure chat about how we can work together.
          </h4>
          <br/>
          <h4>Feel free to reach out through any platforms bellow:</h4>
        </div>
        <div className="contact_content_bottom">
          <TwitterIcon className="contact_content_bottom_icon"/>
          <InstagramIcon className="contact_content_bottom_icon"/>
          <LinkedInIcon className="contact_content_bottom_icon"/>
          <AlternateEmailIcon className="contact_content_bottom_icon"/>
        </div>
      </div>
    </div>
  );
}

export default Contact;

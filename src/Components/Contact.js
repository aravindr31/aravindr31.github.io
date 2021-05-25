import React from "react";
import "../Stylesheets/Contact.css";

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
          <h4>Need to reach out to me..</h4>
          <br />
          <h4>Feel free to reach out through any of the below platforms</h4>
          <br />
          <br />

          <div className="contact_content_middile">
            <a
              href="mailto:aravindr597@gmail.com"
              className="contact_content_middile_link"
            >
              {/* <TwitterIcon className="contact_content_middile_icon" />  */}
              aravindr597@gmail.com
            </a>
            <a
              href="https://twitter.com/aravind___r"
              className="contact_content_middile_link"
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com/this_is_me__aravind/"
              className="contact_content_middile_link"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/aravind-r-954451118/"
              className="contact_content_middile_link"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="contact_content_bottom"></div>
      </div>
    </div>
  );
}

export default Contact;

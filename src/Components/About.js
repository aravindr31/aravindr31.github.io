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
            Hi, I'm Aravind. A multi-talented human who create life on the
            internet. I got into the field of web development back in 2020 when
            the corona crisis started. From there I started Self Learning web
            technologies with a few basic youtube videos and w3schools. That
            taught how vast is the field of web development is.
          </h4>
          <br />
          <h4>
            Fast-forward to today, after building few handfull of projects for
            my on , I am confident enough to build any web being with a highly
            performant and maintainable code base. I being a new candidate to
            this web world, is highly flexible and fueled with high energy
            levels to learn new things every day to make inclusive products and
            digital experiences for my clients.
          </h4>
        </div>
        <div className="about_content_right">
          <div className="about_content_right_inner_block">
            <div className="losange">
              <div className="los1">
                <img
                  src="/profile_pic .png"
                  alt="profile pic"
                  srcset=""
                  width="255"
                  height="320"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

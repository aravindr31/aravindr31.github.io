import React from "react";
import "../Stylesheets/Works.css";
import Work_Projects from "./Work_Projects";
function Works() {
  return (
    <div className="work">
      <div className="work_heading">
        <h1>
          .my internet <span className="span_color">beings</span>
        </h1>
      </div>
      <Work_Projects
        project_interface_direction="work_projects"
        project_name="Spotify Web Player Clone"
        discription="A perfectly etched web app clone of the Offical Spotify Web Player. Ability to Play&Pause, Search Artist and Songs and Even Control the songs played in other devices with the Spotify Account. Secured Login with Spotify's own Authentication System."
        github_link="https://github.com/dev-Aravind/Spotify-ReactApp"
        website_link="https://spotify-react-player.surge.sh/"
        screenshot_link="/spotify.png"
        Technologies="React,Node JS,Express,Spotify Web API"
      />
      <Work_Projects
        project_interface_direction="work_projects_reverse"
        project_name="Amazon Clone"
        discription="A clean build of Amazon Shopping Website with React and Node JS. Have full Ecommerce Functionality along with Integrated Stripe Payment System and user authentication using bcrypt"
        github_link="https://github.com/dev-Aravind/Amazon-clone"
        website_link="https://amazonclone-react.surge.sh/"
        screenshot_link="/amazon.png"
        Technologies="React,Node JS,Express,MongoDB,Stripe API"
      />
      <Work_Projects
        project_interface_direction="work_projects"
        project_name="NetFlix Clone"
        discription="A clean build of Netflix UI using React fully Mobile Responsive. Uses Google Firebase for deployment.Uses Realtime data form TMDB API "
        github_link="https://github.com/dev-Aravind/Netflix-clone"
        website_link="https://netflix-clone-3830c.web.app/"
        screenshot_link="/netflix.png"
        Technologies="React, Firebase, TMDB API"
      />
      <Work_Projects
        project_interface_direction="work_projects_reverse"
        project_name="Google Docs Clone"
        discription="A customised Google Docs Clone with collabarate typeing Feature. Customized UI build using React with all basic Editor components.Uses Node JS backend and Mongo DB to store and retrive documents."
        github_link="https://github.com/dev-Aravind/google-doc-mern"
        website_link="https://netflix-clone-3830c.web.app/"
        screenshot_link="/Google DOCS Clone.png"
        Technologies="React,Node JS,Quill JS,Socket IO,MongoDB"
      />
      <Work_Projects
        project_interface_direction="work_projects"
        project_name="DOP Agent Automator"
        discription="A feature packed web interface build for MPKBY agents in India. Simplifies there day to day work load significantly. Uses Handlebar template Engine along with Node JS and Mongo DB. Integrated a Python Selenium web automater with Node JS"
        github_link="https://github.com/dev-Aravind/DOP-Agent-Automator"
        website_link=""
        screenshot_link="/DOP.png"
        Technologies="NodeJS,HandeBars,Express,MongoDB,JQuery,AJax,Bootstrap"
      />
      <Work_Projects
        project_interface_direction="work_projects_reverse"
        project_name="Encrypted QR Code Generator"
        discription="A QR code generator with an extra level of security encryption. Uses Cryptr module to encrypt and decrypt data with custom ENCRYPTION KEY. Uses Bootstarp for full Mobile Responsive UI experience"
        github_link="https://github.com/dev-Aravind/Encrypted-QRCode-Generator"
        website_link="https://qrcode-gen-node.herokuapp.com/"
        screenshot_link="/QR Code.png"
        Technologies="NodeJS,Express,Bootstrap"
      />
    </div>
  );
}

export default Works;

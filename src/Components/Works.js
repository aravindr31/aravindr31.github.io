import React, { useState } from "react";
import "../Stylesheets/Works.css";
import Project_Square from "./Project_Square";
import Work_Projects from "./Work_Projects";
import amazon from "../assets/amazon.png"
import netflix from "../assets/netflix.png"
import spotify from "../assets/spotify.png"

function Works() {
  const [hide, setHide] = useState(true);
  const handleClick = () => {
    setHide(!hide);
  };
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
        discription="A perfectly etched web app clone of the Offical Spotify Web Player. Ability to Play&Pause, Search Songs and even control the songs on linked devices. Secured Login with Spotify's own Authentication System."
        github_link="https://github.com/dev-Aravind/Spotify-ReactApp"
        website_link="https://spotify-react-player.surge.sh/"
        screenshot_link="/src/assests/spotify.png"
        Technologies="React,Node JS,Express,Spotify Web API"
      />
      <Work_Projects
        project_interface_direction="work_projects_reverse"
        project_name="Amazon Clone"
        discription="A clean build of Amazon Shopping Website with React and Node JS. Have full Ecommerce Functionality along with Integrated Stripe Payment System"
        github_link="https://github.com/dev-Aravind/Amazon-clone"
        website_link="https://amazonclone-react.surge.sh/"
        screenshot_link={amazon}
        Technologies="React,Node JS,MongoDB,Stripe API"
      />
      <Work_Projects
        project_interface_direction="work_projects"
        project_name="NetFlix Clone"
        discription="A clean build of Netflix UI using React fully Mobile Responsive. Uses Google Firebase for deployment.Uses Realtime data form TMDB API "
        github_link="https://github.com/dev-Aravind/Netflix-clone"
        website_link="https://netflix-clone-3830c.web.app/"
        screenshot_link={netflix}
        Technologies="React, Firebase, TMDB API"
      />
      {!hide ? (
        <div className="work_show_more">
          <Project_Square
            project_name="Google Docs Clone"
            discription="Customised Docs Clone with collabarate typeing Feature.Build using React,Node JS and Mongo DB to store and retrive documents."
            github_link="https://github.com/dev-Aravind/google-doc-mern"
            website_link="{spotify}"
            Technologies="React,Node JS,Socket IO,MongoDB"
          />

          <Project_Square
            project_name="Dropbox Clone"
            discription="A simple Dropbox Clone build using React and Firebase. Include basic Drive features like upload and saving files, creating Folders ...   "
            github_link="https://github.com/dev-Aravind/dropbox-clone"
            website_link="https://dropbox-clone-313609.web.app/"
            Technologies="React,Firebase"
          />
          <Project_Square
            project_name="DOP Agent Automator"
            discription="A feature packed web interface for MPKBY agents in India . Integrated a Python Selenium web automater with Node JS"
            github_link="https://github.com/dev-Aravind/DOP-Agent-Automator"
            Technologies="Handlebars,Node JS,Mongo DB,Python"
          />
          <Project_Square
            project_name="Encrypted QR Code Generator"
            discription="A QR code generator with an extra level of security encryption. User defined ENCRYPTION KEY for encrypting and decrypting url."
            github_link="https://github.com/dev-Aravind/Encrypted-QRCode-Generator"
            website_link="https://qrcode-gen-node.herokuapp.com/"
            Technologies="Node JS,Socket IO,Mongo DB,BootStrap"
          />
          <Project_Square
            project_name="Google Map Clone"
            discription="Google Map Clone Made with Mapbox API"
            github_link="https://github.com/dev-Aravind/Google-Map-clone"
            website_link="https://dev-aravind.github.io/Google-Map-clone/"
            Technologies="Javascript,Mapbox API"
          />
          <Project_Square
            project_name="URL Shortner"
            discription="Custom made URL Shortner with Node JS and ShortId module"
            github_link="https://github.com/dev-Aravind/URL_shortner"
            Technologies="Node JS,,HandleBars,Mongo DB"
          />
        </div>
      ) : (
        <></>
      )}
      <div className="work_tooglebutton_div">
        <button className="work_toogleshow_button" onClick={handleClick}>
          {hide ? "Show More" : "Show Less"}
        </button>
      </div>
    </div>
  );
}

export default Works;

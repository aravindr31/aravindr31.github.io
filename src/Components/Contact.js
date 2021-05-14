import React from "react";
import "../Stylesheets/Contact.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function Contact() {
  
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

  const classes = useStyles();


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
            If you want to contact me or need to talk about a project or even just a
            Hi,
            <br />
            just click below to reach me.
          </h4>
          <br/>
          <div className="contact_content_middile">
          <Button
          variant="outlined"
          className={classes.button}
          href="mailto:aravindr597@gmail.com"
        >
          Say Hello
        </Button>
        </div>
          <br />
          <h2>Let's get Social</h2>
<br/>
          <h4>If you prefer social platforms, feel free to reach out through any platforms below:</h4>
        </div>
        <div className="contact_content_bottom">
        <a href="https://twitter.com/aravind___r"><TwitterIcon className="contact_content_bottom_icon" /></a> 
        <a href="https://www.instagram.com/this_is_me__aravind/"><InstagramIcon className="contact_content_bottom_icon" /></a>  
        <a href="https://www.linkedin.com/in/aravind-r-954451118/"><LinkedInIcon className="contact_content_bottom_icon" /></a>  
        </div>
      </div>
    </div>
  );
}

export default Contact;

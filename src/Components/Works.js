import React from "react";
import "../Stylesheets/Works.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkIcon from "@material-ui/icons/Link";
import Work_Projects from "./Work_Projects";
function Works() {
  return (
    <div className="work">
      <div className="work_heading">
        <h1>
          .my internet <span className="span_color">beings</span>
        </h1>
      </div>
      {/* <div className="work_items"> */}
      <Work_Projects
        project_interface_direction="work_projects"
        project_name="Spotify Web Player Clone"
        discription="A nicer look at your GitHub profile and repository stats with data
              visualizations of your top languages and stars. Sort through your
              top repos by number of stars, forks, and size."
        github_link=""
        website_link=""
        screenshot_link="/spotify.png"
      />
      <Work_Projects
        project_interface_direction="work_projects_reverse"
        project_name="Spotify Clone"
        discription="A nicer look at your GitHub profile and repository stats with data
              visualizations of your top languages and stars. Sort through your
              top repos by number of stars, forks, and size."
        github_link=""
        website_link=""
        screenshot_link="/spotify.png"
      />
      <Work_Projects
        project_interface_direction="work_projects"
        project_name="Spotify Clone"
        discription="A nicer look at your GitHub profile and repository stats with data
              visualizations of your top languages and stars. Sort through your
              top repos by number of stars, forks, and size."
        github_link=""
        website_link=""
        screenshot_link="/spotify.png"
      />

      {/* </div> */}
    </div>
  );
}

export default Works;

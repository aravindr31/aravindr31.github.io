import React from "react";
import "../Stylesheets/Works.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkIcon from "@material-ui/icons/Link";
import { TableChart } from "@material-ui/icons";
function Work_Projects({
  project_interface_direction,
  project_name,
  discription,
  github_link,
  website_link,
  screenshot_link,
  Technologies,
}) {
  const Technology = Technologies.split(",");
  return (
    <div className={project_interface_direction}>
      <div className="work_projects_text">
        <div className="work_projects_text_heading">
          <h1>{project_name}</h1>
          <br />
        </div>
        <h4>{discription}</h4>
        <br />
        <div className="work_projects_text_techused">
          {Technology.map((Tech) => (
            <h4>{Tech}</h4>
          ))}
        </div>
        <div className="work_projects_text_icons">
          <a href={github_link}>
            <GitHubIcon className="work_projects_text_icons_individual" />
          </a>
          {website_link ? (
            <a href={website_link}>
              <LinkIcon className="work_projects_text_icons_individual" />
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="work_projects_image">
        <img src={screenshot_link} alt="" />
      </div>
    </div>
  );
}

export default Work_Projects;

import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkIcon from "@material-ui/icons/Link";
import "../Stylesheets/Project_Square.css";

function Project_Square({
  project_name,
  discription,
  github_link,
  website_link,
  Technologies,
}) {
  const Technology = Technologies?.split(",");

  return (
    <div className="project_square">
      <div className="project_square_top">
        {github_link ? (
          <a href={github_link}>
            <GitHubIcon className="project_square_top_link" />
          </a>
        ) : (
          <></>
        )}
        {website_link ? (
          <a href={website_link}>
            <LinkIcon className="project_square_top_link" />
          </a>
        ) : (
          <></>
        )}
      </div>
      <div className="project_square_middile">
        <div className="project_square_middile_title">
          <h3>{project_name}</h3>
        </div>
        <div className="project_square_middile_discription">
          <p>{discription}</p>
        </div>
      </div>
      <div className="project_square_bottom">
        <div className="project_square_bottom_technologies">
          {Technology?.map((tech) => (
            <p>{tech}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project_Square;

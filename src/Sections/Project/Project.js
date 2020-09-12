import React from "react";
import "./Project.css";
import { Button } from "@material-ui/core";

function Project({
  projectScreenshot,
  projectName,
  projectDescription,
  projectStack,
  projectLink,
}) {
  return (
    <div className="project">
      <div className="project__content">
        <div className="project__left">
          <h1>{projectName}</h1>
          <h5>{projectStack}</h5>
          <p>{projectDescription}</p>
          <Button
            target="_blank"
            href={projectLink}
            variant="outlined"
            rel="noopener noreferrer"
          >
            Project Link
          </Button>
        </div>
        <div className="project__right">
          <a target="_blank" href={projectLink} rel="noopener noreferrer">
            <img src={projectScreenshot} alt={projectName} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;

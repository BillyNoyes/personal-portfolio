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
          <Button href={projectLink} variant="outlined">
            Project Link
          </Button>
        </div>
        <div className="project__right">
          <a href={projectLink}>
            <img src={projectScreenshot} alt={projectName} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;

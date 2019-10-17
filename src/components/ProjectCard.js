import React, { useState } from "react";
import { Card, Button, Icon } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import "./ProjectCardStyle.css";

export default function ProjectCard({
  name,
  desc,
  frontEndTech,
  backEndTech,
  githubLink,
  herokuLink,
  backgroundImage,
  hoverImage
}) {
  const [isHovered, setHovered] = useState(false);

  return (
    <Card
      fluid
      className="ui container center aligned card-container"
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ marginBottom: "100px" }}
    >
      <Card.Content header={name} className="card-content" />
      <img
        alt=""
        src={isHovered ? hoverImage : backgroundImage}
        style={{ height: "90%", objectFit: "cover" }}
      />
      <div className={isHovered ? "overlay overlay-show" : "overlay"}>
        <h4> {desc} </h4>
        <div style={{ paddingTop: "20px" }}>
          <p>Frontend Tech</p>
          <div>
            {frontEndTech.map(x => (
              <Button
                inverted
                color="blue"
                active
                style={{
                  marginLeft: "10px",
                  marginRight: "10px",
                  marginBottom: "10px",
                  cursor: "default"
                }}
                content={x}
              ></Button>
            ))}
          </div>
        </div>
        <div style={{ marginTop: "10px" }}>
          <p>Backend Tech</p>
          <div>
            {backEndTech.map(x => (
              <Button
                inverted
                color="blue"
                active
                style={{
                  marginLeft: "10px",
                  marginRight: "10px",
                  marginBottom: "10px",
                  cursor: "default"
                }}
                content={x}
              ></Button>
            ))}
          </div>
        </div>
        {herokuLink && githubLink && (
          <div style={{ marginTop: "40px" }}>
            <Button inverted active style={{ marginRight: "10px" }}>
              <a rel="noopener noreferrer" href={githubLink} target="_blank">
                View me on Github <Icon name="external alternate"></Icon>
              </a>
            </Button>
            <Button inverted active>
              <a rel="noopener noreferrer" href={herokuLink} target="_blank">
                Try me on Heroku <Icon name="external alternate"></Icon>
              </a>
            </Button>
            <p className="small-footnote">
              * It may take a minute for the page to load on Heroku. If you
              experience any issues, please try refreshing the page.
            </p>
          </div>
        )}
      </div>
    </Card>
  );
}

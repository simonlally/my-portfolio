import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import "./ProjectCardStyle.css";

const imgSrc =
  "https://holoweb.net/~liam/pictures/r/1C/img_8179-path-to-beach-q100-500x200.jpg";

export default function ProjectCard({
  name,
  desc,
  frontEndTech,
  backEndTech,
  githubLink,
  herokuLink,
  backgroundImage
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
        src={
          isHovered
            ? "https://blog.bannersnack.com/wp-content/uploads/2018/05/Animations-bannersnack.gif"
            : backgroundImage
        }
        style={{ height: "90%", objectFit: "cover" }}
      />
      <div
        className="ui image"
        className={isHovered ? "overlay overlay-show" : "overlay"}
      >
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
                  cursor: "default"
                }}
                content={x}
              ></Button>
            ))}
          </div>
        </div>
        <div style={{ marginTop: "40px" }}>
          <Button inverted style={{ marginRight: "10px" }}>
            <a rel="noopener noreferrer" href={githubLink} target="_blank">
              View me on github
            </a>
          </Button>
          <Button inverted>
            <a rel="noopener noreferrer" href={herokuLink} target="_blank">
              Try me on Heroku
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
}

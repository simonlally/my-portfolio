import React, { useState } from "react";
import { Card, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

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
  herokuLink
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
      <Card.Content fluid header={name} className="card-content" />
      <img
        src={
          isHovered
            ? "https://blog.bannersnack.com/wp-content/uploads/2018/05/Animations-bannersnack.gif"
            : imgSrc
        }
        style={{ height: "90%" }}
      />
      <div
        className="ui image"
        className={isHovered ? "overlay overlay-show" : "overlay"}
      >
        <h4> {desc} </h4>
        <div style={{ paddingTop: "20px" }}>
          <p> front end tech</p>
          <div>
            {frontEndTech.map(x => (
              <Button
                inverted
                color="olive"
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
          <p> back end tech </p>
          <div>
            {backEndTech.map(x => (
              <Button
                inverted
                color="olive"
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
          <Button component={Link} to={githubLink}>
            View me on github
          </Button>
          <Button component={Link} to={herokuLink}>
            View me live on Heroku
          </Button>
        </div>
      </div>
    </Card>
  );
}

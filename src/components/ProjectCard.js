import React, { useState } from "react";
import { Card, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";

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
      className="ui container center aligned"
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Card.Content fluid header={name} />
      {!isHovered ? (
        <div className="ui image">
          <img src={imgSrc} />
        </div>
      ) : (
        <div className="ui image">
          <img src={imgSrc} />
          <div
            style={{
              backgroundColor: "grey",
              position: "absolute",
              color: "white",
              bottom: 0,
              height: "100%",
              opacity: 0.8,
              textAlign: "center",
              display: "block",
              alignItems: "center",
              justifyContent: "center",
              width: "100%"
            }}
          >
            <div style={{ paddingTop: "100px" }}>
              <h1> {desc} </h1>
            </div>
            <div style={{ paddingTop: "20px" }}>
              <h3> front end tech</h3>
              <div>
                {frontEndTech.map(x => (
                  <Button
                    style={{ marginLeft: "10px", marginRight: "10px" }}
                    content={x}
                  ></Button>
                ))}
              </div>
            </div>
            <div style={{ paddingTop: "10px" }}>
              <h3> back end tech </h3>
              <div>
                {backEndTech.map(x => (
                  <Button
                    style={{ marginLeft: "10px", marginRight: "10px" }}
                    content={x}
                  ></Button>
                ))}
              </div>
            </div>
            <div style={{ margin: "20px" }}>
              <Button component={Link} to={githubLink}>
                View me on github
              </Button>
              <Button component={Link} to={herokuLink}>
                View me live on Heroku
              </Button>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}

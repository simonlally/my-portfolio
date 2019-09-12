import React, { useState } from "react";
import { Card, Icon, Button, Image } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";

const imgSrc =
  "https://holoweb.net/~liam/pictures/r/1C/img_8179-path-to-beach-q100-500x200.jpg";

export default function ProjectCard({ name, desc }) {
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
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%"
            }}
          >
            {" "}
            {desc}
          </div>
        </div>
      )}
    </Card>
  );
}

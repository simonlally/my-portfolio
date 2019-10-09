import React from "react";
import ImageCircle from "../components/ImageCircle";
import { Card, Container } from "semantic-ui-react";

import me from "../assets/me.jpeg";
import background from "../assets/backgroundskyblue.jpg";

export default function CardProfile({ name, about, status }) {
  return (
    <Container textAlign="center" style={{ marginBottom: "80px" }}>
      <Card
        fluid
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          padding: "50px"
        }}
      >
        <Card.Content>
          <ImageCircle imgSource={me} style={{ marginBottom: "50px" }} />
          <Card.Header style={{ color: "white" }}>{name}</Card.Header>
          <Card.Meta style={{ color: "white" }}>
            <strong>{about}</strong>
          </Card.Meta>
          <Card.Description style={{ color: "white", marginTop: "20px" }}>
            <p>Hello! I'm Simon Lally and I'm a NYC based software engineer.</p>

            <p style={{ maxWidth: "600px", margin: "0 auto" }}>
              I have a diverse set of skills, ranging from full stack web
              development, mobile development, to system design. I'm always
              learning and trying something new; a current passion project is
              Linux sytems administration
              <a
                href="https://www.quora.com/What-is-meant-by-btw-I-use-arch"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "coral" }}
              >
                &nbsp;(I use Arch btw).&nbsp;
              </a>
              Please check out some of my projects below.
            </p>
          </Card.Description>
          <Card.Description style={{ color: "white" }}>
            {status}
          </Card.Description>
        </Card.Content>
      </Card>
    </Container>
  );
}

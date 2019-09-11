import React from "react";
import ImageCircle from "../components/ImageCircle";
import { Card, Container, Icon } from "semantic-ui-react";

const imgSource =
  "https://react.semantic-ui.com/images/wireframe/square-image.png";

export default function CardProfile() {
  return (
    <Container textAlign="center">
      <Card fluid>
        <Card.Content>
          <ImageCircle imgSource={imgSource} />
          <Card.Header>Simon Lally</Card.Header>
          <Card.Meta>Full Stack Developer</Card.Meta>
          <Card.Description>I'm Hirable!</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="github" />
          </a>
        </Card.Content>
      </Card>
    </Container>
  );
}

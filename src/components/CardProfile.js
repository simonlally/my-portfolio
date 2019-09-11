import React from "react";
import ImageCircle from "../components/ImageCircle";
import { Card, Container, Icon } from "semantic-ui-react";

const imgSource =
  "https://react.semantic-ui.com/images/wireframe/square-image.png";

export default function CardProfile({ name, about, status }) {
  return (
    <Container textAlign="center">
      <Card fluid>
        <Card.Content>
          <ImageCircle imgSource={imgSource} />
          <Card.Header>{name}</Card.Header>
          <Card.Meta>{about}</Card.Meta>
          <Card.Description>{status}</Card.Description>
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

import React from "react";
import { Card, Image } from "semantic-ui-react";

export default function CardProfile() {
  return (
    <Card>
      <Image
        src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>Simon Lally</Card.Header>
      </Card.Content>
    </Card>
  );
}

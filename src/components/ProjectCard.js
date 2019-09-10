import React from "react";
import { Card, Icon, Button } from "semantic-ui-react";

export default function ProjectCard({ name, desc }) {
  return (
    <Card>
      <Card.Content header={name} />
      <Card.Content description={desc} />
      <Card.Content extra>
        <Button>
          <Icon name="github" />
        </Button>
      </Card.Content>
    </Card>
  );
}

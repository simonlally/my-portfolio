import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Menu, Icon } from "semantic-ui-react";
import { Event } from "../tracking/index";

export default function MenuBar() {
  function onClick() {
    Event("User", "Clicked on github button");
  }

  return (
    <Menu fluid widths={3}>
      <Menu.Item name="linkedin">
        <a
          rel="noopener noreferrer"
          href={"https://www.linkedin.com/in/simonlallyshultz/"}
          target="_blank"
        >
          <Icon name="linkedin" />
        </a>
      </Menu.Item>
      <Menu.Item name="github">
        <a
          rel="noopener noreferrer"
          href={"https://github.com/simonlally"}
          target="_blank"
          onClick={onClick}
        >
          <Icon name="github" />
        </a>
      </Menu.Item>
      <Menu.Item name="email me">
        <a
          rel="noopener noreferrer"
          href={"mailto:simonlallydev@gmail.com"}
          target="_blank"
        >
          <Icon name="mail" />
        </a>
      </Menu.Item>
    </Menu>
  );
}

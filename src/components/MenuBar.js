import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function MenuBar() {
  function handleClick() {}

  return (
    <Menu pointing secondary>
      <Menu.Item name="Portfolio" as={Link} to="/" />
      <Menu.Menu position="right">
        <Menu.Item name="Resume" as={Link} to="/resume" />
      </Menu.Menu>
    </Menu>
  );
}

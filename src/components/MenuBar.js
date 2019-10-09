import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const menuItems = [
  { key: "linkedIn", name: "LinkedIn" },
  { key: "github", name: "Github" },
  { key: "email", name: "Email Me" }
];

export default function MenuBar() {
  return <Menu items={menuItems} />;
}

{
  /* <Menu>
<Menu.Item name="Portfolio" as={Link} to="/" />

<Menu.Menu>
  <Menu.Item name="Resume" as={Link} to="/resume" />
</Menu.Menu>
</Menu> */
}

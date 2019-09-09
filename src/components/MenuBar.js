import React, { useState}  from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function MenuBar() {

    const [isClicked] = useState(false);

    const handleClick = (e) => 

  return (
    <Menu pointing secondary>
      <Menu.Item name="Portfolio" />
      <Menu.Item name ="Resume"/>
    </Menu>
  );
}

import React from "react";
import { Image } from "semantic-ui-react";

const ImageCircle = ({ imgSource }) => (
  <Image
    src={imgSource}
    // src="https://react.semantic-ui.img/images/wireframe/square-image.png"
    size="small"
    circular
    style={{ marginBottom: "20px" }}
  />
);

export default ImageCircle;

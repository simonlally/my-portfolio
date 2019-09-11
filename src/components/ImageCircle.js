import React from "react";
import { Image } from "semantic-ui-react";

const ImageCircle = ({ imgSource }) => (
  <Image src={imgSource} size="medium" circular />
);

export default ImageCircle;

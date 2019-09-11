import React, { useState } from "react";
import { Card, Icon, Button, Image } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import { relative } from "path";

const imgSrc =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAIVBMVEX88OS1qJxKJwloUT26raKOeGSlkoLw49bGt6jWxrbk1ceP97iTAAAD4ElEQVRoge1a7bKrIAw8IR+i7//ANwmtVWshoNO5P7rtdM4pyppNCAH69/fDDz/cAmCZzlsyy3IPBybFfNIwecstLJxQOKUTW0oLfrCyBzkhUNa+3lokIRFx4sscU0pCABmTHFqWlEBbAFO+SqIPmgG8r4Nb0NmB5LJgi4pVICnxFpiYSgu/GdkJXrtS8fd4sgOcRkUcs/r22RWBIDIwooh+wKvhoil6+/q82qv2n8X6Z2Xb4JJXlo0m7hej5PXjHlNeHnn05uFU/to00BVTJjeEmrBRRAPdz/Zkktg1UrC99y97F7hX7K6lK49puKprUYc0YWpCPCGIXtml2myDTe8RMBIsL/tIj4FY/isvG/n+KMzQ65rFH9JS4wvJhwftvrP0YpcOeMUHoqDQgSQD8oE4Eah13VEs5W6mTAcSI9CwTmlLrEmaLLXpPxzXS0xyV9kz0+ahXSpz1M46cg+6n3psmSx+rb9dhxpyHg/MW2Jxc4emSI1feMwXae3PUjGbQPj6sqTQnN8mnDbymn+zpBLFGgglrQiUmHVN8ZFg9GG652Eu815JTQ+Rnt8UA9GtkVcSw95pZdlMJI+cCLRPlp6Ut99xgj4SOeTfU+xZdYLuii13e5vkgF7Xzzu1guh1/cbtPejSazpMu1FTuCdLQsTtJ+jSa1ek9ADjNf4y4nZHx1AZVcvr4igJjsUWeMoO6rWsSa+fJKxXKKV8IAnrZTPJKCiYiqdqbDVsjOpViS3LTvsy+OSKkF6V2PKpWLgSexTTq6oW+XqrKmdIL6qpVWpjqQgWy/eVvEWupBoiWFEMU8Qln7VQl4CVMbWUQIH5cbFy92MH7FUi1KabyNqu4hKD+X2zhD8jCThFGlOJ4G4JfwZs1qutnGKVHtcvaWbiwOxu64lqe3OmH6qF3kganqfnptAFEmh5frDg2qOVI+8gaeXICYequgO4PuYHS8c9WuFVnxXjJNVsP6fGQAuRNBJLHi9UNpD6QMnfsGS4QO0h+Yolt/iEGj4ZXzR8naRVFd2RVpoTypVieyVpTY23pPpW5XVhbbIa0ixXqmVXmKRVeF13SqCEvMEp7X3Cy+VKqKy/qlek4P6Da6YEjwTHtwrAT4tCO2tzGti1W0nezyM/CjbMcXayeg5OteVahUK1im9z2+5+9/YK6VKyayud/CSoui2w694uteVR3x735Os2CWzgKYEwiJ8OdZ80z/I8fK2fzElZSOojjR1mZ1VAqxdG5FMgl3MbMW3Hf2BAfvRTh/264NLZ72KHGmme53WdKP425DzPkx3mfPgFRRx22NToAZCvcWiY3fAzix/+P/wD5mYkRVw+8QcAAAAASUVORK5CYII=";

export default function ProjectCard({ name, desc }) {
  const [isHovered, setHovered] = useState(false);
  return (
    <Card
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Card.Content header={name} />
      {!isHovered ? (
        <div className="ui image">
          <img src={imgSrc} />
        </div>
      ) : (
        <div className="ui image">
          <img src={imgSrc} />
          <div
            style={{
              backgroundColor: "grey",
              position: "absolute",
              bottom: 0,
              height: "100%",
              opacity: 0.6,
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {" "}
            {desc}
          </div>
        </div>
      )}
    </Card>
  );
}

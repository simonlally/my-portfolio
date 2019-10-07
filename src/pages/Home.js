import React from "react";

import CardProfile from "../components/CardProfile";
import ProjectCard from "../components/ProjectCard";

const howlerFront = ["React", "Semantic-UI", "GraphQL"];
const howlerBack = ["Node", "Express", "GraphQL", "Mongoose", "MongoDB"];

const pkgFront = ["React", "Material-UI", "Firebase"];
const pkgBack = ["Node", "Express", "Firebase"];

const combFront = ["Vue"];
const combBack = ["Ruby on Rails"];

export default function Home() {
  return (
    <div>
      <CardProfile
        name="Simon Lally"
        about="Full Stack Developer"
        status="I'm Hirable!"
      />
      <ProjectCard
        name="Howler"
        desc="social media site built in: Mongo Express React Node GraphQL"
        frontEndTech={howlerFront}
        backEndTech={howlerBack}
        githubLink={"https://github.com/simonlally/howler"}
        herokuLink={"https://github.com/simonlally/mongo-graphql/"}
      />
      <ProjectCard
        name="Package Management System"
        desc="system design to track incoming packages for an appartment building or complex"
        frontEndTech={pkgFront}
        backEndTech={pkgBack}
        githubLink={"https://github.com/simonlally/pkg-management-react"}
        herokuLink={"https://github.com/simonlally/pkg-management-firebase"}
      />
      <ProjectCard
        name="Combinations"
        desc="coin combinations challenge, vue frontend rails backend"
        frontEndTech={combFront}
        backEndTech={combBack}
        githubLink={"https://github.com/simonlally/combinations"}
      />
    </div>
  );
}

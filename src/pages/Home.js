import React from "react";

import CardProfile from "../components/CardProfile";
import ProjectCard from "../components/ProjectCard";

import howler from "../assets/howler-background.png";
import packageManagement from "../assets/packagems-background.png";

import fodmap from "../assets/fodmapbanner.jpg";

const howlerFront = ["React", "Semantic-UI", "Apollo"];
const howlerBack = ["Node", "Express", "GraphQL", "Mongoose", "MongoDB"];

const pkgFront = ["React", "Material-UI", "Firebase Functions"];
const pkgBack = [
  "Node",
  "Express",
  "Serverless API",
  "Firebase NoSQL Database"
];

const combFront = ["Vue"];
const combBack = ["Ruby on Rails", "Webpacker", "Node"];

const fodmapFront = ["Java", "XML", "Android SDK"];
const fodmapBack = ["Swift", "Xcode", "iOS SDK"];

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
        desc="A social media application where users can post their howls for other users to like and comment on.  Create an account now and begin howling!"
        frontEndTech={howlerFront}
        backEndTech={howlerBack}
        githubLink="https://github.com/simonlally/howler"
        herokuLink="https://howler-react.herokuapp.com/"
        backgroundImage={howler}
      />
      <ProjectCard
        name="Package Management System"
        desc="All in one system to track incoming packages for frontdesk staff and building tenants.  Frontdesk staff may add packages and tenants may view those packages in real time.  Credentials for staff and tenant can be found on the github link below!"
        frontEndTech={pkgFront}
        backEndTech={pkgBack}
        githubLink="https://github.com/simonlally/pkg-management-react"
        herokuLink="https://package-management-system.herokuapp.com/"
        backgroundImage={packageManagement}
      />
      <ProjectCard
        name="Combinations"
        desc="Outputs a list of all disctinct currency combinations that make up a target value when given the name of each denomination and the number required of that denomation to reach a target sum.  For example: given four types of currency: quarters, dimes, nickels and pennies and how the quantity of each denomination that equals the target value of $1. This input will print all coin combinations equalling up to the $1 target"
        frontEndTech={combFront}
        backEndTech={combBack}
        githubLink="https://github.com/simonlally/combinations"
        herokuLink="https://combinations.herokuapp.com"
      />
      <ProjectCard
        name="FODMAP Directory (iOS and Android)"
        desc="Reference app for low FODMAP IBS"
        frontEndTech={fodmapFront}
        backEndTech={fodmapBack}
        backgroundImage={fodmap}
      />
    </div>
  );
}

import React from "react";

import CardProfile from "../components/CardProfile";
import ProjectCard from "../components/ProjectCard";

import howler from "../assets/howler-background.png";
import howlerGif from "../assets/howler.gif";
import packageManagement from "../assets/packagems-background.png";
import packageManagementGif from "../assets/packagems.gif";
import combinations from "../assets/combinations.png";
import combinationsGif from "../assets/combinationsGif.gif";

import fodmap from "../assets/fodmapbanner.jpg";

const howlerFront = ["React", "Semantic-UI", "Apollo GraphQL"];
const howlerBack = ["Node", "Express", "Apollo GraphQL", "Mongoose", "MongoDB"];

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
        status="I'm hireable!"
      />
      <ProjectCard
        name="Howler"
        desc="A social media application where users can post their howls for other users to like and comment on.  Create an account now and begin howling!"
        frontEndTech={howlerFront}
        backEndTech={howlerBack}
        githubLink="https://github.com/simonlally/howler"
        herokuLink="https://howler-react.herokuapp.com/"
        backgroundImage={howler}
        hoverImage={howlerGif}
      />
      <ProjectCard
        name="Package Management System"
        desc="All in one system to track incoming packages for frontdesk staff and building tenants.  Frontdesk staff may add packages and tenants may view those packages in real time.  Credentials for staff and tenant can be found on the github link below!"
        frontEndTech={pkgFront}
        backEndTech={pkgBack}
        githubLink="https://github.com/simonlally/pkg-management-react"
        herokuLink="https://package-management-system.herokuapp.com/"
        backgroundImage={packageManagement}
        hoverImage={packageManagementGif}
      />
      <ProjectCard
        name="Combinations"
        desc="Outputs a list of all disctinct currency combinations that make up a target value when given the denominations and the number required of that denomation to reach a target sum.  ie: given four types of currency (quarters, dimes, nickels and pennies) and their denominations and target sum, this outputs all coin combinations equalling up to the $1 target"
        frontEndTech={combFront}
        backEndTech={combBack}
        githubLink="https://github.com/simonlally/combinations"
        herokuLink="https://combinations.herokuapp.com"
        backgroundImage={combinations}
        hoverImage={combinationsGif}
      />
      <ProjectCard
        name="FODMAP Directory (iOS and Android)"
        desc="A mobile app for iOS and Android that served as a reference for users of the low FODMAP diet.  Users could easily scroll the content or search the app to check if a specific item may upset or aggravate their condition further."
        frontEndTech={fodmapFront}
        backEndTech={fodmapBack}
        backgroundImage={fodmap}
        hoverImage={fodmap}
      />
    </div>
  );
}

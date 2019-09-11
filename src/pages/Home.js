import React from "react";

import CardProfile from "../components/CardProfile";
import ProjectCard from "../components/ProjectCard";

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
      />
      <ProjectCard
        name="Package Management System"
        desc="system design to track incoming packages for an appartment building or complex"
      />
      <ProjectCard
        name="Combinations"
        desc="coin combinations challenge, vue frontend rails backend"
      />
    </div>
  );
}

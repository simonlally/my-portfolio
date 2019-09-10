import React from "react";
import CardProfile from "../components/CardProfile";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <div>
      <CardProfile />
      <ProjectCard
        name="Howler"
        desc="social media site built in: Mongo Express React Node GraphQL"
      />
    </div>
  );
}

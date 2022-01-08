import React from "react";
import "./home.style.css";

import Hero from "../../components/hero/hero.component";
import Illustration from "../../components/illustration/illustration.component";
import Github from "../../components/github/github.component";

function HomePage() {
  return (
    <div className="home-container">
      <Hero />
      <Illustration />
      <Github />
    </div>
  );
}

export default HomePage;

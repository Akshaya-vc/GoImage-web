import React from "react";
import "./hero.styles.css";
import Button from "@mui/material/Button";

import Frame from "../../assets/home/home-frame.svg";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <div className="hero-heading">Handle images like a pro!</div>
        <div className="hero-subtext">
          Handling and managing images is messy. We make it easy for you and
          help you in rapid prototyping.
        </div>

        <div className="hero-options">
          <Button variant="contained" className="nav-option">
            Get started
          </Button>
          <Button variant="outlined" className="nav-option">
            Learn more
          </Button>
        </div>
      </div>

      <img src={Frame} alt="frame" className="hero-right" />
    </div>
  );
}

export default Hero;

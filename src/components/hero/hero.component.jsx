import React, { useEffect } from "react";
import "./hero.styles.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Button from "@mui/material/Button";

import Frame from "../../assets/home/home-frame.svg";

function Hero() {
  useEffect(() => {
    Aos.init({ duration: 2800 });
  }, []);
  return (
    <div className="hero-container">
      <div className="hero-left" data-aos="fade-up">
        <div className="hero-heading">Handle images like a pro!</div>
        <div className="hero-subtext">
          Handling and managing images in a website is messy. We make it easy
          for you and help you in rapid prototyping.
        </div>

        <div className="hero-options">
          <a href="#illustration-id">
            <Button variant="contained" className="nav-option">
              Get started
            </Button>
          </a>
          <Link to="/host">
            <Button variant="outlined" className="nav-option">
              Learn more
            </Button>
          </Link>
        </div>
      </div>

      <img
        src={Frame}
        data-aos="fade-left"
        alt="frame"
        className="hero-right"
      />
    </div>
  );
}

export default Hero;

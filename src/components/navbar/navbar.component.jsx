import React from "react";
import "./navbar.styles.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">Go Img</Link>
      </div>
      <div className="nav-right">
        <div className="nav-option">
          <Link to="/">Home</Link>
        </div>
        <Link to="/host">
          <Button variant="outlined" className="nav-option">
            Self host
          </Button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

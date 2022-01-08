import React from "react";
import "./navbar.styles.css";
import Button from "@mui/material/Button";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">Go img</div>
      <div className="nav-right">
        <div className="nav-option">Home</div>
        <Button variant="outlined" className="nav-option">
          Self host
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;

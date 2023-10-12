import React from "react";
import "./Navigation.css";
import logo from "../../../Images/logo.png";

export default function Navigation() {
  return (
    <div className="Navigation">
      <div className="logoContainer">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar">
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

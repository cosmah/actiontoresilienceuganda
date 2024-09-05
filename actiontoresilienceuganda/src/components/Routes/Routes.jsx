import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Routes.css";
import logo from "../../assets/logo (2).png";

const RoutingComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav-bar">
      <div className="logo-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Action to Resilience Uganda" />
          </Link>
        </div>
        <div className="logo-text">
          <h4>Action to Resilience Uganda</h4>
          <p>Identify. Transform. Sustain</p>
        </div>
      </div>
      <ul className={`nav-links ${isOpen ? "show-menu" : ""}`}>
        <div className="close" onClick={toggleMenu}>
          X
        </div>
        <li>
          <Link to="/">
            <span>Home</span>
          </Link>
        </li>
        <li>|</li>
        <li>
          <Link to="/about">
            <span>About Us</span>
          </Link>
        </li>
        <li>|</li>
        <li>
          <Link to="/services">
            <span>What We Do</span>
          </Link>
        </li>
        <li>|</li>
        <li>
          <Link to="/support">
            <span>Support Us</span>
          </Link>
        </li>
        <li>|</li>
        <li>
          <Link to="/contact">
            <span>Contact Us</span>
          </Link>
        </li>
        <li className="donate-button">
          <Link to={"/donate"}>
            <button className="btn">Donate</button>
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default RoutingComponent;
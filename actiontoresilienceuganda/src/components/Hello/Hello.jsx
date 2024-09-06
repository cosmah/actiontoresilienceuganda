import React from "react";
import "./Hello.css";

const Hello = (props) => {
  return (
    <div className="hello-container">
      <h1 className="hello-title">Action to Resilience Uganda</h1>
      <p className="hello-motto">Identify, Transform, Sustain</p>
      <div className="wave-container">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>
    </div>
  );
};

export default Hello;

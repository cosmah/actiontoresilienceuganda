import React from "react";
import "./About.css";
import { useNavigate } from "react-router-dom";
import History from "../history/History";

const AboutUs = () => {
  const navigate = useNavigate();

  const handleMoreInfoClick = () => {
    navigate("/whatwedo");
  };

  const handledonateClick = () => {
    navigate("/donate");
  };

  const handlecontactClick = () => {
    navigate("/contact");
  };

  return (
    <div>

    <History />

    <div className="container">
      <h1 className="main-title">About Action to Resilience Uganda</h1>

      <div className="card-container">
        <div className="card">
          <h2 className="card-title">Our Mission</h2>
          <p>
            ARU is out to transform and enrich communities with skills through
            community based advocacy programmes, health related services,
            environmental conservation to enable them live a fulfilling
            sustainable lives.
          </p>
        </div>

        <div className="card">
          <h2 className="card-title">Our Vision</h2>
          <p>
            Our vision is to building resilient communities that would respond
            to their own economic, health and livelihood challenges.
          </p>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Our Impact</h2>
        <ul className="impact-list">
          <li>
            Empowered over 1,000 individuals through skills training programs
          </li>
          <li>
            Implemented sustainable agriculture projects in 20 rural communities
          </li>
          <li>
            Provided access to clean water for 5,000 people through well-digging
            initiatives
          </li>
          <li>Established 10 community-led disaster preparedness committees</li>
        </ul>
      </div>

      <div className="section">
        <h2 className="section-title">Get Involved</h2>
        <p>
          Join us in our mission to build a more resilient Uganda. Whether
          through volunteering, donations, or partnerships, your support can
          make a significant difference in the lives of many.
        </p>
        <div className="button-container">
          <button onClick={handlecontactClick} className="cta-button">
            Contact Us
          </button>
          <button onClick={handleMoreInfoClick} className="cta-button">
            What We Do
          </button>
          <button onClick={handledonateClick} className="cta-button">
            Donate
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;

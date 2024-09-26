import React from "react";
import "./Joinus.css";
import EductionalWorkshop from "../../assets/8.jpeg";
import YouthEmpowerment from "../../assets/10.jpeg";
import Youth from "../../assets/13.jpeg";
import Livelihood from "../../assets/14.jpeg";
// import seminar from "../../assets/5.jpeg";

import { useNavigate } from "react-router-dom";

const ActivityCard = ({ src, alt, title }) => (
  <div className="activity-card">
    <img src={src} alt={alt} className="activity-image" />
    <div className="activity-overlay">
      <h3 className="activity-title">{title}</h3>
    </div>
  </div>
);

const Joinus = () => {

  const navigate = useNavigate();

  const handleMoreInfoClick = () => {
    navigate("/donate");
  };

  return (
    <div className="join-us-container">
      <div className="join-us-banner">
        <div className="banner-content">
          <h1 className="banner-title">Join Us in Making a Difference</h1>
          <p className="banner-message">
            At Action to Resilience Uganda, we're committed to building stronger
            communities and empowering individuals. Our diverse range of
            activities creates lasting impact and fosters positive change.
          </p>
          <button className="join-us-button" onClick={handleMoreInfoClick}>Donate</button>
        </div>
      </div>
      <div className="activities-section">
        <h2 className="activities-title">Our Activities</h2>
        <div className="activities-grid">
          <ActivityCard
            src={Youth}
            alt="Community gathering"
            title="Community Engagement"
          />
          <ActivityCard
            src={EductionalWorkshop}
            alt="Educational workshop"
            title="Educational Initiatives"
          />
          <ActivityCard
            src={YouthEmpowerment}
            alt="Community Outreach Programs"
            title="Community Outreach Programs"
          />
        </div>
        <div className="activities-grid">
          <ActivityCard
            src={Livelihood}
            alt="community empowerment"
            title="Community empowerment"
          />
          {/* <ActivityCard
            src={seminar}
            alt="Youth Health seminars"
            title="Youth Health seminars"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Joinus;

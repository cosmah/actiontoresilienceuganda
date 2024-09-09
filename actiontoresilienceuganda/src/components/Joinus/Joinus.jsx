import React from "react";
import "./Joinus.css";
import communityGatheringImage from "../../assets/11.jpeg";
import EductionalWorkshop from "../../assets/8.jpeg";
import YouthEmpowerment from "../../assets/10.jpeg";

const ActivityCard = ({ src, alt, title }) => (
  <div className="activity-card">
    <img src={src} alt={alt} className="activity-image" />
    <div className="activity-overlay">
      <h3 className="activity-title">{title}</h3>
    </div>
  </div>
);

const Joinus = () => {
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
          <button className="join-us-button">Donate</button>
        </div>
      </div>
      <div className="activities-section">
        <h2 className="activities-title">Our Activities</h2>
        <div className="activities-grid">
          <ActivityCard
            src={communityGatheringImage}
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
            alt="Youth empowerment"
            title="Youth Empowerment"
          />
        </div>
      </div>
    </div>
  );
};

export default Joinus;

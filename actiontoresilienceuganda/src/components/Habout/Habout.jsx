import React from "react";
import { useNavigate } from "react-router-dom";
import "./Habout.css";

const Habout = (props) => {
  const navigate = useNavigate();

  const handleMoreInfoClick = () => {
    navigate("/about");
  };

  return (
    <>
      <div className="Habout">
        <div className="content">
          <h1>About Action to Resilience Uganda</h1>
          <p>
            Action to Resilience Uganda (ARU) is a Community Based Organization
            formed with a purpose of achieving sustainable results from
            developmental activities and initiatives serving vulnerable
            communities in Uganda. This is done through Programs like Health,
            Livelihood, Gender mainstreaming, and Environmental Conservation.
          </p>
          <h3>Our Vision</h3>
          <p>
            Our vision is to building resilient communities that would respond
            to their own economic, health and livelihood challenges.
          </p>
          <h3>Our Mission</h3>
          <p>
            ARU is out to transform and enrich communities with skills through
            community based advocacy programmes, health related services,
            environmental conservation to enable them live a fulfilling
            sustainable lives.
          </p>
          
          
          <h3>Get Involved</h3>
          <p>
            Join us in making a difference! Whether you want to volunteer,
            donate, or partner with us, there are many ways to get involved and
            support our mission. Together, we can create a more resilient and
            prosperous Uganda.
          </p>
          <button onClick={handleMoreInfoClick}>More Information</button>
        </div>
      </div>
    </>
  );
};

export default Habout;

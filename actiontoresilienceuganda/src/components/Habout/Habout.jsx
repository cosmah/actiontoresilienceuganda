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
            Action to Resilience Uganda is a non-profit organization dedicated to empowering communities and enriching lives through sustainable development initiatives. Our mission is to identify, transform, and sustain resilient communities across Uganda.
          </p>
          <h3>Our Vision</h3>
          <p>
            We envision a Uganda where every community is resilient, self-sufficient, and thriving. Our goal is to create lasting positive impacts by addressing the root causes of poverty and vulnerability.
          </p>
          <h3>Our Mission</h3>
          <p>
            Our mission is to empower communities by providing them with the tools, resources, and knowledge they need to build sustainable livelihoods. We focus on areas such as education, health, economic development, and environmental conservation.
          </p>
          <h3>Our Programs</h3>
          <ul>
            <li><strong>Education:</strong> Providing access to quality education and vocational training for children and adults.</li>
            <li><strong>Health:</strong> Improving healthcare services and promoting healthy lifestyles through community health programs.</li>
            <li><strong>Economic Development:</strong> Supporting small businesses and entrepreneurship to create job opportunities and economic growth.</li>
            <li><strong>Environmental Conservation:</strong> Promoting sustainable practices and protecting natural resources to ensure a healthy environment for future generations.</li>
          </ul>
          <h3>Get Involved</h3>
          <p>
            Join us in making a difference! Whether you want to volunteer, donate, or partner with us, there are many ways to get involved and support our mission. Together, we can create a more resilient and prosperous Uganda.
          </p>
          <button onClick={handleMoreInfoClick}>More Information</button>
        </div>
      </div>
    </>
  );
};

export default Habout;
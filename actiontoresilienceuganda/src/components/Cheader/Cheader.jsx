import React from 'react';
import './Cheader.css';
import { useNavigate } from 'react-router-dom';

const Cheader = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/support');
  };

  return (
    <header className="cheader">
      <div className="content">
        <h1>Help Us Help All</h1>
        <h5>
          Help us make a difference in the community and improve resilience in the country.
        </h5>
        <p>
          We envision a Uganda where every community is resilient, self-sufficient, and thriving. 
          Our goal is to create lasting positive impacts by addressing the root causes of poverty and vulnerability.
        </p>
        <button onClick={handleButtonClick}>Join / Support Us</button>
      </div>
    </header>
  );
};

export default Cheader;

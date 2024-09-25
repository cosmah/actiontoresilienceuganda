import React, { useState, useEffect } from "react";
import "./Hello.css";

const Hello = (props) => {
  const slogans = [
    "Welcome to Action To Resilience Uganda",
    
    "Transforming Communities For Better Lives"
  ];

  const [currentSloganIndex, setCurrentSloganIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSloganIndex((prevIndex) => (prevIndex + 1) % slogans.length);
    }, 10000); // Change slogan every 10 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slogans.length]);

  return (
    <div className='header'>
      <div className='slogan-container'>
        <h1 className='slogan'>{slogans[currentSloganIndex]}</h1>
      </div>
      <div className="motto">
        <p><span className="blue">Identify</span>.<span className="orange">Transform</span>.<span className="red">Sustain</span> </p>
      </div>
    </div>
  );
};

export default Hello;
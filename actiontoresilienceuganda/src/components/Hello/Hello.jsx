import React, { useState, useEffect } from "react";
import "./Hello.css";

const Hello = (props) => {
  const slogans = [
    "Welcome to Action To Resilience Uganda",
    "Empowering Communities, Enriching Lives!",
    "Together, We Make a Difference!"
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
    </div>
  );
};

export default Hello;
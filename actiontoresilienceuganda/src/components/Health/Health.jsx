import React, { useState, useEffect } from 'react';
import './Health.css';
import communityGatheringImage from "../../assets/11.jpeg";
import EductionalWorkshop from "../../assets/8.jpeg";
import YouthEmpowerment from "../../assets/10.jpeg";
import Vaccine from "../../assets/2.jpeg";

const Health = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: EductionalWorkshop,
      caption: "Community Health Check-up Camp",
      message: "Bringing healthcare to remote villages"
    },
    {
      image: communityGatheringImage,
      caption: "Maternal Health Awareness Program",
      message: "Empowering mothers for a healthier future"
    },
    {
      image: YouthEmpowerment,
      caption: "Youth Mental Health Workshop",
      message: "Supporting the well-being of our young generation"
    },
    {
      image: Vaccine,
      caption: "COVID-19 Vaccination Drive",
      message: "Protecting communities through immunization"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="health-container">
      <h1 className="health-title">Our Health Outreaches</h1>
      
      <div className="gallery-container">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`gallery-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={slide.image} alt={slide.caption} className="gallery-image" />
            <div className="slide-content">
              <h2 className="slide-caption">{slide.caption}</h2>
              <p className="slide-message">{slide.message}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="gallery-indicators">
        {slides.map((_, index) => (
          <span 
            key={index} 
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>

      <section className="health-message">
        <h2>Empowering Communities Through Health</h2>
        <p>
          At Action to Resilience Uganda, we believe that a healthy community is a resilient community. 
          Our health outreaches aim to provide essential healthcare services, education, and resources 
          to underserved areas across Uganda. Together, we're building a healthier, stronger future for all.
        </p>
      </section>
    </div>
  );
};

export default Health;
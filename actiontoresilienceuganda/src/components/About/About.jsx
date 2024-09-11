import React from 'react';
import './About.css';

const AboutUs = () => {
  return (
    <div className="container">
      <h1 className="main-title">About Action to Resilience Uganda</h1>
      
      <div className="card-container">
        <div className="card">
          <h2 className="card-title">Our Mission</h2>
          <p>Action to Resilience Uganda is dedicated to empowering communities in Uganda to build resilience in the face of challenges. We work tirelessly to improve lives through sustainable development initiatives, education, and community-driven projects.</p>
        </div>
        
        <div className="card">
          <h2 className="card-title">Our Vision</h2>
          <p>We envision a Uganda where every individual has the tools and opportunities to thrive, regardless of their circumstances. Our goal is to create self-reliant communities that can adapt and flourish in the face of adversity.</p>
        </div>
      </div>
      
      <div className="section">
        <h2 className="section-title">Our Impact</h2>
        <ul className="impact-list">
          <li>Empowered over 1,000 individuals through skills training programs</li>
          <li>Implemented sustainable agriculture projects in 20 rural communities</li>
          <li>Provided access to clean water for 5,000 people through well-digging initiatives</li>
          <li>Established 10 community-led disaster preparedness committees</li>
        </ul>
      </div>
      
      <div className="section">
        <h2 className="section-title">Get Involved</h2>
        <p>Join us in our mission to build a more resilient Uganda. Whether through volunteering, donations, or partnerships, your support can make a significant difference in the lives of many.</p>
        <div className="button-container">
          <button className="cta-button">Contact Us</button>
          <button className="cta-button">What We Do</button>
          <button className="cta-button">Donate</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
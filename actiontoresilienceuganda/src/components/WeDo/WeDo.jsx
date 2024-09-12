import React from 'react';
import './WeDo.css';

const WeDo = () => {
  const programs = [
    { 
      title: "Community Resilience Building",
      description: "Empowering communities to prepare for and recover from challenges.",
      icon: "👥"
    },
    { 
      title: "Sustainable Development Initiatives",
      description: "Implementing projects that promote long-term environmental and economic sustainability.",
      icon: "📊"
    },
    { 
      title: "Youth Empowerment Programs",
      description: "Equipping young people with skills and resources for a resilient future.",
      icon: "❤️"
    }
  ];

  return (
    <div className="we-do-container">
      <h1 className="we-do-title">What We Do</h1>
      
      <section className="we-do-section">
        <h2 className="section-title">Our Mission</h2>
        <p className="section-text">
          Action to Resilience Uganda is dedicated to building resilient communities across Uganda. 
          We work tirelessly to empower individuals and groups with the knowledge, skills, and 
          resources needed to overcome challenges and thrive in the face of adversity.
        </p>
      </section>

      <section className="we-do-section">
        <h2 className="section-title">Our Programs</h2>
        <div className="programs-grid">
          {programs.map((program, index) => (
            <div key={index} className="program-card">
              <div className="program-header">
                <span className="program-icon">{program.icon}</span>
                <h3 className="program-title">{program.title}</h3>
              </div>
              <div className="program-content">
                <p>{program.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="we-do-section">
        <h2 className="section-title">Our Impact</h2>
        <p className="section-text">
          Through our dedicated efforts and the support of our partners, we have:
        </p>
        <ul className="impact-list">
          <li className="impact-item">
            <span className="impact-icon">➡️</span>
            Empowered over 1,000 individuals across 10 communities
          </li>
          <li className="impact-item">
            <span className="impact-icon">➡️</span>
            Implemented 4 sustainable development projects
          </li>
          <li className="impact-item">
            <span className="impact-icon">➡️</span>
            Trained 100 youth leaders in resilience and community development
          </li>
        </ul>
      </section>
    </div>
  );
};

export default WeDo;
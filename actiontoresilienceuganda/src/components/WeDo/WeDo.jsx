import React from "react";
import "./WeDo.css";

const WeDo = () => {
  const programs = [
    {
      title: "Community Resilience Building",
      description:
        "Empowering communities to prepare for and recover from challenges.",
      icon: "👥",
    },
    {
      title: "Sustainable Development Initiatives",
      description:
        "Implementing projects that promote long-term environmental and economic sustainability.",
      icon: "📊",
    },
    {
      title: "Youth Empowerment Programs",
      description:
        "Equipping young people with skills and resources for a resilient future.",
      icon: "❤️",
    },
  ];

  return (
    <div className="we-do-container">
      <h1 className="we-do-title">What We Do</h1>

      <section className="we-do-section">
        <h2 className="section-title">HEALTH</h2>
        <p className="section-text">
          ARU has embarked on offering health related services to communities.
          This is done with guidance from the local authorities and the Ministry
          of Health guidelines. ARU is working with public health centres to
          extend integrated health services to far reaching communities like HIV
          prevention, care and treatment services, contraception and Maternal
          Health care.
          <br />
          Furthermore, through the Community Health Promoters and the peer to
          peer model. ARU has been able to boost community awareness on HIV
          prevention and home improvement health campaigns among adolescents and
          most at risk communities which minimizes the spread of sexually
          transmitted infections and cases of Gender Based Violence.
        </p>
      </section>
      <section className="we-do-section">
        <h2 className="section-title">ENVIRONMENTAL CONSERVATION</h2>
        <p className="section-text">
          ARU believes that building a sustainable and resilient future begins
          with addressing the urgent challenges posed by environmental
          degradation and climate change. Our work focuses on empowering
          communities to adapt to these changes while advocating for long-term
          solutions that prioritize both people and the planet.
          <br />
          ARU focuses on empowering communities to adapt to climate change
          through initiatives that enhance resilience to extreme weather,
          promote sustainable land use, energy conservation, and waste
          management. We emphasize education and advocacy to raise awareness of
          the links between human health, livelihoods, and climate change. By
          supporting community-led solutions like reforestation, clean energy,
          and sustainable agriculture, we aim to build a sustainable,
          climate-resilient future.
        </p>
      </section>

      <section className="we-do-section">
        <h2 className="section-title">LIVELIHOOD PROGRAMS</h2>
        <p className="section-text">
          ARU employs needs assessment and participatory approaches to identify
          economic vulnerabilities amongst communities it serves. With this,
          local authorities and community members have been engaged to plan,
          establish and implement livelihood programs like (vocational training
          in Tailoring, Bakery, Crocheting, and soap making, Hair dressing,
          supporting agriculture ventures) and all these skills address the
          identified economic vulnerabilities thus creating employment
          opportunities for adolescents, Youth and women.
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
          Through our dedicated efforts and the support of our partners, we
          have:
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

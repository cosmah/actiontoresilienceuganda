import React from "react";
import "./Location.css";

const Location = () => {
  const areas = [
    {
      name: "Kamuli",
      description:
        "Kamuli district faces a range of socio-economic challenges. ARU is focused on addressing healthcare needs, promoting education, and enhancing livelihood programs to empower the local community.",
    },
    {
      name: "Luweero",
      description:
        "In Luweero, we are leading initiatives on sustainable development and gender equality. Our programs focus on environmental conservation, youth empowerment, and creating job opportunities for women.",
    },
    {
      name: "Mukono",
      description:
        "Mukono is known for its agricultural potential, and ARU is helping farmers adopt sustainable practices. We are also implementing community health programs and working with local authorities to boost education and vocational training.",
    },
  ];

  return (
    <section className="areas-section">
      <h2 className="section-title">Our Areas of Operation</h2>
      <p className="section-text">
        ARU is deeply committed to making a lasting impact in some of Uganda’s
        most vulnerable regions. Our areas of operation include{" "}
        <strong>Kamuli</strong>, <strong>Luweero</strong>, and{" "}
        <strong>Mukono</strong> districts. These regions have been carefully
        chosen due to their unique challenges and potential for positive change.
      </p>

      <div className="areas-grid">
        {areas.map((area, index) => (
          <div key={index} className="area-card">
            <h3 className="area-title">{area.name}</h3>
            <p className="area-description">{area.description}</p>
          </div>
        ))}
      </div>

      <p className="section-text">
        By focusing on these key areas, ARU is transforming lives and helping
        communities build a resilient future. We believe that real change begins
        at the grassroots level, and through our ongoing efforts in Kamuli,
        Luweero, and Mukono, we are driving sustainable growth and empowering
        individuals to thrive.
      </p>
    </section>
  );
};

export default Location;

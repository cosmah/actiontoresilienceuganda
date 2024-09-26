import React from "react";
import "./AboutUs.css";
import About from "../About/About";
import Social from "../Social/Social";
import Footer from "../Footer/Footer";
import Location from "../location/Location";

const AboutUs = (props) => {
  return (
    <>
      <About />
      <Location/>
      <Social />

      <Footer />
    </>
  );
};

export default AboutUs;

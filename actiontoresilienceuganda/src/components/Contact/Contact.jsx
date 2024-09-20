// Contact.jsx
import React from "react";
import './Contact.css';
import Cheader from "../Cheader/Cheader";
import Form from "../Form/Form";
import Threejs from "../Threejs/Threejs";
import Footer from "../Footer/Footer";
// import Map from "../Map/Map";

const Contact = () => {
  return (
    <div>
      <div className="contact-container">
      <Cheader />
      <div className="contact-content">
        <div className="form-column">
          <Form />
        </div>
        <div className="threejs-column">
          <Threejs />
        </div>
      </div>
    </div>
    {/* <Map/> */}
    <div className="footer">
      <Footer/>
    </div>
    </div>
    
  );
}

export default Contact;
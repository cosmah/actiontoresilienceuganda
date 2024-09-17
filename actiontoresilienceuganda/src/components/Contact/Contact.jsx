import React from "react";
import './Contact.css';
import Cheader from "../Cheader/Cheader";
import Form from "../Form/Form";
import Threejs from "../Threejs/Threejs";

const Contact = () => {
  return (
    <div>
      <Cheader />
      <div className="row">
        <div className="column">
          <Form />
        </div>
        <div className="column">
          <Threejs />
        </div>
      </div>
    </div>
  );
}

export default Contact;
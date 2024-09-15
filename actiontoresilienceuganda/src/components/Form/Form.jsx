import React, { useRef } from "react";
import "./Form.css";
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

const Cube = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color={0x00ff00} />
    </mesh>
  );
};

const CameraControls = () => {
  const { camera, gl } = useThree();
  const controlsRef = useRef();

  useFrame(() => {
    if (controlsRef.current) {
      controlsRef.current.update();
    }
  });

  return (
    <orbitControls ref={controlsRef} args={[camera, gl.domElement]} />
  );
};

const Form = () => {
  return (
    <div className="container">
      <div className="left-column">
        <h3>Get In Touch</h3>
        <h5>Action To Resilience Uganda</h5>
        <h6>Location: Kampala, Uganda</h6>

        <div className="contact-us">
          <form className="contact-form" id="contactForm">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" placeholder="Your full name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="Your email address" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" placeholder="Your phone number (optional)" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" placeholder="Type your message here..." required></textarea>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <div className="right-column">
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <CameraControls />
          <Cube />
        </Canvas>
      </div>
    </div>
  );
};

export default Form;
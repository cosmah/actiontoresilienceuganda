import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin,faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Action to Resilience Uganda</p>
          <p>123 Main Street, Kampala, Uganda</p>
          <p>Phone: +256 751 866 059</p>
          <p>Email: info@actiontoresilience.org</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/programs">Our Programs</a></li>
            <li><a href="/get-involved">Get Involved</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com" className="social-icon" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
            <a href="https://www.twitter.com" className="social-icon" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
            <a href="https://www.instagram.com" className="social-icon" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
            <a href="https://www.linkedin.com" className="social-icon" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
            <a href="https://www.tiktok.com" className="social-icon" aria-label="TikTok"><FontAwesomeIcon icon={faTiktok} size="2x" /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Action to Resilience Uganda. All rights reserved | Powered by Cosmc Inc</p>
      </div>
    </footer>
  );
};

export default Footer;
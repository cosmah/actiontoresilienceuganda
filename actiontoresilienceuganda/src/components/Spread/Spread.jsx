import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Spread.css'; // Import the CSS file

const Spread = (props) => {
    const shareUrl = "https://actiontoresilienceuganda.org"; // Replace with the actual URL
    const message = "Learn more about Action to Resilience Uganda and their efforts to build resilience in communities.";

    return (
        <div className="spread-container">
            <p className="spread-message">Action to Resilience Uganda is dedicated to building resilience in communities through various initiatives and programs. Join us in supporting their mission.</p>
            <div className="spread-icons">
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&quote=${message}`} target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={32} />
                </a>
                <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${message}`} target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={32} />
                </a>
                <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${message}`} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={32} />
                </a>
                <a href={`https://www.instagram.com/?url=${shareUrl}`} target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={32} />
                </a>
                <a href={`https://api.whatsapp.com/send?text=${message} ${shareUrl}`} target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp size={32} />
                </a>
            </div>
        </div>
    );
};

export default Spread;
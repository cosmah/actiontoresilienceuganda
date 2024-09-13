import React from 'react';
import './Donations.css';

const DonationMethod = ({ title, description, icon }) => (
  <div className="donation-method">
    <div className="donation-method-icon">{icon}</div>
    <h3 className="donation-method-title">{title}</h3>
    <p className="donation-method-description">{description}</p>
  </div>
);

const Donations = () => {
  return (
    <div className="donations-container">
      <h2 className="donations-title">Support Our Cause</h2>
      <p className="donations-description">
        Your generous donation helps us continue our important work. 
        Choose the method that's most convenient for you:
      </p>
      <div className="donation-methods">
        <DonationMethod
          title="Cash"
          description="Visit our office to make a cash donation in person."
          icon="💵"
        />
        <DonationMethod
          title="Mobile Money"
          description="Send your donation directly from your phone."
          icon="📱"
        />
        <DonationMethod
          title="Bank Transfer"
          description="Make a donation through a secure bank transfer."
          icon="🏦"
        />
      </div>
      <div className="donation-info">
        <p>For any questions about donations, please contact us at:</p>
        <p className="contact-info"><strong>Email:</strong> info@actiontoresilience.org</p>
        <p className="contact-info"><strong>Phone:</strong> +256 751 866 059</p>
      </div>
    </div>
  );
};

export default Donations;
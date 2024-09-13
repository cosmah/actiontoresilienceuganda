import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Support.css';

const Button = ({ children, className, to, ...props }) => {
  if (to) {
    return (
      <Link to={to} className={`button ${className}`} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button className={`button ${className}`} {...props}>
      {children}
    </button>
  );
};

const Card = ({ children, className, ...props }) => (
  <div className={`card ${className}`} {...props}>
    {children}
  </div>
);

const CardHeader = ({ children, className, ...props }) => (
  <div className={`card-header ${className}`} {...props}>
    {children}
  </div>
);

const CardContent = ({ children, className, ...props }) => (
  <div className={`card-content ${className}`} {...props}>
    {children}
  </div>
);

const CardFooter = ({ children, className, ...props }) => (
  <div className={`card-footer ${className}`} {...props}>
    {children}
  </div>
);

const DonationOption = ({ title, description, buttonText }) => (
  <Card>
    <CardHeader>
      <h3 className="donation-title">{title}</h3>
    </CardHeader>
    <CardContent>
      <p className="donation-description">{description}</p>
    </CardContent>
    <CardFooter>
      <Button to="/donate" className="donation-button">
        {buttonText}
        <span className="button-arrow">→</span>
      </Button>
    </CardFooter>
  </Card>
);

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.value);

  return (
    <div className="tabs">
      <div className="tab-list">
        {children.map((child) => (
          <button
            key={child.props.value}
            className={`tab ${activeTab === child.props.value ? 'active' : ''}`}
            onClick={() => setActiveTab(child.props.value)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {children.find((child) => child.props.value === activeTab)}
      </div>
    </div>
  );
};

const TabPanel = ({ children }) => children;

const Support = () => {
  return (
    <div className="support-container">
      <h1 className="main-title">Support Our Mission</h1>
      
      <p className="main-description">
        Your contribution empowers us to create lasting change. Every donation, 
        regardless of size, propels our mission forward and transforms lives.
      </p>
      
      <Tabs>
        <TabPanel value="donate" label="Make a Donation">
          <div className="donation-options">
            <DonationOption 
              title="One-Time Donation"
              description="Make an immediate impact with a single gift. Your support helps us address urgent needs and fund critical projects."
              buttonText="Donate Now"
            />
            <DonationOption 
              title="Become a Monthly Supporter"
              description="Join our community of regular givers. Your ongoing support provides us with sustainable resources to plan for the future."
              buttonText="Start Monthly Giving"
            />
          </div>
        </TabPanel>
        <TabPanel value="other" label="Other Ways to Help">
          <div className="donation-options">
            <DonationOption 
              title="Volunteer Your Time"
              description="Contribute your skills and time to make a direct impact in our community. We have various opportunities available."
              buttonText="Explore Volunteer Options"
            />
            <DonationOption 
              title="Spread the Word"
              description="Help us reach more people by sharing our mission with your network. Your voice can inspire others to join our cause."
              buttonText="Share Our Story"
            />
          </div>
        </TabPanel>
      </Tabs>
      
      <Card className="contact-card">
        <CardHeader>
          <h2 className="contact-title">Contact Us</h2>
        </CardHeader>
        <CardContent>
          <p className="contact-description">
            Have questions about donating or want to discuss other ways to support? 
            Our team is here to assist you.
          </p>
          <p className="contact-info"><strong>Email:</strong> support@example.org</p>
          <p className="contact-info"><strong>Phone:</strong> (555) 123-4567</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Support;
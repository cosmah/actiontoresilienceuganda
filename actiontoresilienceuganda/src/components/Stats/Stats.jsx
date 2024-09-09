import React from 'react';
import CountUp from 'react-countup';
import './Stats.css';

const StatCard = ({ title, value, prefix = '', suffix = '' }) => (
  <div className="stat-card">
    <h3 className="stat-title">{title}</h3>
    <div className="stat-value">
      {prefix}
      <CountUp end={value} duration={2.5} separator="," />
      {suffix}
    </div>
  </div>
);

const Stats = ({ volunteers = 15, years = 2, projects = 4 }) => {
  return (
    <div className="stats-container">
      
      <div className="stats-grid">
        <StatCard
          title="Volunteers"
          value={volunteers}
          suffix=" +"
        />
        <StatCard
          title="Years of Experience"
          value={years}
        />
        <StatCard
          title="Projects"
          value={projects}
        />
      </div>
    </div>
  );
};

export default Stats;
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import './Stats.css';

const Stats = ({ users, posts, comments }) => {
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    setTimeout(() => setStartCount(true), 100); // Simulate delay
  }, []);

  return (
    <>
      <div className='statistics'>
        <h2>Statistics</h2>
        <ul>
          {users && <li>Number of users: {startCount ? <CountUp start={20} end={users} duration={2} /> : ''}</li>}
          {posts && <li>Number of posts: {startCount ? <CountUp start={30} end={posts} duration={2} /> : ''}</li>}
          {comments && <li>Number of comments: {startCount ? <CountUp start={9} end={comments} duration={2} /> : ''}</li>}
        </ul>
      </div>
    </>
  );
};

export default Stats;

import React, { useState, useEffect } from 'react';
import './Social.css';

const Tweet = ({ tweet }) => (
  <div className="tweet">
    <img src={tweet.profileImageUrl} alt={tweet.username} className="profile-image" />
    <div className="tweet-content">
      <p className="tweet-header">
        <span className="tweet-name">{tweet.name}</span>
        <span className="tweet-username">@{tweet.username}</span>
      </p>
      <p className="tweet-text">{tweet.text}</p>
      <p className="tweet-date">{new Date(tweet.createdAt).toLocaleDateString()}</p>
    </div>
  </div>
);

const Social = () => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/tweets');
        if (!response.ok) {
          throw new Error('Failed to fetch tweets');
        }
        const data = await response.json();
        setTweets(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTweets();
  }, []);

  if (loading) return <div className="loading">Loading tweets...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="social-feed">
      <h2>Latest Tweets</h2>
      <div className="tweets-container">
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </div>
    </div>
  );
};

export default Social;
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './NewsDetail.css';

const NewsDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { newsItem } = location.state || {};

  if (!newsItem) {
    return <div>No news item selected</div>;
  }

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="news-detail">
      <h2>{newsItem.title}</h2>
      <p>{newsItem.content}</p>
      <p><strong>Location:</strong> {newsItem.local ? newsItem.city : 'Global'}</p>
      <button className="back-button" onClick={handleBackClick}>Back to Home</button>
    </div>
  );
};

export default NewsDetail;
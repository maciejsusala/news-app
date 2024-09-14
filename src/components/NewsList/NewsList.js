import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NewsList.css';

const NewsList = ({ news }) => {
  const navigate = useNavigate();

  const handleNewsClick = (newsItem) => {
    navigate(`/news/${newsItem.id}`, { state: { newsItem } });
  };

  if (!news || news.length === 0) {
    return <div>No news available</div>;
  }

  return (
    <div>
      <h2>News List</h2>
      <ul className="news-list">
        {news.map((item) => (
          <li key={item.id} className="news-list-item" onClick={() => handleNewsClick(item)}>
            <h3>{item.title}</h3>
            <p>{item.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CitySelector from './components/CitySelector/CitySelector';
import NewsDetail from './components/NewsDetail/NewsDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<CitySelector />} />
        <Route path="/news/:id" element={<NewsDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
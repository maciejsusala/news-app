import React, { useState } from 'react';
import NewsList from '../NewsList/NewsList';
import './CitySelector.css'; // Importujemy plik CSS

const CitySelector = () => {
  const [news, setNews] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [searchCity, setSearchCity] = useState(''); // Stan do przechowywania wartości wpisanej w pole tekstowe
  const [error, setError] = useState(true); // Stan do przechowywania błędu, domyślnie ustawiony na true
  const [noNews, setNoNews] = useState(false); // Stan do przechowywania informacji o braku newsów

  const handleSelectCity = async (city) => {
    try {
      const response = await fetch(`http://localhost:8080/api/v1/news/city?city=${city}`);
      if (response.status === 404) {
        setNoNews(true);
        setNews([]);
        setSelectedCity(city);
        setError(false);
        return;
      }
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setNews(data); // Set the fetched data to state
      setSelectedCity(city); // Set the selected city
      setError(false); // Reset error state
      setNoNews(false); // Reset no news state
    } catch (error) {
      console.error('Error fetching news:', error);
      setError(true); // Set error state
      setNoNews(false); // Reset no news state
    }
  };

  const handleSearchCity = () => {
    handleSelectCity(searchCity);
  };

  return (
    <div className="container">
      <div className="sideMenu">
        <h1>Select a City</h1>
        <button onClick={() => handleSelectCity('New York')}>New York</button>
        <button onClick={() => handleSelectCity('Los Angeles')}>Los Angeles</button>
        <button onClick={() => handleSelectCity('Chicago')}>Chicago</button>
        <button onClick={() => handleSelectCity('Miami')}>Miami</button>
        <button onClick={() => handleSelectCity('Houston')}>Houston</button>
        <button onClick={() => handleSelectCity('Phoenix')}>Phoenix</button>
        <button onClick={() => handleSelectCity('Philadelphia')}>Philadelphia</button>
        <button onClick={() => handleSelectCity('San Antonio')}>San Antonio</button>
        <button onClick={() => handleSelectCity('San Diego')}>San Diego</button>
        <button onClick={() => handleSelectCity('Dallas')}>Dallas</button>
        <button onClick={() => handleSelectCity('Global')}>Global</button>
        <div>
          <input
            type="text"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            placeholder="Enter city name"
          />
          <button onClick={handleSearchCity}>Search</button>
        </div>
      </div>
      <div className="mainContent">
        {error && (
          <div className="error-message">
            <p>Failed to fetch your location. Please enter the city name or select from the list.</p>
          </div>
        )}
        {noNews && (
          <div className="error-message">
            <p>No news available for the selected city.</p>
          </div>
        )}
        {!error && !noNews && selectedCity && <NewsList news={news} />}
      </div>
    </div>
  );
};

export default CitySelector;
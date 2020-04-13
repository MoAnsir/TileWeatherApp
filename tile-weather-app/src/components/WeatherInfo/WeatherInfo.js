import React from 'react';
import './WeatherInfo.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WeatherInfo = () => {
  return (
    <div className="weather-info-container">
      <FontAwesomeIcon className="weather-icon" icon="sun" />{/* Make icon dynamic */}
      <h1>
        29<span className="celsius"></span>
      </h1>
      <h3>Sunny</h3>
    </div>
  );
}

export default WeatherInfo

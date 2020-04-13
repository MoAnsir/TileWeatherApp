import React from 'react';
import './OtherWeatherInfo.css';

const OtherWeatherInfo = () => {
  return (
    <div className="other-weather-info-container">
      <div className="today-info">
        <div className="precipitation">
          <span>PRECIPITATION : </span>
          <span>0%</span>
        </div>
        <div className="humidity">
          <span>HUMIDITY : </span>
          <span>34%</span>
        </div>
        <div className="wind">
          <span>WIND : </span>
          <span>0km/h</span>
        </div>
      </div>
    </div>
  );
}

export default OtherWeatherInfo

import React, { Component } from 'react';
import './WeatherTile.css';

import DayDate from '../../components/DayDate/DayDate';
import Location from '../../components/Location/Location';
import WeatherInfo from '../../components/WeatherInfo/WeatherInfo';

class WeatherTile extends Component {
  render() {
    return (
      <div className="weather-side">
        <div className="weather-gradient">
          <DayDate />
          <Location />
          <WeatherInfo />
        </div>
      </div>
    );
  }
}

export default WeatherTile;

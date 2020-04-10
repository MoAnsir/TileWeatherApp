import React, { Component } from 'react';
import './WeatherTile.css';

import DayDate from '../../components/DayDate/DayDate';
import Location from '../../components/Location/Location';

class WeatherTile extends Component {
  render() {
    return (
      <div className="weather-side">
        <div className="weather-gradient">
          <DayDate />
          <Location />
        </div>
      </div>
    );
  }
}

export default WeatherTile;

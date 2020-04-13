import React, { Component } from 'react';
import './InfoTile.css';

import OtherWeatherInfo from '../../components/OtherWeatherInfo/OtherWeatherInfo';
import Forecast from '../../components/ForecastContainer/ForecastContainer';
import ChangeLocation from '../../components/ChangeLocation/ChangeLocation';

class InfoTile extends Component {
  render() {
    return (
      <div className="info-side">
        <OtherWeatherInfo />
        <Forecast />
        <ChangeLocation />
      </div>
    );
  }
}

export default InfoTile;

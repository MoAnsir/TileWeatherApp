import React from 'react';
import './App.css';

import InfoTile from './containers/InfoTile/InfoTile';
import WeatherTile from './containers/WeatherTile/WeatherTile';

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faCoffee,
  faSun,
  faCloud,
  faCloudSun,
  faCloudSunRain,
  faCloudShowersHeavy,
  faSnowflake
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fab,
  faMapMarkerAlt,
  faCoffee,
  faSun,
  faCloud,
  faCloudSun,
  faCloudSunRain,
  faCloudShowersHeavy,
  faSnowflake
);

function App() {
  return (
    <div className="container">
      <WeatherTile />
      <InfoTile />
    </div>
  );
}

export default App;

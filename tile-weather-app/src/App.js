import React from 'react';
import './App.css';

import InfoTile from './containers/InfoTile/InfoTile';
import WeatherTile from './containers/WeatherTile/WeatherTile';

function App() {
  return (
    <div className="container">
      <InfoTile />
      <WeatherTile />
    </div>
  );
}

export default App;

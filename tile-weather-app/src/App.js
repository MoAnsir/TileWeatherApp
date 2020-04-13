import React from 'react';
import './App.css';

import InfoTile from './containers/InfoTile/InfoTile';
import WeatherTile from './containers/WeatherTile/WeatherTile';

function App() {
  return (
    <div className="container">
      <WeatherTile />
      <InfoTile />
    </div>
  );
}

export default App;

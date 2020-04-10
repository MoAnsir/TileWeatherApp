import React from 'react';
import './WeatherInfo.css';

/*

TODO

Think of a better way to deliver the icon.

*/

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";
import { faCloudSunRain } from "@fortawesome/free-solid-svg-icons";
import { faCloudShowersHeavy } from "@fortawesome/free-solid-svg-icons";
import { faSnowflake } from "@fortawesome/free-solid-svg-icons";

const WeatherInfo = () => {
  return (
    <div className="weather-container">
      <FontAwesomeIcon className="weather-icon" icon={faSnowflake} />
      <h1>
        29<span className="celsius"></span>
      </h1>
      <h3>Sunny</h3>
    </div>
  );
}

export default WeatherInfo

import React from 'react';
import './ForecastElement.css';

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

const ForecastElement = (props) => {
  return (
    <div className="week-container">
      <ul className="week-list">
        <li className={props.active}>
          <FontAwesomeIcon className="weather-icon" icon={faSun} />
          <span className="day-name">{props.day}</span>
          <span className="day-temp">{props.temp}</span>
        </li>
      </ul>
    </div>
  );
};

export default ForecastElement;

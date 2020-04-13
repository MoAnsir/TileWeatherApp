import React from 'react';
import './ForecastElement.css';

/*

TODO

Think of a better way to deliver the icon.

*/

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ForecastElement = (props) => {
  const forecastDetails = [
    {
      icon: "faSun",
      day: "Tue",
      temp: "29",
      active: "active",
    },
    {
      icon: "faCloud",
      day: "Wed",
      temp: "21",
      active: "",
    },
    ,
    {
      icon: "faCloudShowersHeavy",
      day: "Thur",
      temp: "15",
      active: "",
    },
    {
      icon: "faCloudSun",
      day: "Fri",
      temp: "19",
      active: "",
    },
  ];

  return (
    <div className="week-container">
      <ul className="week-list">
        {forecastDetails.map((obj, index) =>{
          return (
            <li key={index} className={obj.active}>
              <FontAwesomeIcon className="weather-icon" icon={obj.icon} />
              <span className="day-name">{obj.day}</span>
              <span className="day-temp celsius">{obj.temp}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ForecastElement;

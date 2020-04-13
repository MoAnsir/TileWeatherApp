import React from 'react';

import ForecastElement from './ForecastElement/ForecastElement';
import Auxly from '../../hoc/Auxly';

const ForeCast = () => {

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
      temp: "12",
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
    <Auxly>
      <ForecastElement />
    </Auxly>
  );
}

export default ForeCast

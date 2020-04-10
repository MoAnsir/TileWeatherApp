import React from 'react';
import './Location.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Location = () => {
  return (
    <div className="location-container">
      <FontAwesomeIcon className="location-icon" icon={faMapMarkerAlt} />
      <span className="location">London, GB</span>
    </div>
  );
}

export default Location

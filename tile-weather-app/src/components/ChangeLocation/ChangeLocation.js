import React from 'react';
import './ChangeLocation.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";

const ChangeLocation = () => {
  return (
    <div className="ChangeLocation-container">
      <button className="location-button">
        <FontAwesomeIcon className="map-pin" icon={faMapPin} />
        <span>Change location</span>
      </button>
    </div>
  );
}

export default ChangeLocation

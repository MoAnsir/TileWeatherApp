import React from 'react';

import ForecastElement from './ForecastElement/ForecastElement';
import Auxly from '../../hoc/Auxly';

const ForeCast = () => {
  return (
    <Auxly>
      <ForecastElement icon="faSun" day="Tue" temp="29" active="active" />
      {/*<ForecastElement icon="faSun" day="Tue" temp="29" active="" />
      <ForecastElement icon="faSun" day="Tue" temp="29" active="" />
      <ForecastElement icon="faSun" day="Tue" temp="29" active="" />*/}
    </Auxly>
  );
}

export default ForeCast

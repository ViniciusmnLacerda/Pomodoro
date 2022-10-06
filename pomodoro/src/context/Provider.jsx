/* eslint-disable react/jsx-no-constructed-context-values */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(3);
  const [controlStopWatch, setControlStopWatch] = useState(false);
  const [totalTime, setTotalTime] = useState((hours * 3600) + (minutes * 60) + seconds);

  const value = {
    hours,
    minutes,
    seconds,
    totalTime,
    controlStopWatch,
    setControlStopWatch,
    setHours,
    setMinutes,
    setSeconds,
    setTotalTime,
  };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

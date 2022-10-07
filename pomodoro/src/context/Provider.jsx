/* eslint-disable react/jsx-no-constructed-context-values */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(3);
  const [controlStopWatch, setControlStopWatch] = useState('not started');
  const [totalTime, setTotalTime] = useState((minutes * 60) + seconds - minutes);

  const value = {
    minutes,
    seconds,
    totalTime,
    controlStopWatch,
    setControlStopWatch,
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

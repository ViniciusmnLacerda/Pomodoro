/* eslint-disable react/jsx-no-constructed-context-values */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [workMinutes, setWorkMinutes] = useState(1);
  const [workSeconds, setWorkSeconds] = useState(10);
  const [breakMinutes, setBreakMinutes] = useState(1);
  const [breakSeconds, setBreakSeconds] = useState(2);
  const [controlStopWatch, setControlStopWatch] = useState('not started');
  const [timeToWork, setTimeToWork] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [
    totalTimeWork, setTotalTimeWork,
  ] = useState((workMinutes * 60) + workSeconds - workMinutes);
  const [
    totalTimeBreak, setTotalTimeBreak,
  ] = useState((breakMinutes * 60) + breakSeconds - breakMinutes);

  const value = {
    workMinutes,
    workSeconds,
    totalTimeWork,
    controlStopWatch,
    timeToWork,
    breakMinutes,
    breakSeconds,
    totalTimeBreak,
    isPaused,
    setControlStopWatch,
    setWorkMinutes,
    setWorkSeconds,
    setTotalTimeWork,
    setTimeToWork,
    setBreakSeconds,
    setBreakMinutes,
    setTotalTimeBreak,
    setIsPaused,
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

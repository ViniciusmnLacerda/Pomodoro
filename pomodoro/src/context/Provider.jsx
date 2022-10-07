/* eslint-disable react/jsx-no-constructed-context-values */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [workMinutes, setWorkMinutes] = useState(30);
  const [workSeconds, setWorkSeconds] = useState(0);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const [breakSeconds, setBreakSeconds] = useState(0);
  const [controlStopWatch, setControlStopWatch] = useState('not started');
  const [timeToWork, setTimeToWork] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);
  const [wasStarted, setWasStarted] = useState(false);
  const [totalTimeWork, setTotalTimeWork,
  ] = useState((workMinutes * 60) + workSeconds - workMinutes);
  const [
    totalTimeBreak, setTotalTimeBreak,
  ] = useState((breakMinutes * 60) + breakSeconds - breakMinutes);
  const [user, setUser] = useState({
    userWorkMinutes: 30,
    userWorkSeconds: 0,
    userBreakMinutes: 5,
    userBreakSeconds: 0,
    totalTimeWork: 1770,
    totalTimeBreak: 295,
  });

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
    openSettings,
    wasStarted,
    user,
    setControlStopWatch,
    setWorkMinutes,
    setWorkSeconds,
    setTotalTimeWork,
    setTimeToWork,
    setBreakSeconds,
    setBreakMinutes,
    setTotalTimeBreak,
    setIsPaused,
    setOpenSettings,
    setWasStarted,
    setUser,
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

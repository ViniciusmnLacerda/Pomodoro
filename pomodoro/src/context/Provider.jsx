/* eslint-disable react/jsx-no-constructed-context-values */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [controlStopWatch, setControlStopWatch] = useState('not started');
  const [timeToWork, setTimeToWork] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);
  const [wasStarted, setWasStarted] = useState(false);
  const [totalTimeWork, setTotalTimeWork] = useState(1800);
  const [totalTimeBreak, setTotalTimeBreak] = useState(300);
  const [session, setSession] = useState(1);
  const [user, setUser] = useState({
    userWorkMinutes: 30,
    userWorkSeconds: 0,
    userBreakMinutes: 5,
    userBreakSeconds: 0,
    userTotalTimeWork: 1800,
    userTotalTimeBreak: 300,
  });

  const value = {
    totalTimeWork,
    controlStopWatch,
    timeToWork,
    totalTimeBreak,
    isPaused,
    openSettings,
    wasStarted,
    user,
    session,
    setControlStopWatch,
    setTotalTimeWork,
    setTimeToWork,
    setTotalTimeBreak,
    setIsPaused,
    setOpenSettings,
    setWasStarted,
    setUser,
    setSession,
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

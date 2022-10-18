import React, { useContext } from 'react';
import Context from '../context/Context';

function RestartButton() {
  const {
    user,
    wasStarted,
    setTotalTimeBreak,
    setTotalTimeWork,
    setWasStarted,
    setControlStopWatch,
    setIsPaused,
    setOpenSettings,
    setTimeToWork,
    setSession,
  } = useContext(Context);

  const handleClick = () => {
    const {
      userTotalTimeBreak,
      userTotalTimeWork,
    } = user;
    for (let i = 0; i < 9999; i += 1) {
      window.clearInterval(i);
    }
    setControlStopWatch('not started');
    setTotalTimeWork(userTotalTimeWork);
    setTotalTimeBreak(userTotalTimeBreak);
    setIsPaused(false);
    setWasStarted(false);
    setOpenSettings(false);
    setTimeToWork(true);
    setSession(1);
  };

  return (
    <button
      type="button"
      disabled={!wasStarted}
      onClick={handleClick}
    >
      Restart
    </button>
  );
}

export default RestartButton;

import React, { useContext } from 'react';
import Context from '../context/Context';

function RestartButton() {
  const {
    user,
    wasStarted,
    setBreakMinutes,
    setBreakSeconds,
    setWorkMinutes,
    setWorkSeconds,
    setTotalTimeBreak,
    setTotalTimeWork,
    setWasStarted,
    setControlStopWatch,
    setIsPaused,
    setOpenSettings,
    setTimeToWork,
  } = useContext(Context);

  const handleClick = () => {
    const {
      totalTimeBreak,
      totalTimeWork,
      userBreakMinutes,
      userBreakSeconds,
      userWorkMinutes,
      userWorkSeconds,
    } = user;
    for (let i = 0; i < 9999; i += 1) {
      window.clearInterval(i);
      window.clearTimeout(i);
    }
    setControlStopWatch('not started');
    setWorkSeconds(+userWorkSeconds);
    setWorkMinutes(+userWorkMinutes);
    setBreakMinutes(+userBreakMinutes);
    setBreakSeconds(+userBreakSeconds);
    setTotalTimeWork(totalTimeWork);
    setTotalTimeBreak(totalTimeBreak);
    setIsPaused(false);
    setWasStarted(false);
    setOpenSettings(false);
    setTimeToWork(true);
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

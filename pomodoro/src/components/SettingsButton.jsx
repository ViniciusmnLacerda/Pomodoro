import React, { useContext } from 'react';
import Context from '../context/Context';

function SettingsButton() {
  const {
    setIsPaused,
    setControlStopWatch,
    workMinutes,
    workSeconds,
    setWorkSeconds,
    setWorkMinutes,
    breakMinutes,
    breakSeconds,
    setBreakSeconds,
    setBreakMinutes,
    setTotalTimeWork,
    setTotalTimeBreak,
    setOpenSettings,
    wasStarted,
  } = useContext(Context);

  const handleClick = () => {
    if (wasStarted) {
      setIsPaused(true);
      setControlStopWatch('not started');
      for (let i = 0; i < 9999; i += 1) {
        window.clearInterval(i);
        window.clearTimeout(i);
      }
    }
    setBreakSeconds(breakSeconds);
    setBreakMinutes(breakMinutes);
    setWorkSeconds(workSeconds);
    setWorkMinutes(workMinutes);
    setTotalTimeWork((workMinutes * 60) + workSeconds - workMinutes);
    setTotalTimeBreak((breakMinutes * 60) + breakSeconds - breakMinutes);
    setOpenSettings(true);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
    >
      settings
    </button>
  );
}

export default SettingsButton;

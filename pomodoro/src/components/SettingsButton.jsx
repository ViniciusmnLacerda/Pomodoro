import React, { useContext } from 'react';
import { IoSettings } from 'react-icons/io5';
import Context from '../context/Context';

function SettingsButton() {
  const {
    setIsPaused,
    setControlStopWatch,
    setTotalTimeWork,
    setTotalTimeBreak,
    setOpenSettings,
    wasStarted,
    totalTimeBreak,
    totalTimeWork,
  } = useContext(Context);

  const handleClick = () => {
    if (wasStarted) {
      setIsPaused(true);
      setControlStopWatch('not started');
      for (let i = 0; i < 9999; i += 1) {
        window.clearInterval(i);
      }
      setTotalTimeWork(totalTimeWork);
      setTotalTimeBreak(totalTimeBreak);
    }
    setOpenSettings(true);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
    >
      <IoSettings />
    </button>
  );
}

export default SettingsButton;

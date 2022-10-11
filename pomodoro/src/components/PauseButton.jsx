import React, { useContext } from 'react';
import Context from '../context/Context';

function PauseButton() {
  const {
    isPaused,
    setIsPaused,
    setControlStopWatch,
    setTotalTimeWork,
    setTotalTimeBreak,
    wasStarted,
    totalTimeBreak,
    totalTimeWork,
  } = useContext(Context);

  const handleClick = () => {
    if (!isPaused) {
      setIsPaused(true);
      setControlStopWatch('paused');
      for (let i = 0; i < 9999; i += 1) {
        window.clearInterval(i);
      }
      setTotalTimeWork(totalTimeWork);
      setTotalTimeBreak(totalTimeBreak);
    } else {
      setIsPaused(false);
      setControlStopWatch('start');
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={!wasStarted}
    >
      {isPaused ? ('Continue') : ('Pause')}
    </button>
  );
}

export default PauseButton;

import React, { useContext } from 'react';
import Context from '../context/Context';

function PauseButton() {
  const {
    isPaused,
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
  } = useContext(Context);

  const handleClick = () => {
    if (!isPaused) {
      setBreakSeconds(breakSeconds);
      setBreakMinutes(breakMinutes);
      setWorkSeconds(workSeconds);
      setWorkMinutes(workMinutes);
      setTotalTimeWork((workMinutes * 60) + workSeconds - workMinutes);
      setTotalTimeBreak((breakMinutes * 60) + breakSeconds - breakMinutes);
      setIsPaused(true);
      setControlStopWatch('not started');
      for (let i = 0; i < 9999; i += 1) {
        window.clearInterval(i);
        window.clearTimeout(i);
      }
    } else {
      setIsPaused(false);
      setControlStopWatch('start');
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
    >
      {isPaused ? ('Continue') : ('Pause')}
    </button>
  );
}

export default PauseButton;

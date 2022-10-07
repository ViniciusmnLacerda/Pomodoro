import React, { useContext } from 'react';
import Context from '../context/Context';

function PauseButton() {
  const { isPaused, setIsPaused, setControlStopWatch } = useContext(Context);

  const handleClick = () => {
    if (!isPaused) {
      setIsPaused(true);
      setControlStopWatch('not started');
      for (let i = 0; i < 9999; i += 1) {
        window.clearInterval(i);
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

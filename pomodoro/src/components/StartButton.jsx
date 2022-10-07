import React, { useContext } from 'react';
import Context from '../context/Context';

function StartButton() {
  const { setControlStopWatch, wasStarted, setWasStarted } = useContext(Context);
  const handleClick = () => {
    setControlStopWatch('start');
    setWasStarted(true);
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={wasStarted}
    >
      Start
    </button>
  );
}

export default StartButton;

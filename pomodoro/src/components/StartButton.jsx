import React, { useContext } from 'react';
import Context from '../context/Context';

function StartButton() {
  const { setControlStopWatch } = useContext(Context);
  const handleClick = () => {
    setControlStopWatch('start');
  };
  return (
    <button
      type="button"
      onClick={handleClick}
    >
      Start
    </button>
  );
}

export default StartButton;

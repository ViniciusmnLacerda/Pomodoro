import React, { useContext } from 'react';
import Context from '../context/Context';

function Timer() {
  const { hours, minutes, seconds } = useContext(Context);
  return (
    <div>
      <p>{hours}</p>
      <p>{minutes}</p>
      <p>{seconds}</p>
    </div>
  );
}

export default Timer;

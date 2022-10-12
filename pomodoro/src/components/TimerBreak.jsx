import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';
import '../syles/Timers.css';

function TimerBreak() {
  const {
    controlStopWatch,
    setTotalTimeBreak,
    totalTimeBreak,
    setTimeToWork,
    setTotalTimeWork,
    user,
    setSession,
  } = useContext(Context);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (controlStopWatch === 'start') {
      const breakSecondsInterval = setInterval(() => {
        setTotalTimeBreak((prevState) => prevState - 1);
      }, 1000);
      if (totalTimeBreak === 0) {
        clearInterval(breakSecondsInterval);
        setTotalTimeWork(user.userTotalTimeWork);
        setTimeToWork((prevState) => !prevState);
        setSession((prevState) => prevState + 1);
      }
      return () => clearInterval(breakSecondsInterval);
    }
  }, [controlStopWatch, totalTimeBreak]);

  const setTimeLeft = () => {
    const timeLeft = `${Math.floor(totalTimeBreak / 60) < 10
      ? '0' : ''}${Math.floor(totalTimeBreak / 60)}:${totalTimeBreak % 60 > 9
      ? (totalTimeBreak % 60) : (`0${totalTimeBreak % 60}`)}`;
    return timeLeft;
  };

  return (
    <div className="timer">
      <div className="clock">
        <p>{setTimeLeft()}</p>
      </div>
      <p>Break!</p>
    </div>
  );
}

export default TimerBreak;

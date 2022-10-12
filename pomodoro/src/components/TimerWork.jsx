import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';
import '../syles/Timers.css';

function TimerWork() {
  const {
    controlStopWatch,
    setTotalTimeWork,
    totalTimeWork,
    setTimeToWork,
    setTotalTimeBreak,
    user,
    session,
  } = useContext(Context);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (controlStopWatch === 'start') {
      const workSecondsInterval = setInterval(() => {
        setTotalTimeWork((prevState) => prevState - 1);
      }, 1000);
      if (totalTimeWork === 0) {
        clearInterval(workSecondsInterval);
        setTotalTimeBreak(user.userTotalTimeBreak);
        setTimeToWork((prevState) => !prevState);
      }
      return () => clearInterval(workSecondsInterval);
    }
  }, [controlStopWatch, totalTimeWork]);

  const setTimeLeft = () => {
    const timeLeft = `${Math.floor(totalTimeWork / 60) < 10
      ? '0' : ''}${Math.floor(totalTimeWork / 60)}:${totalTimeWork % 60 > 9
      ? (totalTimeWork % 60) : (`0${totalTimeWork % 60}`)}`;
    return timeLeft;
  };

  return (
    <div className="timer">
      <div className="clock">
        <p>{setTimeLeft()}</p>
      </div>
      <p>{`Session ${session}`}</p>
    </div>
  );
}

export default TimerWork;

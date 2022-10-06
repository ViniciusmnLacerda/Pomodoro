import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';

function TimerWork() {
  const {
    hours,
    minutes,
    seconds,
    controlStopWatch,
    setControlStopWatch,
    setTotalTime,
    setSeconds,
    setMinutes,
    totalTime,
  } = useContext(Context);

  useEffect(() => {
    if (controlStopWatch === 'start') {
      setControlStopWatch('in progress');
      const secondsInterval = setInterval(() => {
        setTotalTime((prevState) => prevState - 1);
        setSeconds((prevState) => prevState - 1);
      }, 1000);
      const minutesInterval = setInterval(() => {
        setMinutes((prevState) => prevState - 1);
      }, seconds * 1000);
      if (totalTime === 0) {
        setControlStopWatch('finish');
        clearInterval(secondsInterval);
        clearInterval(minutesInterval);
        setSeconds(0);
        setMinutes(0);
      }
      setTimeout(() => {
        if (totalTime > 0) {
          setSeconds(60);
          clearInterval(secondsInterval);
          setControlStopWatch('start');
          clearInterval(minutesInterval);
        }
      }, seconds * 1000);
    }
  }, [controlStopWatch, totalTime]);

  return (
    <div>
      <p>{`Hours: ${hours}`}</p>
      <p>{`Minutes: ${minutes}`}</p>
      <p>{`Seconds: ${seconds}`}</p>
    </div>
  );
}

export default TimerWork;

import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';

function TimerWork() {
  const {
    workMinutes,
    workSeconds,
    controlStopWatch,
    setControlStopWatch,
    setTotalTimeWork,
    setWorkSeconds,
    setWorkMinutes,
    totalTimeWork,
    setTimeToWork,
    setBreakMinutes,
    setBreakSeconds,
    setTotalTimeBreak,
    isPaused,
  } = useContext(Context);

  useEffect(() => {
    if (controlStopWatch === 'start') {
      setControlStopWatch('in progress');
      const workSecondsInterval = setInterval(() => {
        setTotalTimeWork((prevState) => prevState - 1);
        setWorkSeconds((prevState) => prevState - 1);
      }, 1000);
      const workMinutesInterval = setInterval(() => {
        setWorkMinutes((prevState) => prevState - 1);
      }, workSeconds * 1000);
      if (isPaused) {
        clearInterval(workSecondsInterval);
        clearInterval(workMinutesInterval);
      }
      if (totalTimeWork === 0) {
        setControlStopWatch('start');
        clearInterval(workSecondsInterval);
        clearInterval(workMinutesInterval);
        setTimeToWork((prevState) => !prevState);
        setBreakMinutes(1);
        setBreakSeconds(2);
        setTotalTimeBreak(61);
      }
      setTimeout(() => {
        if (totalTimeWork > 0) {
          setWorkSeconds(59);
          clearInterval(workSecondsInterval);
          setControlStopWatch('start');
          clearInterval(workMinutesInterval);
        }
      }, workSeconds * 1000);
    }
  }, [controlStopWatch, totalTimeWork, isPaused]);

  return (
    <div>
      <p>{`work Minutes: ${workMinutes}`}</p>
      <p>{`work Seconds: ${workSeconds}`}</p>
      <p>WORK</p>
    </div>
  );
}

export default TimerWork;

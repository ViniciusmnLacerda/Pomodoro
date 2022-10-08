import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';

function TimerBreak() {
  const {
    breakMinutes,
    breakSeconds,
    controlStopWatch,
    setControlStopWatch,
    setTotalTimeBreak,
    setBreakSeconds,
    setBreakMinutes,
    totalTimeBreak,
    setTimeToWork,
    setWorkMinutes,
    setWorkSeconds,
    setTotalTimeWork,
    user,
  } = useContext(Context);

  useEffect(() => {
    if (controlStopWatch === 'start') {
      setControlStopWatch('in progress');
      const breakSecondsInterval = setInterval(() => {
        setTotalTimeBreak((prevState) => prevState - 1);
        setBreakSeconds((prevState) => prevState - 1);
      }, 1000);
      const breakMinutesInterval = setInterval(() => {
        setBreakMinutes((prevState) => prevState - 1);
      }, breakSeconds === 0 ? (1000) : (breakSeconds * 1000));
      const timeOut = setTimeout(() => {
        if (totalTimeBreak > 0) {
          setBreakSeconds(59);
          clearInterval(breakSecondsInterval);
          clearInterval(breakMinutesInterval);
          setControlStopWatch('start');
        }
      }, breakSeconds === 0 ? (1000) : (breakSeconds * 1000));
      if (totalTimeBreak === 0) {
        clearInterval(breakSecondsInterval);
        clearInterval(breakMinutesInterval);
        clearTimeout(timeOut);
        setWorkMinutes(+user.userWorkMinutes);
        setWorkSeconds(+user.userWorkSeconds);
        setTotalTimeWork(user.totalTimeWork);
        setTimeToWork((prevState) => !prevState);
        setControlStopWatch('start');
      }
    }
  }, [controlStopWatch, totalTimeBreak]);

  return (
    <div>
      <p>{`break Minutes: ${breakMinutes}`}</p>
      <p>{`break Seconds: ${breakSeconds}`}</p>
      <p>BREAK</p>
    </div>
  );
}

export default TimerBreak;

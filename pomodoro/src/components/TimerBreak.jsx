import React, { useContext, useEffect } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Context from '../context/Context';
import '../syles/Timers.css';
import ProgressProvider from './ProgressProvider';

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

  const percentage = (100 - ((+totalTimeBreak * 100) / (+user.userTotalTimeBreak)));

  return (
    <div className="timer">
      <div className="clock">
        <ProgressProvider valueStart={10} valueEnd={percentage}>
          {(value) => (
            <CircularProgressbar
              value={value}
              text={setTimeLeft()}
              strokeWidth={3}
              background
              styles={buildStyles({
                backgroundColor: '#EAE9E5',
                stroke: `rgba(100, 152, 199, ${percentage / 100})`,
              })}
            />
          )}
        </ProgressProvider>
        <p>Break!</p>
      </div>
    </div>
  );
}

export default TimerBreak;

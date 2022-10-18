import React, { useContext, useEffect } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Context from '../context/Context';
import '../syles/Timers.css';
import ProgressProvider from './ProgressProvider';

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
        setTimeToWork((prevState) => !prevState);
        clearInterval(workSecondsInterval);
        setTotalTimeBreak(user.userTotalTimeBreak);
        setTotalTimeWork(user.userTotalTimeWork);
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

  const percentage = (100 - ((+totalTimeWork * 100) / (+user.userTotalTimeWork)));

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
      </div>
      <p>{`Session ${session}`}</p>
    </div>
  );
}

export default TimerWork;

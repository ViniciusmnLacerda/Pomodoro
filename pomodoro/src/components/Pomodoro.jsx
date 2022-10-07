import React, { useContext } from 'react';
import Context from '../context/Context';
import PauseButton from './PauseButton';
import StartButton from './StartButton';
import TimerBreak from './TimerBreak';
import TimerWork from './TimerWork';

function Pomodoro() {
  const { timeToWork } = useContext(Context);
  return (
    <>
      {timeToWork ? (
        <TimerWork />
      ) : (
        <TimerBreak />
      )}
      <StartButton />
      <PauseButton />
    </>
  );
}

export default Pomodoro;

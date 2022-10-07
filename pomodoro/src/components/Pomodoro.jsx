import React, { useContext } from 'react';
import Context from '../context/Context';
import PauseButton from './PauseButton';
import Settings from './Settings';
import SettingsButton from './SettingsButton';
import StartButton from './StartButton';
import TimerBreak from './TimerBreak';
import TimerWork from './TimerWork';

function Pomodoro() {
  const { timeToWork, openSettings } = useContext(Context);
  return (
    <>
      {timeToWork ? (
        <TimerWork />
      ) : (
        <TimerBreak />
      )}
      <StartButton />
      <PauseButton />
      <SettingsButton />
      {openSettings && <Settings />}
    </>
  );
}

export default Pomodoro;

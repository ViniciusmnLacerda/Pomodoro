import React, { useContext } from 'react';
import Context from '../context/Context';
import '../syles/Pomodoro.css';
import PauseButton from './PauseButton';
import RestartButton from './RestartButton';
import Settings from './Settings';
import SettingsButton from './SettingsButton';
import StartButton from './StartButton';
import TimerBreak from './TimerBreak';
import TimerWork from './TimerWork';

function Pomodoro() {
  const { timeToWork, openSettings } = useContext(Context);
  return (
    <main className="pomodoro-card">
      <header>
        <h1>Pomodoro</h1>
      </header>
      {timeToWork ? (
        <TimerWork />
      ) : (
        <TimerBreak />
      )}
      <StartButton />
      <PauseButton />
      <SettingsButton />
      {openSettings && <Settings />}
      <RestartButton />
    </main>
  );
}

export default Pomodoro;

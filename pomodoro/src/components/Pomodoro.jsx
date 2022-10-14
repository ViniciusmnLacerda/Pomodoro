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
      <div className="settings-btn">
        <SettingsButton />
      </div>
      {timeToWork ? (
        <TimerWork />
      ) : (
        <TimerBreak />
      )}
      <div className="buttons-row">
        <StartButton />
        <PauseButton />
        <RestartButton />
      </div>
      {openSettings && <Settings />}
    </main>
  );
}

export default Pomodoro;

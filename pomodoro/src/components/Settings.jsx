import React, { useContext } from 'react';
import Context from '../context/Context';

function Settings() {
  const {
    setIsPaused,
    setControlStopWatch,
    setTotalTimeWork,
    setTotalTimeBreak,
    setOpenSettings,
    setTimeToWork,
    wasStarted,
    setWasStarted,
    user,
    setUser,
    totalTimeBreak,
    totalTimeWork,
  } = useContext(Context);

  const closeSettings = () => {
    for (let i = 0; i < 9999; i += 1) {
      window.clearInterval(i);
    }
    setOpenSettings(false);
    if (wasStarted) {
      setTotalTimeWork(totalTimeWork);
      setTotalTimeBreak(totalTimeBreak);
      setIsPaused(false);
      setControlStopWatch('start');
    }
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser({
      ...user,
      [name]: +value,
    });
  };

  const saveSettings = () => {
    for (let i = 0; i < 9999; i += 1) {
      window.clearInterval(i);
    }
    const {
      userWorkMinutes,
      userWorkSeconds,
      userBreakMinutes,
      userBreakSeconds,
    } = user;
    const userTotalTimeWork = (+userWorkMinutes * 60) + (+userWorkSeconds);
    const userTotalTimeBreak = (+userBreakMinutes * 60) + (+userBreakSeconds);
    setControlStopWatch('not started');
    setTotalTimeWork(userTotalTimeWork);
    setTotalTimeBreak(userTotalTimeBreak);
    setIsPaused(false);
    setWasStarted(false);
    setOpenSettings(false);
    setTimeToWork(true);
    setUser({
      ...user,
      userTotalTimeBreak,
      userTotalTimeWork,
    });
  };

  return (
    <div>
      <button
        type="button"
        onClick={closeSettings}
      >
        close settings without save
      </button>
      <form>
        <fieldset>
          <legend>Pomodoro</legend>
          <label htmlFor="userWorkMinutes">
            Minutes
            <input
              type="number"
              id="userWorkMinutes"
              name="userWorkMinutes"
              max="59"
              min="1"
              value={user.userWorkMinutes}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="userWorkSeconds">
            Seconds
            <input
              type="number"
              id="userWorkSeconds"
              name="userWorkSeconds"
              max="59"
              min="1"
              value={user.userWorkSeconds}
              onChange={handleChange}
            />
          </label>
        </fieldset>
        <fieldset>
          <legend>Rest</legend>
          <label htmlFor="userBreakMinutes">
            Minutes
            <input
              type="number"
              id="userBreakMinutes"
              name="userBreakMinutes"
              max="59"
              min="1"
              value={user.userBreakMinutes}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="userBreakSeconds">
            Seconds
            <input
              type="number"
              id="userBreakSeconds"
              name="userBreakSeconds"
              max="59"
              min="1"
              value={user.userBreakSeconds}
              onChange={handleChange}
            />
          </label>
        </fieldset>
        <label htmlFor="sessions">
          Sessions
          <input
            type="number"
            id="sessions"
            name="sessions"
            min="1"
            value={user.sessions}
            onChange={handleChange}
          />
        </label>
      </form>
      <button
        type="button"
        onClick={saveSettings}
      >
        close setting after saving
      </button>
    </div>
  );
}

export default Settings;

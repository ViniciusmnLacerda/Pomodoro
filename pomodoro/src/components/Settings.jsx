import React, { useContext } from 'react';
import Context from '../context/Context';

function Settings() {
  const {
    setIsPaused,
    setControlStopWatch,
    setWorkSeconds,
    setWorkMinutes,
    setBreakSeconds,
    setBreakMinutes,
    setTotalTimeWork,
    setTotalTimeBreak,
    setOpenSettings,
    wasStarted,
    setWasStarted,
    user,
    setUser,
  } = useContext(Context);

  const closeSettings = () => {
    for (let i = 0; i < 9999; i += 1) {
      window.clearInterval(i);
      window.clearTimeout(i);
    }
    setOpenSettings(false);
    if (wasStarted) {
      setIsPaused(false);
      setControlStopWatch('start');
    }
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const saveSettings = () => {
    for (let i = 0; i < 9999; i += 1) {
      window.clearInterval(i);
      window.clearTimeout(i);
    }
    const {
      userWorkMinutes, userWorkSeconds, userBreakMinutes, userBreakSeconds,
    } = user;
    let totalTimeWork = (+userWorkMinutes * 60) + (+userWorkSeconds) - (+userWorkMinutes);
    let totalTimeBreak = (+userBreakMinutes * 60) + (+userBreakSeconds) - (+userBreakMinutes);
    if (totalTimeWork === 59) {
      totalTimeWork = 60;
    }
    if (totalTimeBreak === 59) {
      totalTimeBreak = 60;
    }
    for (let i = 0; i < 9999; i += 1) {
      window.clearInterval(i);
      window.clearTimeout(i);
    }
    setControlStopWatch('not started');
    setWorkSeconds(+userWorkSeconds);
    setWorkMinutes(+userWorkMinutes);
    setBreakMinutes(+userBreakMinutes);
    setBreakSeconds(+userBreakSeconds);
    setTotalTimeWork(totalTimeWork);
    setTotalTimeBreak(totalTimeBreak);
    setIsPaused(false);
    setWasStarted(false);
    setOpenSettings(false);
    setUser({
      ...user,
      totalTimeBreak,
      totalTimeWork,
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

import React from 'react';
import StartButton from './components/StartButton';
import TimerWork from './components/TimerWork';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <TimerWork />
      <StartButton />
    </Provider>
  );
}

export default App;

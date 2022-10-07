import React from 'react';
import Provider from './context/Provider';
import Pomodoro from './components/Pomodoro';

function App() {
  return (
    <Provider>
      <Pomodoro />
    </Provider>
  );
}

export default App;

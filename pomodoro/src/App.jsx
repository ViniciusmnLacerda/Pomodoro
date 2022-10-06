import React from 'react';
import Timer from './components/Timer';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Timer />
    </Provider>
  );
}

export default App;

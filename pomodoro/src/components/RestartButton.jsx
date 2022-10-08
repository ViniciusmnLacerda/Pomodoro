import React, { useContext } from 'react';
import Context from '../context/Context';

function RestartButton() {
  const { user } = useContext(Context);
  console.log(user);
  return (
    <button
      type="button"
    >
      Restart
    </button>
  );
}

export default RestartButton;

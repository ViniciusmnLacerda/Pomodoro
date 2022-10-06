import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const value = useMemo(() => (
    {
      hours,
      minutes,
      seconds,
      setHours,
      setMinutes,
      setSeconds,
    }
  ), []);

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

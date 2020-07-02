import React, { useState } from 'react';
import Ambeer from './index';


const AmbeerContext = ({ children }) => {
  const [login, setLogin] = useState('Context Ativo');

  const toProvider = {
    login,
    setLogin,
  };

  return (
    <Ambeer.Provider value={toProvider}>
      {children}
    </Ambeer.Provider>
  )
};

export default AmbeerContext;

import React, { useState } from 'react';
import Ambeer from './index';

const user = { email: '', password: '' };

const AmbeerContext = ({ children }) => {
  const [login, setLogin] = useState('Context Ativo');
  const [informationsUser, setInformationsUser] = useState(user);

  const saveInput = (input) => {
    const inputsLogin = {
      email: input.email,
      password: input.password,
    };
    setInformationsUser(inputsLogin);
  };

  const toProvider = {
    login,
    setLogin,
    saveInput,
    informationsUser,
  };

  return (
    <Ambeer.Provider value={toProvider}>
      {children}
    </Ambeer.Provider>
  )
};

export default AmbeerContext;

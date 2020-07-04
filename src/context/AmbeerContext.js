import React, { useState } from 'react';
import Ambeer from './index';

const user = { email: '', password: '' };
const date = { name: '', nickName: '', email: '', password: '' };

const AmbeerContext = ({ children }) => {
  const [login, setLogin] = useState('Context Ativo');
  const [informationsUser, setInformationsUser] = useState(user);
  const [userDate, setUserDate] = useState(date);

  const saveInput = (input) => {
    const inputsLogin = {
      email: input.email,
      password: input.password,
    };
    setInformationsUser(inputsLogin);
    setUserDate(inputsLogin);
  };

  const saveRegisterUser = (dados) => {
    const inputsRegister = {
      name: dados.name,
      nickName: dados.nickName,
      email: dados.email,
      password: dados.password,
    };
    console.log(userDate);
    setUserDate(inputsRegister);
  };

  const toProvider = {
    login,
    setLogin,
    saveInput,
    informationsUser,
    saveRegisterUser,
    userDate,
  };

  return (
    <Ambeer.Provider value={toProvider}>
      {children}
    </Ambeer.Provider>
  )
};

export default AmbeerContext;

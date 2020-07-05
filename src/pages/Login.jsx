import React, { useContext, useEffect, useState } from 'react';
import { Typography, Box, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Ambeer from '../context';
import '../styles/index.css';

const handleChangeInput = (name, event, input, setInput) => {
  setInput({ ...input, [name]: event });
};

const handleFormSubmit = (saveInput, input, history, register) => {
  const { email, password } = register
  if (input.email !== email) {
    alert('Cadastro não localizado.');
    return;
  }
  if (input.password !== password) {
    alert('Senha incorreta.')
    return;
  }
  localStorage.setItem('user', JSON.stringify(register));
  saveInput(input);
  return history.push('/profile');
};

const Login = () => {
  const { saveInput, register } = useContext(Ambeer);
  const [input, setInput] = useState({ email: '', password: '' });
  const [informations, setInformations] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const validEmailRegEx = /^[A-Z0-9_'%=+!`#~$*?^{}&|-]+([.][A-Z0-9_'%=+!`#~$*?^{}&|-]+)*@[A-Z0-9-]+(\.[A-Z0-9-]+)+$/i;

    if (!validEmailRegEx.test(input.email)
      || (input.password.length <= 5)) return setInformations(true);

    return setInformations(false);
  }, [input]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if(user) return history.push('/profile');
  })

  return (
    <>
      <Box className="login">
        <Box className="titulo">
          <Typography variant="h4">Login</Typography>
        </Box>
        <Box className="inputs-login">
          <Box className="input">
            <label htmlFor="email">Email</label>
            <input
              data-testid="email-input"
              type="email"
              onChange={(ele) => handleChangeInput('email', ele.target.value, input, setInput)}
            />
          </Box>
          <Box className="input">
            <label htmlFor="password">Senha</label>
            <input
              data-testid="password-input"
              type="password"
              onChange={(ele) => handleChangeInput('password', ele.target.value, input, setInput)}
            />
          </Box>
          <Box className="botao-login">
            <Button
              disabled={informations}
              data-testid="login-submit-btn"
              variant="outlined"
              size="large"
              onClick={() => handleFormSubmit(saveInput, input, history, register)}
            >
              Entrar
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;

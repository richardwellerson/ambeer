import React, { useContext, useState, useEffect } from 'react';
import { Typography, Box, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Ambeer from '../context';

const handleChangeInput = (name, event, input, setInput) => {
  setInput({...input, [name]: event});
};

const createForm = (input, setInput, eye, setEye) => {
  return(
    <>
      <Box>
        <input
          type="text"
          data-testid=""
          onChange={(e) => handleChangeInput('name', e.target.value, input, setInput)}
          placeholder="Digite seu nome completo"
        />
      </Box>
      <Box>
        <input
          type="text"
          data-testid=""
          onChange={(e) => handleChangeInput('nickName', e.target.value, input, setInput)}
          placeholder="Digite seu nome de usuário"
        />
      </Box>
      <Box>
        <input
          type="email"
          data-testid=""
          onChange={(e) => handleChangeInput('email', e.target.value, input, setInput)}
          placeholder="Digite seu email"
        />
      </Box>
      <Box>
        <input
          type={eye ? "password" : "text"}
          data-testid=""
          onChange={(e) => handleChangeInput('password', e.target.value, input, setInput)}
          placeholder="Digite sua senha "
        />
        <img
          onClick={() => setEye(!eye)}
          src="https://cdn0.iconfinder.com/data/icons/ui-icons-pack/100/ui-icon-pack-14-512.png"
          alt="olho senha"
          width="20px"
        />
      </Box>
      <Box>
        <input
          type={eye ? "password" : "text"}
          data-testid=""
          onChange={(e) => handleChangeInput('passwordConfirm', e.target.value, input, setInput)}
          placeholder="Confirme a sua senha "
        />
      </Box>
    </>
  );
};

const formSubmit = (saveRegisterUser, input) => {
  const { password, passwordConfirm } = input;
  if(password === passwordConfirm) {
    alert('Usuário cadastrado com sucesso! Faça login para continuar.');
    return saveRegisterUser(input);
  }
  return alert('Senhas diferentes!');
};

const Register = () => {
  const { saveRegisterUser } = useContext(Ambeer);
  const [input, setInput] = useState({
    name: '',
    nickName: '',
    email: '',
    password: '',
    passwordConfirm:'',
  });
  const [registerOk, setRegisterOk] = useState(true);
  const [eye, setEye] = useState(true);


  useEffect(() => {
    const validEmailRegEx = /^[A-Z0-9_'%=+!`#~$*?^{}&|-]+([.][A-Z0-9_'%=+!`#~$*?^{}&|-]+)*@[A-Z0-9-]+(\.[A-Z0-9-]+)+$/i;

    if (!validEmailRegEx.test(input.email)
      || (input.passwordConfirm.length <= 5)) return setRegisterOk(true);

    return setRegisterOk(false);
  }, [input]);

  return (
    <>
      <Box>
        <Link to="/">
          <img
            src="https://image.flaticon.com/icons/png/512/60/60577.png"
            alt="seta"
            width="30px"
          />
        </Link>
      </Box>
      <Typography variant="h4">Cadastro</Typography>
      {createForm(input, setInput, eye, setEye)}
      <Box>
        <Button
          disabled={registerOk}
          type="button"
          onClick={() => formSubmit(saveRegisterUser, input)}
        >
          Finalizar Cadastro
        </Button>
      </Box>
    </>
  );
};

export default Register;

import React, { useContext, useState, useEffect } from "react";
import { Typography, Box, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Ambeer from "../context";

const handleChangeInput = (name, event, input, setInput) => {
  setInput({ ...input, [name]: event });
};

const createForm = (input, setInput, eye, setEye) => {
  return (
    <Box className="inputs-cadastro">
      <Box className="input">
        <label htmlFor="email">Nome</label>
        <input
          type="text"
          data-testid=""
          onChange={(e) =>
            handleChangeInput("name", e.target.value, input, setInput)
          }
        />
      </Box>
      <Box className="input">
        <label htmlFor="email">Apelido</label>
        <input
          type="text"
          data-testid=""
          onChange={(e) =>
            handleChangeInput("nickName", e.target.value, input, setInput)
          }
        />
      </Box>
      <Box className="input">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          data-testid=""
          onChange={(e) =>
            handleChangeInput("email", e.target.value, input, setInput)
          }
        />
      </Box>
      <Box className="input">
        <label htmlFor="email">Senha</label>
        <input
          type={eye ? "password" : "text"}
          data-testid=""
          onChange={(e) =>
            handleChangeInput("password", e.target.value, input, setInput)
          }
        />
        <img
          onClick={() => setEye(!eye)}
          src="https://cdn0.iconfinder.com/data/icons/ui-icons-pack/100/ui-icon-pack-14-512.png"
          alt="olho senha"
        />
      </Box>
      <Box className="input">
        <label className="labelConfirmarSenha" htmlFor="email">
          Confirmar senha
        </label>
        <input
          type={eye ? "password" : "text"}
          data-testid=""
          onChange={(e) =>
            handleChangeInput(
              "passwordConfirm",
              e.target.value,
              input,
              setInput
            )
          }
        />
        <img
          onClick={() => setEye(!eye)}
          src="https://cdn0.iconfinder.com/data/icons/ui-icons-pack/100/ui-icon-pack-14-512.png"
          alt="olho senha"
        />
      </Box>
    </Box>
  );
};

const formSubmit = (saveRegisterUser, input) => {
  const { password, passwordConfirm } = input;
  if (password === passwordConfirm) {
    alert("Usuário cadastrado com sucesso! Faça login para continuar.");
    return saveRegisterUser(input);
  }
  return alert("Senhas diferentes!");
};

const Register = () => {
  const { saveRegisterUser } = useContext(Ambeer);
  const [input, setInput] = useState({
    name: "",
    nickName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [registerOk, setRegisterOk] = useState(true);
  const [eye, setEye] = useState(true);

  useEffect(() => {
    const validEmailRegEx = /^[A-Z0-9_'%=+!`#~$*?^{}&|-]+([.][A-Z0-9_'%=+!`#~$*?^{}&|-]+)*@[A-Z0-9-]+(\.[A-Z0-9-]+)+$/i;

    if (!validEmailRegEx.test(input.email) || input.passwordConfirm.length <= 5)
      return setRegisterOk(true);

    return setRegisterOk(false);
  }, [input]);

  return (
    <>
      <Box className="cadastro">
        <Box className="titulo">
          <Typography variant="h4">Cadastro</Typography>
        </Box>
        <Box>{createForm(input, setInput, eye, setEye)}</Box>
        <Box className="botao-cadastro">
          <Button
            className={registerOk && ".MuiButton-root.Mui-disabled"}
            disabled={registerOk}
            type="button"
            onClick={() => formSubmit(saveRegisterUser, input)}
          >
            Finalizar Cadastro
          </Button>
          <Box className="botao-voltar-cadastro">
            <Link to="/home">
              <Button>Voltar</Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Register;

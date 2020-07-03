import React, { useContext } from "react";
import Ambeer from "../context";
import { Typography, Box, InputBase, Button } from "@material-ui/core";
import "../styles/index.css";

const Login = () => {
  // const { login } = useContext(Ambeer);
  // const actualRoute = window.location.href;
  return (
    <>
      <Box className="login">
        <Box className="titulo">
          <Typography variant="h4">Login</Typography>
        </Box>
        <Box className="inputs-login">
          <Box className="input">
            <label htlmFor="email">Email</label>
            <input type="email" />
          </Box>
          <Box className="input">
            <label htlmFor="password">Senha</label>
            <input type="password" />
          </Box>
          <Box className="botao-login">
            <Button variant="outlined" size="large">
              Entrar
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;

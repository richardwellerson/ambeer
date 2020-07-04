import React, { useContext } from "react";
import Ambeer from "../context";
import { Box, Button } from "@material-ui/core";
import "../styles/index.css";
import logo from "../img/logo.png";

const Home = () => {
  // const { login } = useContext(Ambeer);
  // const actualRoute = window.location.href;
  return (
    <>
      <Box className="home">
        <Box className="logo">
          <img src={logo} alt="logo-ambeer" />
        </Box>
        <Box className="botoes-home">
          <Box>
            <Button variant="outlined" size="large">
              Entrar
            </Button>
          </Box>
          <Box>
            <Button variant="outlined" size="large">
              Registrar
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;

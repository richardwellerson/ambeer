import React from "react";
import { Box, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../styles/index.css";
import logo from "../img/logo.png";

const Home2 = () => {
  return (
    <>
      <Box className="home2">
        <Box className="logo">
          <img src={logo} alt="logo" data-testid="logo-amber"></img>
        </Box>
        <Box className="botoes-home2">
          <Box>
            <Link to="/login">
              <Button data-testid="entrar-btn" variant="outlined" size="large">
                Entrar
              </Button>
            </Link>
          </Box>
          <Box>
            <Link to="/register">
              <Button
                data-testid="registrar-btn"
                variant="outlined"
                size="large"
              >
                Registrar
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home2;

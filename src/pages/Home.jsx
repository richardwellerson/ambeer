import React from "react";
import { Box, Typography } from "@material-ui/core";
import "../styles/index.css";
import logo from "../img/logo.png";

const Home = () => {
  return (
    <>
      <Box className="home">
        <Box className="logo">
          <img src={logo} alt="logo" data-testid="logo-amber"></img>
        </Box>
        <Box className="frase-home">
          <Box>
            <Typography variant="h6">
              Um novo jeito de curtir a vida!
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6">Faça parte dessa família.</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;

import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Box, Avatar } from "@material-ui/core";
import exitIcon from "../../img/logout.svg";
import menuIcon from "../../img/menu.svg";
import userIcon from "../../img/user.svg";

import "../../styles/Footer.css";

const cleanAndExit = (history) => {
  localStorage.clear();
  alert("Logoff realizado. ");
  history.push("/");
};

const Footer = () => {
  const history = useHistory();
  return (
    <Box className="Footer_all">
      <Link to="/profile">
        <Avatar alt="link para Perfil" src={userIcon} />
      </Link>
      <Link to="/menu">
        <Avatar alt="link para Cardápio" src={menuIcon} />
      </Link>
      <Box onClick={() => cleanAndExit(history)}>
        <Avatar alt="sair da aplicação" src={exitIcon} />
      </Box>
    </Box>
  );
};

export default Footer;

import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Box, Avatar } from '@material-ui/core';
import profileIcon from '../../img/profile.svg';
import exitIcon from '../../img/exit.svg';
import menuIcon from '../../img/menu.svg';
import '../../styles/Footer.css';

const cleanAndExit = () => {
  localStorage.clear();
  return <Redirect to="/" />;
};

const Footer = () => (
  <Box className="Footer_all">
    <Link to="/profile">
      <Avatar alt="link para Perfil" src={profileIcon} />
    </Link>
    <Link to="/menu">
      <Avatar alt="link para Cardápio" src={menuIcon} />
    </Link>
    <Box onClick={() => cleanAndExit()}>
      <Avatar alt="sair da aplicação" src={exitIcon} />
    </Box>
  </Box>
);

export default Footer;

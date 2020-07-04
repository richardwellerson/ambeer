import React from 'react';
import { Box, Typography } from '@material-ui/core';
import Ambeer from '../../context';

const UserData = () => {
  const {
    userData: { name, email },
  } = useContext(Ambeer);
  return (
    <Box>
      <img src="" alt="foto de perfil" />
      <Typography variant="h3">{name}</Typography>
      <Typography variant="h5">{email}</Typography>
    </Box>
  );
};

export default UserData;

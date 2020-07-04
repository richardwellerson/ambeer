import React from 'react';
import { Box, Typography } from '@material-ui/core';
import Ambeer from '../../context';

const UserData = () => {
  const { userData } = useContext(Ambeer);
  return (
    <Box>
      <img src="" alt="foto de perfil" />
      <Typography variant="h3">{userData.name}</Typography>
      <Typography variant="h5">{userData.email}</Typography>
    </Box>
  );
};

export default UserData;

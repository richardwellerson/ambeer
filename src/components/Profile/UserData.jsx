import React from 'react';
import { Box, Typography } from '@material-ui/core';
import user from '../../img/neutralUser.svg'

const UserData = () => {
  const { name, email } = JSON.parse(localStorage.getItem('user'));
  return (
    <Box>
      <img
        width="50px"
        src={user}
        alt="foto de perfil"
      />
      <Typography variant="h3">{name}</Typography>
      <Typography variant="h5">{email}</Typography>
    </Box>
  );
};

export default UserData;

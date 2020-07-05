import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { bars } from '../../services/data';

const ComponentBares = () => {
  return (
    <Box>
      {bars.map((bar) => (
        <Box>
          <Typography variant="h2">{bar.name}</Typography>
          <Typography>{bar.phone}</Typography>
          <img src={bar.imageURL} alt="foto de bar" />
        </Box>
      ))}
    </Box>
  );
};

export default ComponentBares;

import React from 'react';
import Footer from '../components/Footer';
import { Box, Typography } from '@material-ui/core';

const ReservationSucess = () => {
  return (
    <Box>
      <Typography variant="h3">Reserva realizada com sucesso!</Typography>
      <Typography variant="h4">ESPERAMOS POR VOCÊd</Typography>
      <Footer />
    </Box>
  );
};

export default ReservationSucess;

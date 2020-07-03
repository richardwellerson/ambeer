import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const ReservationButton = () => {
  return (
    <Link to="/reservation">
      <Button>Reserva</Button>
    </Link>
  );
};

export default ReservationButton;

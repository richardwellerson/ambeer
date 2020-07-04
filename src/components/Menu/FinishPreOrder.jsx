import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const FinishPreOrder = () => (
  <Link to="/reservation/cart">
    <Button>Finalizar Reserva</Button>
  </Link>
);

export default FinishPreOrder;

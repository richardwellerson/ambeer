import React, { useContext } from 'react';
import Ambeer from '../context';

const Cart = () => {
  const actualRoute = window.location.href;
  const { login } = useContext(Ambeer);
  return (
    <div>
      <p>{login}</p>
      <p>{actualRoute}</p>
    </div>
  );
};

export default Cart;

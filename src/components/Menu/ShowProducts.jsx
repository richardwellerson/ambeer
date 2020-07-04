import React, { useContext, useState } from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Ambeer from '../../context';

const toSetOrder = (setPreOrder, preOrder, userOrder, addToCart) => {
  if (addToCart) return setPreOrder([...preOrder, userOrder]);
  const index = preOrder.indexOf(userOrder);
  const newOrder = preOrder.slice(0, index)
    .concat(preOrder.slice(index + 1));
  return setPreOrder(newOrder);
};

const ShowProducts = () => {
  const { searchedProducts, setPreOrder, preOrder } = useContext(Ambeer);
  const [addToCart, setAddToCart] = useState(true);
  const isAdd = addToCart ? searchedProducts : preOrder;
  const history = useHistory();
  const totalPrice = preOrder.length > 0 ? preOrder.reduce((total, act) => {
    return act.price + total;
  }, 0) : 0;
  const isShowPrice = history.location.pathname.includes('reservation');
  return (
    <Box>
      {!addToCart ? <Typography>{`Preço Total: R$ ${totalPrice}`}</Typography> : null}
      <Button onClick={() => setAddToCart(!addToCart)}>
        {addToCart ? 'Remover Antecipação' : 'Antecipar Pedido'}
      </Button>
      {isAdd.map((single, id) => (
        <Box
          key={`${single.product}${id}${addToCart}`}
          onClick={() => toSetOrder(setPreOrder, preOrder, single, addToCart)}
        >
          <img src={single.image} alt={`show ${single.product} option`} />
          <Typography>{single.product}</Typography>
          <Typography hidden={!isShowPrice}>{`R$ ${single.price}`}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ShowProducts;

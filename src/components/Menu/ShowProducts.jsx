import React, { useContext } from 'react';
import { Box, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Ambeer from '../../context';

const ShowProducts = () => {
  const { searchedProducts } = useContext(Ambeer);
  const history = useHistory();
  const isShowPrice = history.location.pathname.includes('reservation');
  return (
    <Box>
      {searchedProducts.map((single) => (
        <Box
          key={single.product}
          onClick={() => console.log(single.product)}
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

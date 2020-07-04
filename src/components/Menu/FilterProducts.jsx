import React, { useContext } from 'react';
import { Box, Button } from '@material-ui/core';
import Ambeer from '../../context';

const FilterProducts = () => {
  const { setFilter } = useContext(Ambeer);
  return (
    <Box>
      <Button onClick={() => setFilter('Todos')}>Todos</Button>
      <Button onClick={() => setFilter('Cervejas')}>Cervejas</Button>
      <Button onClick={() => setFilter('Porções')}>Porções</Button>
    </Box>
  );
};

export default FilterProducts;

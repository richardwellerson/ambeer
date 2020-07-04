import React from 'react';
import { Box } from '@material-ui/core';
import FilterProducts from '../components/Menu/FilterProducts';
import ShowProducts from '../components/Menu/ShowProducts';
import InputSearch from '../components/Menu/InputSearch';
import MenuTitle from '../components/Menu/MenuTitle';

const Menu = () => {
  return (
    <Box>
      <MenuTitle />
      <InputSearch />
      <FilterProducts />
      <ShowProducts />
    </Box>
  );
};

export default Menu;

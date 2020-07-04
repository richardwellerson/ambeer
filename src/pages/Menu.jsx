import React from 'react';
import { Box } from '@material-ui/core';
import FilterProducts from '../components/Menu/FilterProducts';
import ShowProducts from '../components/Menu/ShowProducts';
import InputSearch from '../components/Menu/InputSearch';
import MenuTitle from '../components/Menu/MenuTitle';
import Footer from '../components/Footer/Footer';

const Menu = () => (
  <Box>
    <MenuTitle />
    <InputSearch />
    <FilterProducts />
    <ShowProducts />
    <Footer />
  </Box>
);

export default Menu;

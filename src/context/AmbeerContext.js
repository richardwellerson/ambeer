import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Ambeer from './index';
import { allBeers, foods } from '../services/data';

const allProducts = [...allBeers, ...foods];

const setDataToSearch = (filter) => {
  if (filter === 'Todos') {
    return [...allBeers, ...foods];
  }
  if (filter === 'Cervejas') {
    return [...allBeers];
  }
  return [...foods];
};

const AmbeerContext = ({ children }) => {
  const [login, setLogin] = useState('Context Ativo');
  const [filter, setFilter] = useState('Todos');
  const [userSearch, setUserSearch] = useState('');
  const [searchedProducts, setSearchedProducts] = useState(allProducts);

  useEffect(() => {
    const afterFilter = setDataToSearch(filter);
    const afterInput = userSearch !== ''
      ? afterFilter.filter((single) => single.product.toLowerCase().includes(userSearch.toLowerCase()))
      : afterFilter;
    setSearchedProducts(afterInput);
  }, [filter, userSearch])

  const toProvider = {
    login,
    setLogin,
    filter,
    setFilter,
    userSearch,
    setUserSearch,
    searchedProducts,
  };

  return (
    <Ambeer.Provider value={toProvider}>
      {children}
    </Ambeer.Provider>
  )
};

export default AmbeerContext;

AmbeerContext.propTypes = {
  children: PropTypes.node.isRequired,
};

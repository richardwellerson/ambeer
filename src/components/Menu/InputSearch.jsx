import React, { useContext } from 'react';
import { Box, TextField } from '@material-ui/core';
import Ambeer from '../../context';

const InputSearch = () => {
  const { setUserSearch } = useContext(Ambeer);
  return (
    <Box>
      <TextField
        onKeyUp={({ target }) => setUserSearch(target.value)}
        id="outlined-basic"
        label="Produto"
        variant="outlined"
      />
    </Box>
  );
};

export default InputSearch;

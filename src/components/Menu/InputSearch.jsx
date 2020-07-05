import React, { useContext } from "react";
import { Box } from "@material-ui/core";
import Ambeer from "../../context";

const InputSearch = () => {
  const { setUserSearch } = useContext(Ambeer);
  return (
    <Box className="busca-cardapio">
      <input
        onKeyUp={({ target }) => setUserSearch(target.value)}
        id="outlined-basic"
        placeholder="Buscar produto"
      />
    </Box>
  );
};

export default InputSearch;

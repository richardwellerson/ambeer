import React from "react";
import { Button, Box } from "@material-ui/core";
import { Link } from "react-router-dom";

const ButtonPreOrder = () => (
  <>
    <Box className="botoes-reserva">
      <Link to="/reservation/menu">
        <Button>Antecipar Pedido</Button>
      </Link>
    </Box>
  </>
);

export default ButtonPreOrder;

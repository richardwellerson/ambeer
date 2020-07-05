import React from "react";
import { Button, Box } from "@material-ui/core";
import { Link } from "react-router-dom";

const ReservationButton = () => (
  <>
    <Box className="botao-voltar-reserva">
      <Link to="/profile">
        <Button>Voltar</Button>
      </Link>
    </Box>
  </>
);

export default ReservationButton;

import React from "react";
import { Button, Box } from "@material-ui/core";
import { Link } from "react-router-dom";

const FinishReservation = () => (
  <>
    <Box className="botoes-reserva">
      <Link to="/reservation/confirm">
        <Button>Finalizar reserva</Button>
      </Link>
    </Box>
  </>
);

export default FinishReservation;

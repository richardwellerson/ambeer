import React from "react";
import { Typography, Box } from "@material-ui/core";
import "../../styles/index.css";

const ReservationTitle = () => (
  <>
    <Box className="titulo-reserva">
      <Typography variant="h4">Reserva</Typography>
      <Typography variant="subtitle1">Escolha o seu dia</Typography>
    </Box>
  </>
);

export default ReservationTitle;

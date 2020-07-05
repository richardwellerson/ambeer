import React from "react";
import { Box } from "@material-ui/core";

import ReservationButton from "../components/Reservation/ReservationButton";
import ReservationTitle from "../components/Reservation/ReservationTitle";
import ButtonPreOrder from "../components/Reservation/ButtonPreOrder";
import FinishReservation from "../components/Reservation/FinishReservation";
import PikersDate from "../components/Reservation/PikersDate";
import "../styles/index.css";

const Reservation = () => (
  <Box className="reserva">
    <Box className="container-titulo-reserva">
      <ReservationTitle />
      <PikersDate />
    </Box>
    <Box className="container-botoes-reserva">
      <ButtonPreOrder />
      <FinishReservation />
      <ReservationButton />
    </Box>
  </Box>
);

export default Reservation;

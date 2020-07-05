import React from "react";
import { Box } from '@material-ui/core';

import ReservationButton from '../components/Reservation/ReservationButton';
import ReservationTitle from '../components/Reservation/ReservationTitle';
import ButtonPreOrder from '../components/Reservation/ButtonPreOrder';
import FinishReservation from '../components/Reservation/FinishReservation';
import PikersDate from '../components/Reservation/PikersDate';

const Reservation = () => (
  <>
    <Box>
      <ReservationTitle />
      <PikersDate />
      <ButtonPreOrder />
      <FinishReservation />
      <ReservationButton />
    </Box>
  </>
);

export default Reservation;

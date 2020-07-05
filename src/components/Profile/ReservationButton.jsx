import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const ReservationButton = () => {
  return (
    <Link to="/reservation">
      <Button variant="outlined" size="large" color="secondary">
        Reservar
      </Button>
    </Link>
  );
};

export default ReservationButton;

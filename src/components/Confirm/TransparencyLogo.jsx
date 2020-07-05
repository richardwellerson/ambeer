import React from "react";
import { Box } from "@material-ui/core";
import beer from "../../img/beer.png";

const TransparencyLogo = () => (
  <Box className="logo-reserva">
    <img src={beer} alt="transparency beer" />
  </Box>
);

export default TransparencyLogo;

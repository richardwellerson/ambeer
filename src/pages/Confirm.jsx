import React from "react";
import { Box } from "@material-ui/core";
import Footer from "../components/Footer/Footer";
import ConfirmTitle from "../components/Confirm/ConfirmTitle";
import TransparencyLogo from "../components/Confirm/TransparencyLogo";
import "../styles/index.css";

const Confirm = () => (
  <Box className="finalizar-reserva">
    <ConfirmTitle />
    <TransparencyLogo />
    <Footer />
  </Box>
);

export default Confirm;

import React from "react";
import { Box, Typography } from "@material-ui/core";
import "../../styles/index.css";

const ConfirmTitle = () => {
  return (
    <Box className="textos-reserva-finalizada">
      <Typography variant="h4">Reserva realizada com sucesso!</Typography>
      <Typography variant="subtitle2">
        E lembre-se que se 6 amigos ou mais também confirmarem presença, todos
        recebem 10% de desconto na comanda na hora do pagamento! :)
      </Typography>
      <Typography variant="subtitle2">Esperamos por você.</Typography>
    </Box>
  );
};

export default ConfirmTitle;

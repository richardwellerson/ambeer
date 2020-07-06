import React from "react";
import { Typography, Box } from "@material-ui/core";
import { bars } from "../../services/data";

const ShowBars = () => {
  return (
    <Box className="container-bares">
      {bars.map((bar, i) => (
        <Box key={`${bar.name} ${i}`}>
          <Typography variant="h6">{bar.name}</Typography>
          <Typography variant="subtitle1">{bar.phone}</Typography>
          <img src={bar.imageURL} alt="foto de bar" />
          <input type="checkbox" id="scales" name="scales" value={i} />
        </Box>
      ))}
    </Box>
  );
};

export default ShowBars;

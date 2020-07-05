import React from "react";
import { Box, Typography } from "@material-ui/core";
import user from "../../img/person.svg";

const UserData = () => {
  const { name, email } = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <Box className="perfil-user">
        <Box className="img-user">
          <img width="50px" src={user} alt="foto de perfil" />
        </Box>
        <Typography variant="h4">{name}</Typography>
        <Typography variant="subtitle2">{email}</Typography>
      </Box>
    </>
  );
};

export default UserData;

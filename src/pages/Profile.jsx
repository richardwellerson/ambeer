import React from "react";
import UserData from "../components/Profile/UserData";
import ReservationButton from "../components/Profile/ReservationButton";
import ShowBars from "../components/Profile/ShowBars";
import Footer from "../components/Footer/Footer";
import { Box } from "@material-ui/core";
import "../styles/index.css";

const Profile = () => {
  return (
    <Box className="perfil">
      <UserData />
      <ShowBars />
      <ReservationButton />
      <Footer />
    </Box>
  );
};

export default Profile;

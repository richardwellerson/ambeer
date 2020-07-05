import React from "react";
import UserData from "../components/Profile/UserData";
import ReservationButton from "../components/Profile/ReservationButton";
import GoogleAPIComponent from "../components/Profile/GoogleAPIComponent";
import Footer from "../components/Footer/Footer";
import { Box } from "@material-ui/core";

const Profile = () => {
  return (
    <Box>
      <UserData />
      <ReservationButton />
      <GoogleAPIComponent />
      <Footer />
    </Box>
  );
};

export default Profile;

import React, { useContext } from 'react';
import Ambeer from '../context';
import UserData from '../components/Profile/UserData';
import ReservationButton from '../components/Profile/ReservationButton';
import GoogleAPIComponent from '../components/Profile/GoogleAPIComponent';
import Footer from '../components/Footer';
import { Box } from '@material-ui/core';

const Profile = () => {
  const { login } = useContext(Ambeer);
  const actualRoute = window.location.href;
  return (
    <Box>
      <p>{login}</p>
      <p>{actualRoute}</p>
      <UserData />
      <ReservationButton />
      <GoogleAPIComponent />
      <Footer />
    </Box>
  );
};

export default Profile;

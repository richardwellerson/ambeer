import React, { useContext } from 'react';
import Ambeer from '../context';
import UserData from '../components/Profile/UserData';
import ReservationButton from '../components/Profile/ReservationButton';
import GoogleAPIComponent from '../components/Profile/GoogleAPIComponent';

const Profile = () => {
  const { login } = useContext(Ambeer);
  const actualRoute = window.location.href;
  return (
    <div>
      <p>{login}</p>
      <p>{actualRoute}</p>
      <UserData />
      <ReservationButton />
      <GoogleAPIComponent />
    </div>
  );
};

export default Profile;

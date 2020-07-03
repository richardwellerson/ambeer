import React, { useContext } from 'react';
import Ambeer from '../context';
import UserData from '../components/Profile/UserData';
import ReservationButton from '../components/Profile/ReservationButton';

const Profile = () => {
  const { login } = useContext(Ambeer);
  const actualRoute = window.location.href;
  return (
    <div>
      <p>{login}</p>
      <p>{actualRoute}</p>
      <UserData />
      <ReservationButton />
    </div>
  );
};

export default Profile;

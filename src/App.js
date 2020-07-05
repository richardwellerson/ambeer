import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeAll from './pages/HomeAll';
import Home2 from './pages/Home2';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Reservation from './pages/Reservation';
import Menu from './pages/Menu';
import Confirm from './pages/Confirm';
import Cart from './pages/Cart';
import './styles/App.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={HomeAll} />
    <Route exact path="/home" component={Home2} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/reservation" component={Reservation} />
    <Route exact path="/reservation/menu" component={Menu} />
    <Route exact path="/menu" component={Menu} />
    <Route exact path="/reservation/confirm" component={Confirm} />
    <Route exact path="/reservation/cart" component={Cart} />
  </Switch>
);

export default App;

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
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
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route path="/profile" component={Profile} />
    <Route exact path="/reservation" component={Reservation} />
    <Route exact path="/reservation/menu" component={Menu} />
    <Route path="/menu" component={Menu} />
    <Route exact path="/reservation/confirm" component={Confirm} />
    <Route exact path="/reservation/cart" component={Cart} />
  </Switch>
);

export default App;

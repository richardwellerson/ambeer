import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ambeerLogo from './img/ambeer.png';
import './styles/App.css';

function App() {
  return (
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
}

export default App;

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import AmbeerContext from './context/AmbeerContext';
import App from './App';
import './styles/index.css';

ReactDOM.render(
  <BrowserRouter>
    <AmbeerContext>
      <App />
    </AmbeerContext>
  </BrowserRouter>,
  document.getElementById('root')
);

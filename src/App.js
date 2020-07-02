import React from 'react';
import ambeer from './img/ambeer.png';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ambeer} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to ambeer.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Breja
        </a>
      </header>
    </div>
  );
}

export default App;

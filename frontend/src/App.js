import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Luiz <strong>O PROGRAMADOR</strong>
        </p>
        <a
          className="App-link"
          href="https://adapti.info"
          target="_blank"
          rel="noopener noreferrer"
        >
          Adapti - Soluções Web
        </a>
      </header>
    </div>
  );
}

export default App;

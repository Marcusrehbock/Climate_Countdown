import React from "react";
import logo from './Logo.png';
import './App.css';
import CountdownTimer from "./CountdownTimer";

const Time =  {
  years: 10,
  months: 0,
  days: 3,
  hours: 2,
  mins: 8,
  seconds: 42
};

  
function App() {
  const ten_Years_MS = 10 * 52 * 7 * 24 * 60 * 60 * 1000;
  const NOW_MS = new Date().getTime(); 

  const dateTimeAfterTenYears = ten_Years_MS + NOW_MS;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Hello" />
        <h1>
          Marcus's Climate Counter 
        </h1>
        <CountdownTimer targetDate={dateTimeAfterTenYears}/>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/marcus-rehbock-52673b159/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Marcus Rehbock (19/04/22)
        </a>

      </header>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import Clock from './Clock.jsx';
import BreakSessionLengths from './BreakSessionLengths.jsx';
import Actions from './Actions.jsx'

function App() {
  const [sessionTimer, SetSessionTimer] = useState(25);
  let timerInterval;

  const handlePlay = () => {
    timerInterval = setInterval(() => {console.log('hi')},1000);
  }

  const handlePause = () => {
    clearInterval(timerInterval);
  }

  return (
    <div className="App">
      <div className="Title">Pomodoro Timer</div>
      <BreakSessionLengths/>
      <Clock time={sessionTimer}/>
      <Actions play={handlePlay} pause={handlePause}/>
    </div>
  );
}

export default App;

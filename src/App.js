import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Clock from './Clock.jsx';
import BreakSessionLengths from './BreakSessionLengths.jsx';
import Actions from './Actions.jsx'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeRemaining, setTimeRemaining] = useState(sessionLength*60);
  const currentInterval = useRef(null);
  const [intervalIsActive, setIntervalIsActive] = useState(false);
  const [intervalDidStart, setIntervalDidStart] = useState(false);
  let newTime;

  const updateCountdown = (e) => {
    newTime = timeRemaining;
    setTimeRemaining(newTime => newTime - 1);
    console.log('running');
  }

  const handlePlay = () => {
    const activeTimer = setInterval(updateCountdown, 1000);
    currentInterval.current = activeTimer;
    setIntervalIsActive(true);
  }
  
  const handlePause = () => {
    clearInterval(currentInterval.current);
    setIntervalIsActive(false);
  }
  
  const handleIncrease = e => {
    e.target.parentElement.className === 'NumberArrowContainerBreak' ? setBreakLength(breakLength + 1) : setSessionLength(sessionLength + 1);
  }
  
  const handleDecrease = e => {
    e.target.parentElement.className === 'NumberArrowContainerBreak' ? setBreakLength(breakLength - 1) : setSessionLength(sessionLength - 1);
  }
  
  const handleRestart = () => {
    setTimeRemaining(sessionLength*60);
    clearInterval(currentInterval.current);
    setIntervalIsActive(false);
    setIntervalDidStart(false);
    console.log(intervalDidStart);
  }
  
  const handlePlayPause = () => {
    if (intervalIsActive) {
      clearInterval(currentInterval.current);
      setIntervalIsActive(false);
      console.log(intervalDidStart);
    } else {
      const activeTimer = setInterval(updateCountdown, 1000);
      currentInterval.current = activeTimer;
      setIntervalIsActive(true);
      setIntervalDidStart(true);
      console.log(intervalDidStart);
    }
  }
  


  return (
    <div className="App">
      <div className="Title">
        <h1>Pomodoro Timer</h1>
        <h6>by Christian Vega</h6>
      </div>
      <BreakSessionLengths break={breakLength} session={sessionLength} increase={handleIncrease} decrease={handleDecrease}/>
      <Clock time={timeRemaining}/>
      <Actions playPause={handlePlayPause} pause={handlePause} restart={handleRestart} isActive={intervalIsActive} didStart={intervalDidStart}/>
    </div>
  );
}

export default App;

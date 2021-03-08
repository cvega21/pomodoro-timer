import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Clock from './Clock.jsx';
import BreakSessionLengths from './BreakSessionLengths.jsx';
import Actions from './Actions.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeRemaining, setTimeRemaining] = useState(sessionLength*60);
  const [intervalIsActive, setIntervalIsActive] = useState(false);
  const [sessionDidStart, setSessionDidStart] = useState(false);
  const [breakDidStart, setBreakDidStart] = useState(false);
  const currentInterval = useRef(null);

  useEffect(() => {
    console.log(timeRemaining);
    if (timeRemaining < 1 && sessionDidStart) {
      console.log('time under zero!');
      alert('break time!');
      setTimeRemaining(breakLength*60);
      setSessionDidStart(false);
      setBreakDidStart(true);
    } else if (timeRemaining < 1 && breakDidStart) {
      setTimeRemaining(sessionLength*60);
      setSessionDidStart(true);
      setBreakDidStart(false);      
    }
  }, [timeRemaining])

  const updateCountdown = (e) => {
    if (timeRemaining >= 1) {
      setTimeRemaining(newTime => newTime - 1);
    } else if (sessionDidStart) {
      console.log('session did start!')
      return;
    }
    console.log('running');
  }
  
  const handleIncrease = e => {
    let targetClassName = e.target.parentElement.className;
    
    if(targetClassName === 'NumberArrowContainerBreak' && timeIsValid(breakLength, "break", "up")) {
      setBreakLength(breakLength + 1);
    } else if (targetClassName === 'NumberArrowContainerSession' && timeIsValid(sessionLength, "session", "up")){
      let newSession = sessionLength + 1;
      setSessionLength(newSession);
      if (!sessionDidStart && !breakDidStart) {
        setTimeRemaining(newSession * 60);
      }
    }
  }
  
  const handleDecrease = e => {
    let targetClassName = e.target.parentElement.className;
    
    if(targetClassName === 'NumberArrowContainerBreak' && timeIsValid(breakLength, "break", "down")) {
      setBreakLength(breakLength - 1);
    } else if (targetClassName === 'NumberArrowContainerSession' && timeIsValid(sessionLength, "session", "down")){
      let newSession = sessionLength - 1;
      setSessionLength(newSession);
      if (!sessionDidStart && !breakDidStart) {
        setTimeRemaining(newSession*60);
      }
    }
  }
  
  const handleRestart = (type) => {
      setTimeRemaining(sessionLength*60);
      clearInterval(currentInterval.current);
      setIntervalIsActive(false);
      setSessionDidStart(false);
      setBreakDidStart(false);      
  }
  
  const handlePlayPause = () => {
    if (intervalIsActive) {
      console.log("pausing interval...");
      clearInterval(currentInterval.current);
      setIntervalIsActive(false);
    } else {
      console.log("starting interval...")
      const activeTimer = setInterval(updateCountdown, 1000);
      currentInterval.current = activeTimer;
      setIntervalIsActive(true);
      setSessionDidStart(true);
    }
  }
  
  const timeIsValid = (time, type, action) => {
    let lowerLimit = 1;
    let upperLimit = 20;
    if (type === "session") {
      upperLimit = 60;
      lowerLimit = 1;
    }
    if (action === "up" && time < upperLimit) {
      return true;
    } else if (action === "down" && time > lowerLimit) {
      return true;
    } else {
      return false;
    }

}

  return (
    <div className="App">
      <div className="Title">
        <h1>Pomodoro Timer</h1>
        <h6>by Christian Vega</h6>
      </div>
      <BreakSessionLengths break={breakLength} session={sessionLength} increase={handleIncrease} decrease={handleDecrease}/>
      <Clock time={timeRemaining} breakDidStart={breakDidStart}/>
      <Actions playPause={handlePlayPause} restart={handleRestart} isActive={intervalIsActive} sessionDidStart={sessionDidStart}/>
    </div>
  );
}

export default App;

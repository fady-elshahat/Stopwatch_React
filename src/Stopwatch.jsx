import React, { useState, useEffect } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0); 
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10); // update every 10 ms (0.01 sec)
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = () => {
    const minutes = String(Math.floor(time / 60000)).padStart(2, "0");
    const seconds = String(Math.floor((time % 60000) / 1000)).padStart(2, "0");
    const milliseconds = String((time % 1000) / 10).padStart(2, "0"); // two digits
    return `${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <div className="stopwatch-container">
      <h1 className="stopwatch-title">⏱️ Stopwatch</h1>
      <div className="stopwatch-time">{formatTime()}</div>
      <div className="stopwatch-buttons">
        <button onClick={() => setIsRunning(true)} className="btn start">Start</button>
        <button onClick={() => setIsRunning(false)} className="btn stop">Stop</button>
        <button onClick={() => { setTime(0); setIsRunning(false); }} className="btn reset">Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;

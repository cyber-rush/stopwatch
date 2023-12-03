import React, { useState, useRef } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startStopwatch = () => {
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 10); // Increment time by 10ms
      }, 10);
    } else {
      clearInterval(intervalRef.current);
    }
    setIsRunning(!isRunning);
  };

  const resetStopwatch = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = () => {
    const minutes = Math.floor((time / 60000) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    const milliseconds = Math.floor((time % 1000) / 10);

    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
    return formattedTime;
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-6xl font-bold mb-8">{formatTime()}</p>
        <div>
          <button className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded mr-4" onClick={startStopwatch}>
            {isRunning ? 'Stop' : 'Start'}
          </button>
          <button className="bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded" onClick={resetStopwatch}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;

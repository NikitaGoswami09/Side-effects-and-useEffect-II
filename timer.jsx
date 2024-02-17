// Timer.jsx
import React, { useState, useEffect } from 'react';

function Timer() {
  const initialCount = 60;
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 0) {
          clearInterval(interval);
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const resetTimer = () => {
    setCount(initialCount);
  };

  const pauseTimer = () => {
    clearInterval(interval);
  };

  const resumeTimer = () => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 0) {
          clearInterval(interval);
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);
  };

  return (
    <div>
      <h2>Timer: {count}</h2>
      <button onClick={resetTimer}>Reset</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resumeTimer}>Resume</button>
    </div>
  );
}

export default Timer;

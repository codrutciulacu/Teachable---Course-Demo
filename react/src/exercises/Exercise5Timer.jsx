import { useEffect, useState } from "react";

// Exercise 5: Timer
// Goal:
// - Start/Stop a timer that increments every second.
// - Add a Reset button.
// - Ensure the interval is cleaned up correctly.

export default function Exercise5Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // TODO: useEffect that starts/stops the interval based on isRunning.
  useEffect(() => {
    if(!isRunning) 
      return;

    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <section>
      <h2>Timer</h2>
      <p>Elapsed: {seconds}s</p>

      <div>
        <button type="button" onClick={() => setIsRunning(true)}>Start</button>
        <button type="button" onClick={() => setIsRunning(false)}>Stop</button>
        <button type="button" onClick={() => {setSeconds(0); setIsRunning(false); }}>Reset</button>
      </div>
    </section>
  );
}

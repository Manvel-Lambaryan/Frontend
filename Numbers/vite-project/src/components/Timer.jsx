import { useEffect, useRef, useState } from "react";

export default function Timer({ id, initial, onDelete, onDuplicate }) {
  const [time, setTime] = useState(initial);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (paused) return;

    intervalRef.current = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [paused]);

  const togglePause = () => setPaused((p) => !p);

  return (
    <div className="timer-card">
      <div className="timer-value">{time}</div>

      <div className="timer-buttons">
        <button className="btn small-btn pause-btn" onClick={togglePause}>
          {paused ? "Continue" : "Pause"}
        </button>

        <button
          className="btn small-btn duplicate-btn"
          onClick={() => onDuplicate(id)}
        >
          Duplicate
        </button>

        <button
          className="btn small-btn delete-btn"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

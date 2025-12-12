import { useState } from "react";
import Timer from "./Timer";

export default function Dashboard() {
  const [timers, setTimers] = useState([]);

  const createTimer = () => {
    const randomStart = Math.floor(Math.random() * 20) + 5;
    const newTimer = {
      id: Date.now() + Math.random(),
      initial: randomStart,
    };
    setTimers([...timers, newTimer]);
  };

  const deleteTimer = (id) => {
    setTimers(timers.filter((t) => t.id !== id));
  };

  const duplicateTimer = (id) => {
    const original = timers.find((t) => t.id === id);
    if (!original) return;

    const copy = {
      id: Date.now() + Math.random(),
      initial: original.initial,
    };
    setTimers([...timers, copy]);
  };

  return (
    <div className="dashboard">
      <button className="btn neon-btn" onClick={createTimer}>
        + Create Timer
      </button>

      <div className="timers-grid">
        {timers.map((t) => (
          <Timer
            key={t.id}
            id={t.id}
            initial={t.initial}
            onDelete={deleteTimer}
            onDuplicate={duplicateTimer}
          />
        ))}
      </div>
    </div>
  );
}

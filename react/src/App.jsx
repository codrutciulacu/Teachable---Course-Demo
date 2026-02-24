import { useState } from "react";
import "./App.css";

import Exercise1Counter from "./exercises/Exercise1Counter.jsx";
import Exercise2Toggle from "./exercises/Exercise2Toggle.jsx";
import Exercise3Form from "./exercises/Exercise3Form.jsx";
import Exercise4Filter from "./exercises/Exercise4Filter.jsx";
import Exercise5Timer from "./exercises/Exercise5Timer.jsx";

const EXERCISES = [
  { id: "counter", title: "Exercise 1: Counter", Component: Exercise1Counter },
  { id: "toggle", title: "Exercise 2: Toggle", Component: Exercise2Toggle },
  { id: "form", title: "Exercise 3: Form", Component: Exercise3Form },
  { id: "filter", title: "Exercise 4: Filter", Component: Exercise4Filter },
  { id: "timer", title: "Exercise 5: Timer", Component: Exercise5Timer },
];

function App() {
  const [activeId, setActiveId] = useState(EXERCISES[0].id);
  const activeExercise = EXERCISES.find((item) => item.id === activeId);
  const ActiveComponent = activeExercise?.Component ?? Exercise1Counter;

  return (
    <div className="app">
      <header className="app-header">
        <div>
          <p className="eyebrow">React Practice</p>
          <h1>Simple Exercises</h1>
          <p className="subhead">
            Pick one exercise at a time. Each file has TODOs to complete.
          </p>
        </div>
        <div className="status">
          <span>Selected</span>
          <strong>{activeExercise?.title ?? "Exercise 1: Counter"}</strong>
        </div>
      </header>

      <main className="layout">
        <nav className="exercise-list" aria-label="Exercises">
          {EXERCISES.map((exercise) => (
            <button
              key={exercise.id}
              type="button"
              className={
                exercise.id === activeId ? "exercise active" : "exercise"
              }
              onClick={() => setActiveId(exercise.id)}
            >
              {exercise.title}
            </button>
          ))}
        </nav>

        <section className="exercise-panel">
          <ActiveComponent />
        </section>
      </main>
    </div>
  );
}

export default App;

import { useState } from "react";

function getFullName(obj) {
  return obj.name + " " + obj.surname.toLowercase()
}

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: "2rem" }}>
      <h1>React App</h1>
      <p>
        Count: <span data-testid="count">{count}</span>
      </p>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        Increment
      </button>
    </main>
  );
}

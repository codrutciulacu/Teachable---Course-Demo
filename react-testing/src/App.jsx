import { useState, useEffect } from "react";

function getFullName(obj) {
  return obj.name + " " + obj.surname.toLowercase()
}

export default function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [name, setName] = useState("");
  const [name2, setName2] = useState("");

  useEffect(() => {
    async function fetchData() {
      let res = await fetch("https://randomuser.me/api/");
      let json = await res.json()

      setName2(json.results[0].name.first)
    }
    
    fetchData()
  }, [])

  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: "2rem" }}>
      <h1>React App</h1>
      <p>
        Count: <span data-testid="count">{count}</span>
      </p>
      <p>
        Count2: <span data-testid="count2">{count2}</span>
      </p>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        Increment
      </button>

      <button type="button" onClick={() => setName("My Name")}>Set Name</button>
      <button type="button" onClick={() => setName("")}>Reset</button>
      <input value={name} onChange={(e) => setName(e.target.value)} />

      <div data-testid="name">{name ? name : "Loading..."}</div>
      <div data-testid="name2">{name2 ? name2 : "Loading..."}</div>
    </main>
  );
}

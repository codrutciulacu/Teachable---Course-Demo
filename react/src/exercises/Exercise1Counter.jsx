import { useState } from "react";

// Exercise 1: Counter
// Goal:
// - Build a counter with Increment, Decrement, and Reset buttons.
// - Disable Decrement when the count is 0.
// - Show a message when the count reaches 10.

export default function Exercise1Counter() {
  const [count, setCount] = useState(0);
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  // TODO: wire up the buttons to update state.
  // TODO: disable Decrement when count === 0.
  // TODO: show the "Reached 10!" message when count === 10.

  return (
    <section>
      <h2>Counter</h2>
      <p>Count: {count}</p>

      <div>
        <button type="button" onClick={() => { if(count > 0) setCount(count - 1)}}>Decrement</button>
        <button type="button" onClick={() => {setCount(count + 1)}}>Increment</button>
        <button type="button" onClick={() => {setCount(0)}}>Reset</button>
      </div>

      {
        numbers.map((values) => (
          <p>{values}</p>
        ))
      }

      <p>{(count >= 10) && (
        <>Reached 10!</>
      )}</p>

      <p>{
          (count >= 10) ?
          (
            <p>Reached 10!</p>
          ) :
          (
            <p>Below 10!</p>
          )
        }</p>
    </section>
  );
}

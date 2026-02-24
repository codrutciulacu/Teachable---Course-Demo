import { useState } from "react";

// Exercise 2: Toggle Details
// Goal:
// - Clicking the button shows/hides the details.
// - Button text should change between "Show" and "Hide".
// - Add a small counter of how many times the toggle was clicked.
// - Show Here are some details. Hide me and show me to complete the exercise. on screen when open otherwise nothing

export default function Exercise2Toggle() {
  const [isOpen, setIsOpen] = useState(false);
  const [clicks, setClicks] = useState(0);

  // TODO: implement toggle handler.

  const handleToggle = () => {setIsOpen(!isOpen); setClicks(clicks + 1)}

  return (
    <section>
      <h2>Toggle Details</h2>

      <button type="button" onClick={handleToggle}>
        {/* TODO: switch label based on isOpen */}
        { isOpen ? (<>Hide</>) : (<>Show</>)}
      </button>

      <p>Clicks: {clicks}</p>

    </section>
  );
}

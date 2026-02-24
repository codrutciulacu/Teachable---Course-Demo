import { useMemo, useState } from "react";

// Exercise 4: Filter List
// Goal:
// - Filter a list of items based on the search input.
// - Show a "no results" message if nothing matches.
// - Make the filter case-insensitive.

const ITEMS = [
  "Apple",
  "Banana",
  "Blueberry",
  "Grape",
  "Mango",
  "Orange",
  "Peach",
  "Pineapple",
  "Strawberry",
  "Watermelon",
];

export default function Exercise4Filter() {
  const [query, setQuery] = useState("");

  // TODO: implement case-insensitive filtering. with useMemo hook
  // 
  const results = useMemo(() => {

    return ITEMS
            .map((elem) => elem.toLowerCase())
            .filter((elem) => { return elem.includes(query) })
  }, [query])

  return (
    <section>
      <h2>Filter List</h2>

      <input
        type="text"
        placeholder="Search fruit..."
        value={query}
        onChange={(event) => setQuery(event.target.value.toLowerCase())}
      />

      {/* TODO: render No results. Try another search. if no element present otherwise render all in a ul*/}
      {results.length === 0 ? (
        <p>No results</p>
      ) : (
        <ul>
          {results.map((elem) => (
            <li key={elem}>{elem}</li>
          ))}
        </ul>
      )}

    </section>
  );
}

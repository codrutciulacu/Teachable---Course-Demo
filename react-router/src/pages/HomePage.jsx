import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <section>
      <h2>Home</h2>
      <p>Welcome to the home page.</p>
      <Link to="/about">Go to About</Link>
    </section>
  );
}

import { Link } from "react-router";
import type { Route } from "./+types/about";

export function meta() {
  return [{ title: "Framework Mode - About" }];
}

export default function About(_props: Route.ComponentProps) {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", padding: 24 }}>
      <h1>About (Framework Mode)</h1>
      <p>This route module is discovered from app/routes.ts.</p>
      <p>
        <Link to="/">Back Home</Link>
      </p>
    </main>
  );
}

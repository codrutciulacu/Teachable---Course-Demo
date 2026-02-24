import { Form, Link } from "react-router";
import type { Route } from "./+types/home";

export function meta() {
  return [{ title: "Framework Mode - Home" }];
}

export async function loader() {
  return { message: "Loaded on the server in Framework Mode" };
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const name = String(formData.get("name") || "anonymous");
  return { greeting: `Hello, ${name}` };
}

export default function Home({ loaderData, actionData }: Route.ComponentProps) {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", padding: 24 }}>
      <h1>Framework Mode</h1>
      <p>{loaderData.message}</p>

      <Form method="post">
        <label htmlFor="name">Name: </label>
        <input id="name" name="name" />
        <button type="submit">Submit</button>
      </Form>

      {actionData?.greeting ? <p>{actionData.greeting}</p> : null}

      <p>
        <Link to="/about">Go to About</Link>
      </p>
    </main>
  );
}

export default function ErrorPage() {
  const error = useRouteError();
  let message = "Something went wrong while loading this route.";

  if (isRouteErrorResponse(error)) {
    message = `${error.status} ${error.statusText}`;
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <section>
      <h2>Route Error</h2>
      <p>{message}</p>
    </section>
  );
}
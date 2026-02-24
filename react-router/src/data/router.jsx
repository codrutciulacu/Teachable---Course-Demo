import {
  createHashRouter,
  isRouteErrorResponse,
  Link,
  Outlet,
  useRouteError,
  useLoaderData
} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";


function rootLoader() {
  return {
    message: "Loaded with a route loader"
  };
}

function App() {
  const data = useLoaderData();

  return (
    <div className="app">
      <header>
        <h1>Data Router Example</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <main>
        <p>{data.message}</p>
        <Outlet />
      </main>
    </div>
  );
}

export const router = createHashRouter([
  {
    path: "/",
    loader: rootLoader,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "*", element: <ErrorPage /> }
    ]
  }
]);

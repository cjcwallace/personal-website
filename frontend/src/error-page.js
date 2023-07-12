import React from "react"
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <main>
        <div id="error-page">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
              <i>{error.statusText || error.message}</i>
          </p>
          <Link id="error-home-button" to="/">click me to return home</Link>
        </div>
    </main>
  );
}

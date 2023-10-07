import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Page is not found</h1>
        <p>Looks like you followed wrong link ❌</p>
      <p>
        <Link to="/">👈🏻 Back to our site</Link>
      </p>
    </div>
  );
};

export default ErrorPage;

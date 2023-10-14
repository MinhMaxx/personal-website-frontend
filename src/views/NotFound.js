import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <section className="not-found jumbotron jumbotron-fluid">
      <div className="not-found-text container">
        <h1 className="display-4">Uh Oh!</h1>
        <h1 className="display4">Maybe you came to the wrong place?</h1>
        <h2>
          Click here to{" "}
          <a
            className="gradient-text"
            href="/"
            style={{ color: "inherit", textDecoration: "underline" }}
          >
            go home
          </a>
          .
        </h2>
      </div>
    </section>
  );
};

export default NotFound;

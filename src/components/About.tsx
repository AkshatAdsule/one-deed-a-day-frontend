import React, { ReactElement } from 'react';

function About(): ReactElement {
  return (
    <div className="center">
      <div className="jumbotron">
        <h1 className="display-4">One deed a day</h1>
        <p className="lead">
          By doing just one thing a day, you can improve the lives of people
          near you
        </p>
        <hr className="my-4" />
        <p>
          Create deeds for everyone to do, and do other&apos;s deeds to help
          out!
        </p>
        <a
          className="btn btn-lg btn-outline-light"
          href="/signup"
          role="button">
          Sign up
        </a>
      </div>
    </div>
  );
}

export default About;

import React from "react";
import { Link } from "react-router-dom";

const Landing_Competition = () => {
  return (
    <div className="container">
      <div className="landing-competition">
        <p className="ld-comp-quote-top">
          "The competition itself is Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Eveniet, similique? Iure, nobis repudiandae.
          Quibusdam tenetur temporibus debitis fugiat.{" "}
          <span>Biggest event of the millenium.</span>"
        </p>
        <div className="landing-competition-quote">
          <p>You will work to solve the problem of company X in the finals</p>
        </div>
        <Link className="learn-more">{"Learn More >"}</Link>
      </div>
    </div>
  );
};

export default Landing_Competition;

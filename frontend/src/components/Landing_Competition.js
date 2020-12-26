import React from "react";
import { Link } from "react-router-dom";
import Landing_Competition2 from "components/Landing_Competition2";

const Landing_Competition = () => {
  return (
    <div className="container">
      <div className="landing-competition">
          <p className="ld-comp-quote-top">
            Join us to experience a competition like never before. Innovate your way to the chance of
            connecting with fellow game-changers and to be mentored by the experts. Win the grand prize a
            total of 8 million rupiah and internship opportunity in our case contributor’s company.
          </p>
        <Landing_Competition2 />
        <Link to="/competition" className="learn-more">
          <p className="clickable"> Learn more ></p>
        </Link>
      </div>
    </div>
  );
};

export default Landing_Competition;

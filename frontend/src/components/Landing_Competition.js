import React from "react";
import { Link } from "react-router-dom";
import Landing_Competition2 from "components/Landing_Competition2";

const Landing_Competition = () => {
  return (
    <div className="container">
      <div className="landing-competition">
<<<<<<< HEAD
        <p className="ld-comp-quote-top">
          Join us to experience a competition like never before. Innovate your way to the chance of
          connecting with fellow game-changers and to be mentored by the experts. Win the grand prize a
          total of 8 million rupiah and internship opportunity in our case contributor’s company.
        </p>
        <div className="landing-competition-types">
          <ul>
            <li>
              <h3>Operations</h3>
              <p>
                In this sector, Paterion.id, an online class and try out platform, will give you a case of blablabla
              </p>
            </li>
            <li>
              <h3>Marketing</h3>
              <p>
                You will need to open your mind to create the most creative idea to solve EolaPlus case in
                blablala
              </p>
            </li>
            <li>
              <h3>EHS</h3>
              <p>
                EcoPlast, an environmental startup that is eager to blablabla
              </p>
            </li>
          </ul>
=======
        <div className="landing-competition1">
          <p className="ld-comp-quote-top">
            Join us to experience a competition like never before. Innovate your way to the chance of
            connecting with fellow game-changers and to be mentored by the experts. Win the grand prize a
            total of 8 million rupiah and internship opportunity in our case contributor’s company.
          </p>
>>>>>>> e9e80c3bd613e01c20441aa4a1724e88a1c943b4
        </div>
        <Landing_Competition2 />
        <Link to="/competition" className="learn-more">{"Learn More >"}</Link>
      </div>
    </div>
  );
};

export default Landing_Competition;

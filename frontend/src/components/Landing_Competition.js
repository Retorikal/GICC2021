import React from "react";
import { Link } from "react-router-dom";

const Landing_Competition = () => {
  return (
    <div className="container">
      <div className="landing-competition">
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
        </div>
        <Link to="/competition" className="learn-more clickable">{"Learn More >"}</Link>
      </div>
    </div>
  );
};

export default Landing_Competition;

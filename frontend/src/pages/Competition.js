import React from "react";
import { Link } from "react-router-dom";
import BlueContainer from "components/BlueContainer";
import Landing_Competition2 from "components/Landing_Competition2";
import Title from "components/Title";
import potrait_1 from "images/potrait-1.jpg";

const Competition = () => {
  return (
    <div className="content">
      <div className="container">
        <div className="competition-hero">
          <Title text={"Competition"} />
          <div>
            <p>
              <span>Ganesha Integration Case Competition 2021</span> is a program that prepares ITB students to face
              real-world industrial problems and innovate an advancement that improves the key sectors of
              companies..

              In the preliminary phase, participants must develop a strategy-based solution for the distributed
              case to help companies achieve their goals. Five most eligible participants of each sector will be
              chosen to be finalists and combined into a team of three. Each team must develop a solution for
              the issues given by the case contributor together and present it to the judges and company
              stakeholders to win the final prize.
            </p>
          </div>
          <div className="guidebook-button">
            <button>View the guidebook here</button>
          </div>
        </div>
      </div>

      <BlueContainer title={"Who you will solve cases for"} />

      <Landing_Competition2 />

      <BlueContainer title={"Timeline"} />

      <div className="container">
        <div className="strategicc-timeline">
          <h2>Mock</h2>
          <h1>Timeline</h1>
          <button>Sign up for this event</button>
        </div>
      </div>

      <BlueContainer title={"Benefits and Awards"} />

      <div className="container">
        <div className="competition-awards">
          <h1>Awards</h1>
          <ul>
            <li>
              <img src={potrait_1} />
              <h3>Team Champion</h3>
              <h4>IDR</h4>
            </li>
            <li>
              <img src={potrait_1} />
              <h3>Best Team Prize</h3>
              <h4>IDR</h4>
            </li>
            <li>
              <img src={potrait_1} />
              <h3>Best Speaker</h3>
              <h4>IDR</h4>
            </li>
          </ul>
          <ul>
            <li>
              <img src={potrait_1} />
              <h3>1st Individual Winner of Operation</h3>
              <h4>IDR</h4>
            </li>
            <li>
              <img src={potrait_1} />
              <h3>1st Individual Winner of Marketing</h3>
              <h4>IDR</h4>
            </li>
            <li>
              <img src={potrait_1} />
              <h3>1st Individual Winner of EHS</h3>
              <h4>IDR</h4>
            </li>
          </ul>
          <h2>Benefits</h2>
          <ul>
            <li>
              <img src={potrait_1} />
              <h4>Connect with game-changers from all over Indonesia</h4>
            </li>
            <li>
              <img src={potrait_1} />
              <h4>Mentored by the experts in their respective field</h4>
            </li>
            <li>
              <img src={potrait_1} />
              <h4>Internship opportunity on case contributor’s company</h4>
            </li>
            <li>
              <img src={potrait_1} />
              <h4>e-Certificate</h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Competition;

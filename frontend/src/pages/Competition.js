import React from "react";
import { Link } from "react-router-dom";
import BlueContainer from "components/BlueContainer";
import Landing_Competition from "components/Landing_Competition";
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
              <span>GICC</span> islorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
          <div className="guidebook-button">
            <button>View the guidebook here</button>
          </div>
        </div>
      </div>

      <BlueContainer title={"Who You Will Solve Cases For"} />

      <Landing_Competition />

      <BlueContainer title={"Registration & Timeline"} />

      <div className="container">
        <div className="strategicc-timeline">
          <h2>Mock</h2>
          <h1>Timeline</h1>
          <button>Sign up for this event</button>
        </div>
      </div>

      <BlueContainer title={"Awards"} />

      <div className="container">
        <div className="competition-awards">
          <h2>Congratulations to</h2>
          <h1>Our Proud Winners!</h1>
          <ul>
            <li>
              <img src={potrait_1} />
              <h3>Name</h3>
              <h4>Text</h4>
            </li>
            <li>
              <img src={potrait_1} />
              <h3>Name</h3>
              <h4>Text</h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Competition;

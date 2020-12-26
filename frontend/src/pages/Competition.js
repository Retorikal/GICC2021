import BlueContainer from "components/BlueContainer";
import Footer from "components/Footer";
import Landing_Competition2 from "components/Landing_Competition2";
import potrait_1 from "images/potrait-1.jpg";
import React from "react";
import Timeline from "components/Competition_Timeline"
import Title from "components/Title";
import { Link } from "react-router-dom";

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
              companies. <br/><br/>

              In the preliminary phase, participants must develop a strategy-based solution for the distributed
              case to help companies achieve their goals. Five most eligible participants of each sector will be
              chosen to be finalists and combined into a team of three.<br/><br/>

              Finalist teams are then to develop a solution for
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

      <Timeline/>

      <BlueContainer title={"Benefits and Awards"} />

      <div className="container">
        <div className="competition-awards">
          <h1>Awards</h1>
          <div className="awards1">
            <div className="aw-be">
              <img src={potrait_1} />
              <h3>Team Champion</h3>
              <h4>IDR</h4>
            </div>
            <div className="aw-be">
              <img src={potrait_1} />
              <h3>Best Team Prize</h3>
              <h4>IDR</h4>
            </div>
            <div className="aw-be">
              <img src={potrait_1} />
              <h3>Best Speaker</h3>
              <h4>IDR</h4>
            </div>
          </div>
          <div className="awards2">
            <div className="aw-be">
              <img src={potrait_1} />
              <h3>1st Individual Winner of Operation</h3>
              <h4>IDRinisengaja panjang banget hehehe</h4>
            </div>
            <div className="aw-be">
              <img src={potrait_1} />
              <h3>1st Individual Winner of Marketing</h3>
              <h4>IDR</h4>
            </div>
            <div className="aw-be">
              <img src={potrait_1} />
              <h3>1st Individual Winner of EHS</h3>
              <h4>IDR</h4>
            </div>
          </div>
          <h2>Benefits</h2>
          <div className="benefits">
            <div className="aw-be2">
              <img src={potrait_1} />
              <h4>Connect with game-changers from all over Indonesia</h4>
            </div>
            <div className="aw-be2">
              <img src={potrait_1} />
              <h4>Mentored by the experts in their respective field</h4>
            </div>
            <div className="aw-be2">
              <img src={potrait_1} />
              <h4>Internship opportunity on case contributor’s company</h4>
            </div>
            <div className="aw-be2">
              <img src={potrait_1} />
              <h4>e-Certificate</h4>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Competition;

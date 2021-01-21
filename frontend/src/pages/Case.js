import BlueContainer from "components/BlueContainer";
import Landing_Competition2 from "components/Landing_Competition2";
import Footer from "components/Footer";
import Title from "components/Title";
import potrait_1 from "images/potrait-1.jpg";
import React from "react";
import Timeline from "components/Competition_Timeline"
import FAQ from "components/Competition_FAQ"
import Guidebook from "files/GICC_2021_Guidebook.pdf"
import { Awards, Benefits } from "components/Competition_Awards"
import { Link } from "react-router-dom";

const Case = () => {
  return (
    <div className="content">
      <div className="container">
        <div className="competition-hero">
          <Title text={"Case"} />
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
          <a href={Guidebook}><div className="guidebook-button">
            <button class="clickable">View the guidebook here</button>
          </div></a>
        </div>
      </div>
    </div>
  );
};

export default Case;

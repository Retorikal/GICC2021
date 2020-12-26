import React from "react";
import iconEh from "images/Asset 2@4x-8.png";
import iconOp from "images/Asset 3@4x-8.png";
import iconMa from "images/Asset 4@4x-8.png";

const Landing_Competition2 = () => {
  return (
    <div className="container">
      <div className="landing-competition2">

        <div className="land-comp2-content">
          <img className="icon" src={iconOp} />
          <p>
            Paterion.id
          </p>
        </div>

        <div className="land-comp2-content">
          <img className="icon" src={iconMa} />
          <p>
            You will need to open your mind to create the most creative idea to solve EolaPlus case in
            blablala
          </p>
        </div>

        <div className="land-comp2-content">
          <img className="icon" src={iconEh} />
          <p>
            EcoPlast, an environmental startup that is eager to blablabla
          </p>
        </div>

      </div>
    </div>
  );
};

export default Landing_Competition2;

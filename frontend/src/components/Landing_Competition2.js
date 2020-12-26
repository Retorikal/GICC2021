import React from "react";
import iconEh from "images/Asset 2@4x-8.png";
import iconOp from "images/Asset 3@4x-8.png";
import iconMa from "images/Asset 4@4x-8.png";

const Landing_Competition2 = () => {
  return (
    <div className="container">
      <div className="landing-competition">
        <div className="land-comp2-op">
          <img className="icon-op" src={iconOp} />
          <p>
            In this sector, Paterion.id, an online class and try out platform, will give you a case of blablabla sengaja dibuat panjang banget buat ngetes hehehehhehehe
          </p>
        </div>
        <div className="land-comp2-ma">
          <img className="icon-ma" src={iconMa} />
          <p>
            You will need to open your mind to create the most creative idea to solve EolaPlus case in
            blablala
          </p>
        </div>
        <div className="land-comp2-eh">
          <img className="icon-eh" src={iconEh} />
          <p>
            EcoPlast, an environmental startup that is eager to blablabla
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing_Competition2;

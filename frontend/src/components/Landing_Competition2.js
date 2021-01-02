import React from "react";
import iconEh from "images/Asset 2@4x-8.png";
import iconOp from "images/Asset 3@4x-8.png";
import iconMa from "images/Asset 4@4x-8.png";

import eola from "images/eolalogo.png"
import pateron from "images/pateronlogo.png"
import ecoplast from "images/ecoplastlogo.png"

const Landing_Competition2 = () => {
  return (
    <div className="container">
      <div className="landing-competition2">

        <div className="land-comp2-content">
          <div>
            <img className="icon" src={iconOp} />
            <img className="company" src={pateron} />
          </div>
          <p>
            Pateron is an edutech startup that focuses on helping students pass the SBMPTN test. Established in 2018, Pateron provides quality, creative and technology-based learning guidance and training in improving the quality of education in Indonesia.
          </p>
        </div>

        <div className="land-comp2-content">
          <div>
            <img className="icon" src={iconMa} />
            <img className="company" src={eola} />
          </div>
          <p>
            EOLA+ is a start up that aims to revolutionize how event organizing is executed. The company utilize millenial creative approach through social media to penetrate the well established market, providing customer with unique event concept, suited for millenials.
          </p>
        </div>

        <div className="land-comp2-content">
          <div>
            <img className="icon" src={iconEh} />
            <img className="company" src={ecoplast} />
          </div>
          <p>
            Ecoplast Indonesia is a startup that develops bioplastics from agro-industrial waste, from food packaging, straws, plastic bags, and plastic spoons.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Landing_Competition2;

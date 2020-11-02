import React from "react";
import Title from "../components/Title";
import potrait_1 from "../images/potrait-1.jpg";

const Minicc_Hero = () => {
  return (
    <div className="container">
      <div className="strategicc-hero">
        <Title text={"MiniCC"} />
        <div>
          <div>
            <p>
              <span>StrateGICC</span> is Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Non, vel blanditiis aut ipsum perspiciatis
              soluta officiis nihil quis. Here are our{" "}
              <span> esteemed speakers:</span>
            </p>
          </div>
          <div className="speakers">
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
              <li>
                <img src={potrait_1} />
                <h3>Name</h3>
                <h4>Text</h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Minicc_Hero;

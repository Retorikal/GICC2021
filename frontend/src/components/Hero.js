import React from "react";
import Title from "components/Title";

const Hero = () => {
  return (
    <div className="container">
      <div className="hero">
        <Title text={"GICC 2021"} />
        <ul>
          <li className="hero-li">
            <p className="hero-p">
              <span className="hero-span">GICC</span> is Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Non, vel blanditiis aut ipsum
              perspiciatis soluta officiis nihil quis.
            </p>
          </li>
          <li className="hero-li">
            <p className="hero-p">
              Our <span className="hero-span">objectives</span> are to Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
              ducimus error accusamus reiciendis iusto repellendus odio!
              Possimus, porro.
            </p>
          </li>
          <li className="hero-li">
            <p className="hero-p">
              So why should <span className="hero-span">you</span> join us Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Aperiam eius
              nobis quod atque soluta commodi molestias.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;

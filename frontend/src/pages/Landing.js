import React from "react";
import Hero from "components/Hero";
import BlueContainer from "components/BlueContainer";
import Landing_Preevent from "components/Landing_Preevent";
import Landing_Competition from "components/Landing_Competition";

const Landing = () => {
  return (
    <div className="content">
      <Hero />
      <BlueContainer title={"Pre Events"} />
      <Landing_Preevent />
      <BlueContainer title={"Competition"} />
      <Landing_Competition />
    </div>
  );
};

export default Landing;

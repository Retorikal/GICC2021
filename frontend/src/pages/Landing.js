import React from "react";
import BlueContainer from "components/BlueContainer";
import Landing_Preevent from "components/Landing_Preevent";
import Landing_Competition from "components/Landing_Competition";
import Landing_Title from "components/Landing_Title";
import Footer from "components/Footer";

const Landing = () => {
  return (
    <div className="content">
      <Landing_Title />
      <BlueContainer title={"Pre Events"} />
      <Landing_Preevent />
      <BlueContainer title={"Competition"} />
      <Landing_Competition />
      <Footer />
    </div>
  );
};

export default Landing;

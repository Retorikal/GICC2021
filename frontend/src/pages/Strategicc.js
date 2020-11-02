import React from "react";
import BlueContainer from "../components/BlueContainer";
import Strategicc_Hero from "../components/Strategicc_Hero";
import Strategicc_Timeline from "../components/Strategicc_Timeline";

const Strategicc = () => {
  return (
    <div>
      <Strategicc_Hero />
      <BlueContainer title={"Timeline"} />
      <Strategicc_Timeline />
    </div>
  );
};

export default Strategicc;

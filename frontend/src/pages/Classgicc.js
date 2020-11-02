import React from "react";
import BlueContainer from "../components/BlueContainer";
import Classgicc_Hero from "../components/Classgicc_Hero";
import Classgicc_Timeline from "../components/Classgicc_Timeline";

const Classgicc = () => {
  return (
    <div>
      <Classgicc_Hero />
      <BlueContainer title={"Timeline"} />
      <Classgicc_Timeline />
    </div>
  );
};

export default Classgicc;

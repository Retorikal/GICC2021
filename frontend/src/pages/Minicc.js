import React from "react";
import BlueContainer from "components/BlueContainer";
import Minicc_Hero from "components/Minicc_Hero";
import Minicc_Timeline from "components/Minicc_Timeline";

const Minicc = () => {
  return (
    <div className = "content">
      <Minicc_Hero />
      <BlueContainer title={"Timeline"} />
      <Minicc_Timeline />
    </div>
  );
};

export default Minicc;

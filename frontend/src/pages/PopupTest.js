import Popup from "components/Popup/Popup";
import { UsePopup } from "context/PopupContext";
import React, { useState } from "react";

const PopupTest = () => {
  const { showPopup, togglePopup } = UsePopup();

  return (
    <div>
      <h1>Hello world</h1>
      {showPopup ? (
        <Popup
          errorMsg={
            "Test popup Test popup Test popup Test popup Test popup Test popup"
          }
          togglePopup={togglePopup}
          type="succes"
        />
      ) : null}
      <button onClick={togglePopup}>Show Popup</button>
    </div>
  );
};

export default PopupTest;

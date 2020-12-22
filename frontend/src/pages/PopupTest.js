import Popup from "components/Popup/Popup";
import { UsePopup } from "context/Popup";
import React from "react";

const PopupTest = () => {
  const { showPopup, togglePopup } = UsePopup();

  return (
    <div>
      <h1>Hello world</h1>
      {showPopup ? (
        <Popup
          msg={
            "Test popup Test popup Test popup Test popup Test popup Test popup"
          }
          togglePopup={togglePopup}
          type="success"
        />
      ) : null}
      <button className="btn btn-primary" onClick={togglePopup}>
        Show Popup
      </button>
    </div>
  );
};

export default PopupTest;

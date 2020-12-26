import React, { createContext, useContext, useState } from "react";

export const PopupContext = createContext();

export const UsePopup = () => useContext(PopupContext);

const PopupContextProvider = ({ children }) => {
  const [show, setShowPopup] = useState(false);
  const [msg, setPopupMsg] = useState("");
  const [type, setPopupType] = useState("");

  const toggle = () =>{
    // TODO: Set supaya mati in several secs
    setShowPopup(!show);
  }

  const showPopup = (new_msg, new_state) =>{
    setPopupMsg(new_msg);
    setPopupType(new_state);
    setShowPopup(true);

    setTimeout(() => {setShowPopup(false)}, 2000);
  }

  return (
    <PopupContext.Provider value={{show, msg, type, showPopup, toggle}}>
      {children}
    </PopupContext.Provider>
  );
};

export default PopupContextProvider;

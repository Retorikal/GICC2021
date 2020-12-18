import React, { createContext, useContext, useState } from "react";

export const PopupContext = createContext();

export const UsePopup = () => useContext(PopupContext);

const PopupContextProvider = ({ children }) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <PopupContext.Provider
      value={{
        showPopup,
        togglePopup,
      }}
    >
      {children}
    </PopupContext.Provider>
  );
};

export default PopupContextProvider;

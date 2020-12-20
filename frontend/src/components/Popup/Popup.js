import React from "react";

const Popup = ({ togglePopup, msg, type }) => {
  const getPopupTitle = (type) => {
    if (type === "error") {
      return "Error";
    } else if (type === "success") {
      return "Success";
    } else if (type === "info") {
      return "Info";
    } else if (type === "warning") {
      return "Warning";
    } else {
      return "Undefined";
    }
  };

  const getPopupColor = (type) => {
    if (type === "error") {
      return "#FF5353";
    } else if (type === "success") {
      return "#4CB050";
    } else if (type === "info") {
      return "#3DBFF1";
    } else if (type === "warning") {
      return "#FF9700";
    } else {
      return "#263036";
    }
  };
  return (
    <>
      <div className="popup-error">
        <div className="popup-error-inner">
          <h1 className="popup-title">{getPopupTitle(type)}</h1>
          <p className="popup-message">{msg}</p>
          <div className="popup-btn-container">
            <button className="popup-btn-close" onClick={togglePopup}>
              Close
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .popup-error {
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            background-color: rgba(0, 0, 0, 0.5);
          }
          .popup-error-inner {
            position: absolute;
            left: 25%;
            right: 25%;
            top: 5%;

            margin: auto;
            background: ${getPopupColor(type)};
          }

          .popup-btn-container {
            display: flex;
            justify-content: flex-end;
          }

          .popup-title,
          .popup-message {
            margin-left: 1.5rem;
            color: white;
          }

          .popup-message {
            font-size: 1.25rem;
          }

          .popup-btn-close {
            margin-right: 1.5rem;
            margin-bottom: 1.5rem;
            border: none;
            font-size: 1.5rem;
            background-color: white;
            padding: 0.25rem 1rem;
            border-radius: 5px;
            font-family: Overpass;
            font-weight: 600;
          }

          .popup-btn-close:focus {
            outline: none;
          }

          @media only screen and (max-width: 576px) {
            .popup-error-inner {
              left: 5%;
              right: 5%;
            }
          }
        `}
      </style>
    </>
  );
};

export default Popup;

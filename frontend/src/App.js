import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import AuthContextProvider, { useAuth, AuthContext } from "context/Auth.js";

import Navbar from "components/Navbar";
import Landing from "pages/Landing";
import Preevent from "pages/Preevent";
import Competition from "pages/Competition";
import Login from "pages/Login";
import Profile from "pages/Profile";
import Strategicc from "pages/Strategicc";
import Classgicc from "pages/Classgicc";
import Minicc from "pages/Minicc";
import Register from "pages/Register";

import "App.css";
import Popup from "components/Popup/Popup";
import PopupContextProvider, { PopupContext, UsePopup } from "context/Popup";

const App = () => {
  //const popup = UsePopup();

  return (
    <PopupContextProvider>
      <AuthContextProvider>
        <Router>
          <Navbar />
          <PopupContext.Consumer>
            {(popup) => {
              return (
                <Popup
                  togglePopup={popup.toggle}
                  msg={popup.msg}
                  type={popup.type}
                  enabled={popup.show}
                />
              );
            }}
          </PopupContext.Consumer>
          <Route exact path="/" component={Landing} />
          <Route path="/competition" component={Competition} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Router>
      </AuthContextProvider>
    </PopupContextProvider>
  );
};

export default App;

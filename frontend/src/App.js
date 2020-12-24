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

/*async function authenticate(user, pass){
  let url = "/app/token/";
  let init = {
    method: 'POST',
    mode: 'cors',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'username': user,
      'password': pass
    })
  };
  let response = await fetch(url, init);
  let data = "";
  
  if (response.status > 400)
    data = { 
      access: null,
      placeholder: "Something went wrong",
      auth_error: response.status
    }; // Sets error.
  else
    data = response.json();

  return data;
}*/

const App = () => {
  //const popup = UsePopup();

  return (
    // <div>
    //   <Router>
    //     <Landing />
    //     {localStorage.clear()}
    //   </Router>
    // </div>
    <PopupContextProvider>
      <AuthContextProvider>
        <Router>
          <Navbar />
          <PopupContext.Consumer>
            {(popup) => {
              return (
                <Popup
                  enabled={popup.show}
                  msg={popup.msg}
                  togglePopup={popup.toggle}
                  type={popup.type}
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

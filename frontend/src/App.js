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
import PopupTest from "pages/PopupTest";
import PopupContextProvider from "context/PopupContext";

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      access: "",
      refresh: "",
    };
  }

  componentDidMount() {
    // Do initial authentication here
    //authenticate("juminten", "pecintatedjo").then(data => {this.setState(() => {return data;})});
  }

  render() {
    return (
      <PopupContextProvider>
        <AuthContextProvider>
          <Router>
            <Navbar />
            
            <Route exact path="/" component={Landing} />
            <Route path="/competition" component={Competition} />
            <Route path="/login" component={Login} />
            <Route
              path="/profile"
              render={() => <Profile token={this.state.access} />}
            />
            <Route path="/register" component={Register} />
          </Router>
          
        </AuthContextProvider>
      </PopupContextProvider>
    );
  }
}

export default App;

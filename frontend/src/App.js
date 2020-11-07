import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Preevent from "./pages/Preevent";
import Competition from "./pages/Competition";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Strategicc from "./pages/Strategicc";
import Classgicc from "./pages/Classgicc";
import Minicc from "./pages/Minicc";
import Register from "./pages/Register";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Landing} />
      <Route path="/competition" component={Competition} />
      <Route path="/preevent" component={Preevent} />
      <Route path="/strategicc" component={Strategicc} />
      <Route path="/classgicc" component={Classgicc} />
      <Route path="/minicc" component={Minicc} />
      <Route path="/login" component={Login} />
      <Route path="/profile" component={Profile} />
      <Route path="/register" component={Register} />
    </Router>
  );
}

export default App;

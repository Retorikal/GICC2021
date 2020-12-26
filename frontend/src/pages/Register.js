import React, { useState, useEffect, Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { AuthContext, UseAuth } from "context/Auth";
import { PopupContext, UsePopup } from "context/Popup";
import Title from "components/Title";

const Register = () => {
  const [regis, setRegis] = useState({});
  const [redirect, setRedirect] = useState(null);

  const popup = UsePopup();
  const auth = UseAuth();

  const onFieldChange = (e) => {
    let tmp_regis = regis;
    regis[e.target.id] = e.target.value;

    setRegis(tmp_regis);
  };

  const onLoginClick = () => {
    console.log("Signing up");
    // Blah blah blah validation
    let data = {};
    data = Object.assign(data, regis);
    let valid = true;

    if (data.password != data.passconf) {
      popup.showPopup("Password does not match.", "error");
      return;
    }

    delete data.passconf;

    auth.signup(data).then((result) => {
      if (result.error == 0) {
        popup.showPopup(
          "Account created! Please check your email for confirmation.",
          "success"
        );
        setRedirect("/login");
      } else {
        popup.showPopup(result.errormsg[0][0], "error");
      }
    });
  };

  if (redirect != null) {
    return <Redirect to={redirect} />;
  }
  return (
    <div className="content">
      <div className="flex-fullscreen">
        <div className="flex-left flex-container vertical-center">
          <Title text={"Register"} center={true} />
        </div>

        <div className="login flex-right">
          <div className="textbox">
            <input
              type="text"
              name="username"
              placeholder="Username"
              id="username"
              className="login-input"
              onChange={(e) => {
                onFieldChange(e);
              }}
            />
          </div>
          <div className="textbox">
            <input
              type="text"
              name="email"
              placeholder="Email address"
              id="email"
              className="login-input"
              onChange={(e) => {
                onFieldChange(e);
              }}
            />
          </div>
          <div className="textbox">
            <input
              type="text"
              name="first_name"
              placeholder="First name"
              id="first_name"
              className="login-input"
              onChange={(e) => {
                onFieldChange(e);
              }}
            />
          </div>
          <div className="textbox">
            <input
              type="text"
              name="last_name"
              placeholder="Full name"
              id="last_name"
              className="login-input"
              onChange={(e) => {
                onFieldChange(e);
              }}
            />
          </div>
          <div className="textbox">
            <input
              type="password"
              name="password"
              placeholder="Password"
              id="password"
              className="login-input"
              onChange={(e) => {
                onFieldChange(e);
              }}
            />
          </div>
          <div className="textbox">
            <input
              type="password"
              placeholder="Confrim password"
              id="passconf"
              className="login-input"
              onChange={(e) => {
                onFieldChange(e);
              }}
            />
          </div>
          <button
            className="login-btn clickable"
            type="button"
            onClick={onLoginClick}
          >
            Sign up
          </button>
          <div className="forget-pw">
            <ul>
              <li>
                <Link to="/login">Already made an account? Sign in here</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

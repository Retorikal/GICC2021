import React, { useState, useEffect, Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { AuthContext, UseAuth } from "context/Auth";
import { PopupContext, UsePopup } from "context/Popup";
import Title from "components/Title";

const Login = () => {
  const [user, onUserChange] = useState("");
  const [pass, onPassChange] = useState("");
  const [redirect, setRedirect] = useState(null);

  const popup = UsePopup();
  const auth = UseAuth();

  const onLoginClick = () => {
    console.log("Logging in");
    auth.login(user, pass).then((result) => {
      console.log(result);
      if (result.error == 0) {
        setRedirect("/profile");
      } else {
        popup.showPopup(result.detail, "error");
      }
    });
  };

  if (redirect != null) {
    return <Redirect to={redirect} />;
  }
  return (
    <div className="content">
      <div className="flex-fullscreen vertical-center">
        <div className="flex-left flex-container">
          <Title text={"Sign in"} center={true} />
        </div>
        <div className="login flex-right"ull>
          <div className="textbox">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              className="login-input"
              onChange={(e) => {
                onUserChange(e.target.value);
              }}
            />
          </div>
          <div className="textbox">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="login-input"
              onChange={(e) => {
                onPassChange(e.target.value);
              }}
            />
          </div>
          <button
            className="login-btn clickable"
            type="button"
            onClick={onLoginClick}
          >
            Login
          </button>
          <div className="forget-pw">
            <ul>
              <li>
                <Link to="/register">I haven't made an account</Link>
              </li>
              <li>
                <Link to="/">I forgot my password</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

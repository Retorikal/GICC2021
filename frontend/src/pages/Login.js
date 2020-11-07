import React from "react";
import { Link } from "react-router-dom";
import Title from "../components/Title";

const Login = () => {
  return (
    <div className="content">
      <div className="login">
        <Title text={"Sign in"} />
        <div className="textbox">
          <input
            type="text"
            placeholder="Email address"
            className="login-input"
          />
        </div>
        <div className="textbox">
          <input
            type="password"
            placeholder="Password"
            className="login-input"
          />
        </div>
        <div className="forget-pw">
          <ul>
            <li>
              <Link to="/register">I haven't made an account</Link>
            </li>
            <li>
              <Link>I forgot my password</Link>
            </li>
          </ul>
        </div>
        <input className="login-btn" type="button" value="Login" />
      </div>
    </div>
  );
};

export default Login;

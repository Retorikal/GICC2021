import React from "react";
import { Link } from "react-router-dom";
import Title from "components/Title";

const Register = () => {
  return (
    <div className="content">
      <div className="login">
        <Title text={"Register"} />
        <div className="textbox">
          <input type="text" placeholder="Username" className="login-input" />
        </div>
        <div className="textbox">
          <input
            type="text"
            placeholder="Email address"
            className="login-input"
          />
        </div>
        <div className="textbox">
          <input type="text" placeholder="First name" className="login-input" />
        </div>
        <div className="textbox">
          <input type="text" placeholder="Last name" className="login-input" />
        </div>
        <div className="textbox">
          <input
            type="password"
            placeholder="Password"
            className="login-input"
          />
        </div>
        <div className="textbox">
          <input
            type="password"
            placeholder="Confrim password"
            className="login-input"
          />
        </div>
        <div className="forget-pw">
          <ul>
            <li>
              <Link to="/login">Already made an account? Sign in here</Link>
            </li>
          </ul>
        </div>
        <input className="login-btn" type="button" value="Sign up" />
      </div>
    </div>
  );
};

export default Register;

import React from "react";
import { Link } from "react-router-dom";
import ham from "../images/ham.svg";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="GICC" className="logo" />
      </Link>
      <nav>
        <Link className="hide-desktop">
          <img src={ham} alt="toggle menu" className="menu" id="menu" />
        </Link>
        <ul className="show-desktop hide-mobile">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/competition">Competition</Link>
          </li>
          <li>
            <Link to="/strategicc">StrateGICC</Link>
          </li>
          <li>
            <Link to="/classgicc">ClassGicc</Link>
          </li>
          <li>
            <Link to="/minicc">MiniCC</Link>
          </li>
          <li>
            <Link to="/login">Sign in</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

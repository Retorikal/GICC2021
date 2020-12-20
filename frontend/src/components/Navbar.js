import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "context/Auth";

import ham from "images/ham.svg";
import logo from "images/logo.png";

const Navbar = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="GICC" className="logo" />
      </Link>
      <nav>
        <Link to="/" className="hide-desktop">
          <img src={ham} alt="toggle menu" className="menu" id="menu" />
        </Link>
        <ul className="show-desktop hide-mobile">
          <Link to="/"><li className="clickable">Home</li></Link> 
          <Link to="/competition"><li className="clickable">Competition</li></Link> 
          <AuthContext.Consumer>
            {value =>{
              if (value.error == 0)
                return (<Link to="/profile"><li className="clickable">Profile</li></Link>);
              else
                return (<Link to="/login"><li className="clickable">Sign in</li></Link>);
            }}  
          </AuthContext.Consumer>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

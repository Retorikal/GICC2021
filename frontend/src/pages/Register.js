import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { AuthContext } from "context/Auth.js";
import Title from "components/Title";

class Register extends Component{
  onFieldChange(e){
    let prop = {};
    prop[e.target.id] = e.target.value;
    this.setState(prop);
  }

  onLoginClick(signup){
    console.log("Signing up");
    // Blah blah blah validation
    let data = Object.assign({}, this.state);
    delete data.passconf;

    signup(data).then(result =>{
      if (result.error == 0) {
        this.setState({redirect: true});
      }
    });
  }

  render(){
    return (
      <div className="content">
        <div className="login">
          <Title text={"Register"} />
          <div className="textbox">
            <input type="text" name="username" placeholder="Username" id="username" className="login-input" onChange={e => {this.onFieldChange(e)}} />
          </div>
          <div className="textbox">
            <input type="text" placeholder="Email address" id="email" className="login-input" onChange={e => {this.onFieldChange(e)}}/>
          </div>
          <div className="textbox">
            <input type="text" placeholder="First name" id="first_name" className="login-input" onChange={e => {this.onFieldChange(e)}} />
          </div>
          <div className="textbox">
            <input type="text" placeholder="Full name" id="last_name" className="login-input" onChange={e => {this.onFieldChange(e)}} />
          </div>
          <div className="textbox">
            <input type="password" name="password" placeholder="Password" id="password" className="login-input" onChange={e => {this.onFieldChange(e)}} />
          </div>
          <div className="textbox">
            <input type="password" placeholder="Confrim password" id="passconf" className="login-input" onChange={e => {this.onFieldChange(e)}} />
          </div>
          <div className="forget-pw">
            <ul>
              <li>
                <Link to="/login">Already made an account? Sign in here</Link>
              </li>
            </ul>
          </div>
          <AuthContext.Consumer>
              {value => {
                return (<button className="login-btn" type="button" onClick={() => {this.onLoginClick(value.signup)}}>Sign up</button>);
              }}
          </AuthContext.Consumer>
        </div>
      </div>
    );
  };
}

export default Register;

import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { AuthContext } from "context/Auth.js";
import Title from "components/Title";

class Register extends Component{
  constructor(props){
    super(props);
    this.state={
      regis:{}
    }
  }

  onFieldChange(e){
    let regis = this.state.regis;
    regis[e.target.id] = e.target.value;

    let state = this.state;
    state.regis = regis;

    this.setState(state);
  }

  onLoginClick(signup){
    console.log("Signing up");
    // Blah blah blah validation
    let data = Object.assign({}, this.state.regis);
    let valid = true;

    if(data.password == data.passconf){
      console.log("Pasword does not match.");
      return;
    }

    delete data.passconf;

    signup(data).then(result =>{
      if (result.error == 0) {
        this.setState({redirect: "/login"});
      }
    });

  }

  render(){
    if (this.state.redirect != undefined) {
      return <Redirect to={this.state.redirect}/>
    }
    return (
      <div className="content">
        <div className="flex-container">

          <div className="flex-left flex-container vertical-center">
            <Title text={"Register"} center={true}/>
          </div>

          <div className="login flex-right">            
            <div className="textbox">
              <input type="text" name="username" placeholder="Username" id="username" className="login-input" onChange={e => {this.onFieldChange(e)}} />
            </div>
            <div className="textbox">
              <input type="text" name="email" placeholder="Email address" id="email" className="login-input" onChange={e => {this.onFieldChange(e)}}/>
            </div>
            <div className="textbox">
              <input type="text" name="first_name" placeholder="First name" id="first_name" className="login-input" onChange={e => {this.onFieldChange(e)}} />
            </div>
            <div className="textbox">
              <input type="text" name="last_name" placeholder="Full name" id="last_name" className="login-input" onChange={e => {this.onFieldChange(e)}} />
            </div>
            <div className="textbox">
              <input type="password" name="password" placeholder="Password" id="password" className="login-input" onChange={e => {this.onFieldChange(e)}} />
            </div>
            <div className="textbox">
              <input type="password" placeholder="Confrim password" id="passconf" className="login-input" onChange={e => {this.onFieldChange(e)}} />
            </div>
            <AuthContext.Consumer>
                {value => {
                  return (<button className="login-btn clickable" type="button" onClick={() => {this.onLoginClick(value.signup)}}>Sign up</button>);
                }}
            </AuthContext.Consumer>
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
}

export default Register;

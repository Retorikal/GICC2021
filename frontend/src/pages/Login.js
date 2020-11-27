import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { AuthContext } from "context/Auth.js";
import Title from "components/Title";

class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      user:"",
      pass:""
    }
  }

  onUserChange(e){
    this.setState({user: e.target.value});
  }

  onPassChange(e){
    this.setState({pass: e.target.value});
  }

  onLoginClick(login){
    console.log("Logging in");
    login(this.state.user, this.state.pass).then(result =>{
      if (result.error == 0) {
        this.setState({redirect: true});
      }
    });
  }

  render(){
    if (this.state.redirect) {
      return <Redirect to="/profile" />
    }
    return (
      <div className="content">
      <form>
        <div className="login">
          <Title text={"Sign in"} />
          <div className="textbox">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              className="login-input"
              onChange={e => {this.onUserChange(e)}}
            />
          </div>
          <div className="textbox">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="login-input"
              onChange={e => {this.onPassChange(e)}}
            />
          </div>
          <AuthContext.Consumer>
            {value => {
              return (<button className="login-btn" type="button" onClick={() => {this.onLoginClick(value.login)}}>Login</button>);
            }}
          </AuthContext.Consumer>
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
      </form>
      </div>
    );
  }
}

export default Login;

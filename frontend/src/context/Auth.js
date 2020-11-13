import React, {Component, useState} from "react";
import { createContext, useContext } from "react";
import { Redirect } from "react-router-dom";

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

/*const AuthContextProvider = (props) => {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  const logOut = () => {
    localStorage.removeItem("tokens");
    setAuthTokens();
  };

  return (
    <AuthContext.Provider
    value={{ authTokens, setAuthTokens: setTokens, logOut }}>

    {props.children}
    </AuthContext.Provider>
    );
};*/

export default class AuthContextProvider extends Component{
  constructor(props){
    super(props);
    this.state={
      access:"",
      refresh:"",
      auth_error:1, // 0 for authenticated, 1 normally logged out, rest: HTTP error.
      // Exposed functions
      signup: this.signUp,
      login: this.authenticate,
      logout: this.logOut,
    }
  }

  saveToken(data){
    // Saves token to state and storage
    localStorage.setItem("tokens", JSON.stringify(data));
    this.setState(data);
  }

  fetchToken(){
    // Gets token from local, saves it to state
    let data = JSON.parse(localStorage.getItem("tokens"));
    this.setState(data);

    return data;
  }

  async signup(){
    
  }

  async authenticate(user, pass){
    let url = "/app/token/";
    let init = {
      method: 'POST',
      mode: 'cors',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'username': user,
        'password': pass
      })
    };
    let response = await fetch(url, init);
    let data = "";

    if (response.status > 400){
      data = { 
        access: "",
        auth_error: response.status
      }; // Sets error.
      this.saveToken(data);
    } else {
      data = response.json();
      this.saveToken({data, auth_error: 0});
    }
    
    return data;
  }

  logOut(){
    let data = {access:"", refresh:"", auth_error:1};
    this.saveToken(data);
  }

  render(){
    return (
      <AuthContext.Provider value={this.state}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

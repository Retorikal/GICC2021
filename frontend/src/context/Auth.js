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
      error:1, // 0 for authenticated, 1 normally logged out, rest: HTTP error.
      // Exposed functions
      signup: async (credentials) => {return await this.signup(credentials)},
      login: async (user, pass) => {return await this.authenticate(user, pass)},
      authenticator: request => {return this.appendToken(request)},
      logout: () => this.logOut()
    }
  }

  componentDidMount(){
    // Automatically fetch old tokens when component is loaded
    this.fetchToken(()=>{
      if(this.state.error == 0){
        console.log("Authenticated");
      } /*else{
        this.authenticate("juminten", "pecintatedjo").then(data => {
          console.log(data);
        });
      }*/
    });

  }

  saveToken(data, callback=() => {}){
    // Saves token to state and storage
    localStorage.setItem("tokens", JSON.stringify(data));
    this.setState(data, callback);
  }

  fetchToken(callback=() => {}){
    // Gets token from local, saves it to state
    let data = JSON.parse(localStorage.getItem("tokens"));
    this.setState(data, callback);

    return data;
  }

  logOut(){
    this.saveToken({access:"", refresh:"", error:1});
  }

  async signup(credentials){
    // Takes signup information: email, password, first_name, last_name
    let url = "/app/token/";
    let init = {
      method: 'POST',
      mode: 'cors',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(credentials)
    };
    let response = await fetch(url, init);
    let data = "";

    if (response.status > 400){
      data = { 
        access: "",
        error: response.status
      }; // Sets error.
      this.saveToken(data);
    } else {
      data = response.json();
      this.saveToken({data, error: 0});
    }
    
    return data;
  }

  async authenticate(user, pass){
    // Gets user token and refresh
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
        error: response.status
      }; // Sets error.
    } else {
      data = await response.json();
      data.error = 0;
    }

    this.saveToken(data);
    return data;
  }

  async getInfo(){
    // Gets all user information data
    let url = "/app/user/";
    let init = {
      method: 'GET',
      mode: 'cors',
      headers: {'Content-Type': 'application/json'},
    };

    let response = await fetch(url, init);
    let data = "";

    if (response.status > 400){
      data = {
        error: response.status
      }; // Sets error.
      this.setState(data);
    } 
    else {
      data = response.json();
      this.setState({data, error: 0});
    }
  }

  // Fungsi nambahin token untuk request header buat page yang butuh authentication
  appendToken(request){
    let token = "Bearer " + this.state.access;
    console.log(this.state);
    console.log(this.state.access);
    request.headers.Authorization = "Bearer " + this.state.access;
  }

  render(){
    return (
      <AuthContext.Provider value={this.state}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

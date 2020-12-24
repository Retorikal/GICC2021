import React, { Component, useState } from "react";
import { createContext, useContext } from "react";
import { Redirect } from "react-router-dom";

export const AuthContext = createContext();

export const UseAuth = () => useContext(AuthContext);

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

export default class AuthContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      access: "",
      refresh: "",
      token_time: "", // Time when the token is obtained
      refresh_time: "", // Time when the refresh token is obtained
      error: 1, // 0 for logind, 1 normally logged out, rest: HTTP error.
      ready: false, // True if mounting finishes

      // User information
      user: {},
      files: {},

      // Exposed functions
      signup: async (credentials) => {
        return await this.signup(credentials);
      },
      login: async (user, pass) => {
        return await this.login(user, pass);
      },
      authenticator: async (request) => {
        return await this.appendToken(request);
      },
      updateInfo: async (data) => {
        return await this.updateInfo(data);
      },
      getInfo: async () => {
        return await this.getInfo();
      },
      logout: () => this.logOut(),
    };
  }

  componentDidMount() {
    // Automatically fetch old tokens when component is loaded
    let data = this.fetchToken(() => {
      // Executed if fetchToken found something
      console.log("Saved data found");
      if (this.state.error == 0) {
        this.getInfo().then(data => {
          this.setState({ ready: true });

          // If saved token is not valid, just logout.
          if(data.error >= 400)
            this.logOut();
        });
      }

      // If first login, or no data found
      else{
        console.log("Not logged in");
        this.setState({ ready: true });
      }
    });

    if(data == null){
      console.log("First visit");
      this.setState({ ready: true });
    }
  }

  // Saves token to state and storage
  saveToken(data, callback = () => {}) {
    localStorage.setItem("tokens", JSON.stringify(data));
    this.setState(data, callback);
  }

  // Gets token from local, saves it to state
  fetchToken(callback = () => {}) {
    let data = JSON.parse(localStorage.getItem("tokens"));

    if (data != null) {
      console.log(data);
      this.setState(data, callback);
    }

    return data;
  }

  // Deletes saved token; effectively logging out the user
  logOut() {
    this.setState({ access: "", refresh: "", error: 1 });
    localStorage.clear();
  }

  // Sign up as a new user
  async signup(credentials) {
    // Takes signup information: email, password, first_name, last_name
    let url = "/app/user/";
    let init = {
      method: "PUT",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    };
    let response = await fetch(url, init);
    let data = "";

    data = await response.json();

    if (response.status >= 400) {
      data.errormsg = data.error;
      data.error = response.status;
    } else {
      data.error = 0;
    }

    return data;
  }

  // Gets user token and refresh
  async login(user, pass) {
    let url = "/app/token/";
    let init = {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: user,
        password: pass,
      }),
    };

    let response = await fetch(url, init);
    let data = "";

    data = await response.json();

    if (response.status >= 400) {
      data.access = "";
      data.error = response.status;
    } else {
      data.error = 0;
      data.token_time = new Date().getTime();
      data.refresh_time = new Date().getTime();

      this.saveToken(data, () => {
        this.getInfo();
      });
    }

    return data;
  }

  // Gets all user information data
  async getInfo() {
    let url = "/app/user/";
    let init = {
      method: "GET",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    };
    await this.appendToken(init);

    let response = await fetch(url, init);
    let data = "";

    if (response.status >= 400) {
      data = {
        access: "",
        error: response.status,
      }; // Sets error.
    } else {
      data = await response.json();
      data.error = 0;
    }

    this.setState(data);
    return data;
  }

  // Update user information stored on server
  async updateInfo(info) {
    // Takes signup information: email, password, first_name, last_name
    let url = "/app/user/";
    let init = {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(info),
    };
    await this.appendToken(init);

    let response = await fetch(url, init);
    let data = await response.json();

    if (response.status >= 400) {
      data.errormsg = data.error;
      data.error = response.status;
    } else {
      data.error = 0;
      this.setState(data);
    }

    return data;
  }

  // Get new token using refresh token
  async refreshToken() {
    let url = "/app/token/refresh/";
    let init = {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        refresh: this.state.refresh,
      }),
    };

    let response = await fetch(url, init);
    let data = "";

    if (response.status >= 400) {
      data = {
        access: "",
        refresh: "",
        error: response.status,
      }; // Sets error.
    } else {
      data = await response.json();
      data.error = 0;
      data.token_time = new Date().getTime();

      this.saveToken(data);
      return "Bearer " + data.access;
    }
  }

  // Fungsi nambahin token untuk request header buat page yang butuh authentication
  async appendToken(request) {
    let token = "Bearer " + this.state.access;

    // Refresh token buat state kalo ternyata kadaluarsa
    let now = new Date().getTime();
    if (now - this.state.token_time > 270 * 1000) {
      token = await this.refreshToken();
    }

    request.headers.Authorization = token;
  }

  render() {
    return (
      <AuthContext.Provider value={this.state}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

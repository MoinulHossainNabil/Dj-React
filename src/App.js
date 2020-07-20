import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import RegisterForm from "./components/Register/RegisterForm";
import LoginForm from "./components/Login/LoginForm";
import HomePage from "./components/Home/HomePage";
import Routes from "./components/Routers/Routes";
import NavigationBar from "./components/Navbar/Navbar";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isUserLoggedIn: false,
    };
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin(value) {
    console.log("before login", this.state.isUserLoggedIn);
    // console.log("call after login successful", value)
    this.setState({ isUserLoggedIn: value });
    console.log("after login", this.state.isUserLoggedIn);
  }
  handleLogout = (e) => {
    // this.setState({isUserLoggedIn: false})
    // localStorage.removeItem("access-token")
    console.log("logged out");
  };

  render() {
    return (
      <Router>
        <NavigationBar
          {...this.props}
          loggedInStatus={this.state.isUserLoggedIn}
        />
        <div className="App">
          <Route
            path="/register"
            render={(props) => (
              <RegisterForm
                {...props}
                loggedInStatus={this.state.isUserLoggedIn}
              />
            )}
          />
          <Route
            path="/login"
            render={(props) => (
              <LoginForm
                {...props}
                loggedInStatus={this.state.isUserLoggedIn}
                handleLogin={this.handleLogin}
              />
            )}
          />
          <Route
            path="/"
            exact
            render={(props) => (
              <HomePage {...props} loggedInStatus={this.state.isUserLoggedIn} />
            )}
          />
        </div>
      </Router>
    );
  }
}
export default App;

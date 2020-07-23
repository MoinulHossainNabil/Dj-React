import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";
import RegisterForm from "./components/Register/RegisterForm";
import LoginForm from "./components/Login/LoginForm";
import HomePage from "./components/Home/HomePage";
import Routes from "./components/Routers/Routes";
import NavigationBar from "./components/Navbar/Navbar";
import JobPostForm from "./components/JobPostForm/JobPostForm";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isUserLoggedIn: false,
      token: "",
      user_id: "",
    };
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin(value) {
    // console.log("call after login successful", value)
    this.setState({ isUserLoggedIn: value });
    console.log("logged in");
  }
  handleLogout = (e) => {
    this.setState({ isUserLoggedIn: false });
    localStorage.removeItem("access-token");
    console.log("logged out");
  };
  componentDidMount() {
    console.log("app did mount");
    if (localStorage.getItem("access-token")) {
      this.setState({ isUserLoggedIn: true });
    } else {
      this.setState({ isUserLoggedIn: false });
    }
  }

  render() {
    return (
      <Router>
        <NavigationBar
          {...this.props}
          loggedInStatus={this.state.isUserLoggedIn}
          handleLogout={this.handleLogout}
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
            path="/post-job"
            render={(props) => (
              <JobPostForm
                {...props}
                loggedInStatus={this.state.isUserLoggedIn}
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

import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";
import RegisterForm from "./components/Register/RegisterForm";
import LoginForm from "./components/Login/LoginForm";
import HomePage from "./components/Home/HomePage";
import NavigationBar from "./components/Navbar/Navbar";
import JobPostForm from "./components/JobPostForm/JobPostForm";
import JobDetail from "./components/JobDetail/JobDetail";
import SearchPosts from "./components/SearchPosts/SearchPosts";
import CategoryProvider from "./components/ContexProviders/CategoryProvider";
import PracticeComponent from "./components/PracticeComponent/PracticeComponent";

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
    this.setState({ isUserLoggedIn: value });
    console.log("logged in");
  }
  handleLogout = (e) => {
    this.setState({ isUserLoggedIn: false });
    localStorage.removeItem("access-token");
    console.log("logged out");
  };
  componentDidMount() {
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
            path="/search/:key"
            render={(props) => (
              <SearchPosts
                {...props}
                loggedInStatus={this.state.isUserLoggedIn}
                handleLogin={this.handleLogin}
              />
            )}
          />
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

          <CategoryProvider>
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
              path="/job/:job_id"
              render={(props) => (
                <JobDetail
                  {...props}
                  loggedInStatus={this.state.isUserLoggedIn}
                />
              )}
            />
            <Route
              path="/"
              exact
              render={(props) => (
                <HomePage
                  {...props}
                  loggedInStatus={this.state.isUserLoggedIn}
                />
              )}
            />
            <Route
              path="/autocomplete"
              render={(props) => (
                <PracticeComponent
                  {...props}
                  loggedInStatus={this.state.isUserLoggedIn}
                />
              )}
            />
          </CategoryProvider>
        </div>
      </Router>
    );
  }
}
export default App;

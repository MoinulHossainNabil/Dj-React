import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isUserAuthenticated: false,
    };
  }
  login = (value) => {
    // this.setState({ isUserAuthenticated: true });
    console.log(this.state.isUserAuthenticated);
  };

  logout = () => {
    this.setState({ isUserAuthenticated: false });
    console.log("logged out");
  };
  render() {
    const navigationBar =
      this.props.loggedInStatus |
      (localStorage.getItem("access-token") !== null) ? (
        <nav>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/job-list">
              <li>Job List</li>
            </Link>
            <Link to="/post-job">
              <li>Post Job</li>
            </Link>
            <Link to="/logout">
              <li>Logout</li>
            </Link>
          </ul>
        </nav>
      ) : (
        <nav>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/job-list">
              <li>Job List</li>
            </Link>
            <Link to="/post-job">
              <li>Post Job</li>
            </Link>
            <Link to="/register">
              <li>Signup</li>
            </Link>
            <Link to="/login">
              <li>Login</li>
            </Link>
          </ul>
        </nav>
      );
    return <div>{navigationBar}</div>;
  }
}

export default NavigationBar;

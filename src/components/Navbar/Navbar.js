import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "./Navbar.css";

export class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isUserAuthenticated: false,
      searchBy: "",
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

  handleSearch = (e) => {
    // console.log(this.state.searchBy)
    this.setState({searchBy: e.target.value})
  }

  render() {
    const navigationBar = this.props.loggedInStatus ? (
      <nav>
        <ul>
          <Link to="/">
            <li onClick={this.reload}>Home</li>
          </Link>
          <Link to="/post-job">
            <li>Post Job</li>
          </Link>
          <Link to="/" onClick={this.props.handleLogout}>
            <li>Logout</li>
          </Link>
          <form>
            <input
              name="key"
              value={this.state.searchBy}
              onChange={this.handleSearch}
              placeholder="search by position/category"
            >
            </input>
            <Link to={`/search/${this.state.searchBy}`}>
            <button>Search</button>
            </Link>
          </form>
        </ul>
      </nav>
    ) : (
      <nav>
        <ul>
          <Link to="/">
            <li onClick={this.reload}>Home</li>
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
          <form>
            <input
              name="key"
              value={this.state.searchBy}
              onChange={this.handleSearch}
              placeholder="search by position/category"
            >
            </input>
            <Link to={`/search/${this.state.searchBy}`}>
            <button>Search</button>
            </Link>
          </form>
        </ul>
      </nav>
    );
    return <div>{navigationBar}</div>;
  }
}

export default NavigationBar;

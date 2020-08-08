import React, { Component } from "react";
import "./LoginForm.css";
import axios from "axios";
import { Form, Button } from "semantic-ui-react";
import { Redirect } from "react-router-dom";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginStatus: false,
      username: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    const { username, password } = this.state;
    const credentials = {
      username: username,
      password: password,
    };
    // localStorage.setItem("access-token", token)
    axios
      .post("http://localhost:8000/accounts/login/", credentials)
      .then((respone) => {
        console.log("response status", respone.data);
        this.setState({ loginStatus: true });
        const token = respone.data["access"];
        const user_id = respone.data["user_id"];
        localStorage.setItem("access-token", token);
        localStorage.setItem("user_id", user_id);
        this.props.history.push("/");
        this.props.handleLogin(true);
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  render() {
    const { username, password } = this.state;
    if (this.props.loggedInStatus) {
      return <Redirect to="/" />;
    }
    return (
      <div className="login-container">
        <Form>
          <h1 className="ui centered">Please Fill Up The Form</h1>
          <Form.Field>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={username}
              placeholder="Username"
              onChange={this.handleChange}
              required
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={this.handleChange}
              // required
            />
          </Form.Field>
          <Button primary onClick={this.handleSubmit}>
            Login{" "}
          </Button>
        </Form>
      </div>
    );
  }
}

export default LoginForm;

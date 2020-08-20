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

  createAlert(message, type, id_of_alert_tag) {
    let alert_location = document.querySelector(`#${id_of_alert_tag}`);
    alert_location.setAttribute("class", `alert alert-${type}`);
    let link = document.createElement("a");
    let link_id = "close-alert";
    let link_text = document.createTextNode("  " + "X");
    link.setAttribute("href", "#");
    link.setAttribute("id", link_id);
    link.appendChild(link_text);
    alert_location.innerHTML = message;
    alert_location.appendChild(link);
    alert_location.style.display = "block";
    let link_action = document.querySelector(`#${link_id}`);
    link_action.addEventListener(
      "click",
      () =>
        (document.querySelector("#login-error-header").style.display = "none")
    );
  }

  handleSubmit = (e) => {
    e.preventDefault();
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
        this.createAlert(
          "Unautherized Credentials",
          "warning",
          "login-error-header"
        );
      });
  };

  render() {
    const { username, password } = this.state;
    if (this.props.loggedInStatus) {
      return <Redirect to="/" />;
    }
    return (
      <div className="login-container">
        <Form onSubmit={this.handleSubmit}>
          <h1 className="ui centered">Please Fill Up The Form</h1>
          <h6 id="login-error-header"></h6>
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
              required
            />
          </Form.Field>
          <Button primary>Login </Button>
        </Form>
      </div>
    );
  }
}

export default LoginForm;

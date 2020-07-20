import React, { Component } from "react";
import "./RegisterForm.css";
import axios from "axios";
import { Form, Button } from "semantic-ui-react";
import { Redirect } from "react-router-dom";

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      response: "",
      username: "",
      email: "",
      password1: "",
      password2: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    const {username, email, password1, password2} = this.state
    const config = {
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
    };
    const user = {
      username: username,
      email: email,
      password1: password1,
      password2: password2
    };
    e.preventDefault();
    axios
      .post("http://localhost:8000/accounts/register/", user, config)
      .then((response) => {
        console.log(response);
        this.props.history.push('/login')
      })
      .catch((e) => {
        // console.log(e.response.status);
        alert(`${e.response.data['response']}`)
      });
  };

  render() {
    if (localStorage.getItem("access-token") !== null) {
      return <Redirect to="/" />;
    }
    const { username, email, password1, password2 } = this.state;
    return (
      <div className="register-container">
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
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Email Address"
              onChange={this.handleChange}
              // required
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              type="password"
              name="password1"
              value={password1}
              placeholder="Password"
              onChange={this.handleChange}
              // required
            />
          </Form.Field>
          <Form.Field>
            <label>Confirm Password</label>
            <input
              type="password"
              name="password2"
              value={password2}
              onChange={this.handleChange}
              // required
            />
          </Form.Field>
          <Button primary onClick={this.handleSubmit}>
            Register{" "}
          </Button>
        </Form>
      </div>
    );
  }
}

export default RegisterForm;

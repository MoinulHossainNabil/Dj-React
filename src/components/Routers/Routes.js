import React from "react";
import { Route } from "react-router-dom";
import RegisterForm from "../Register/RegisterForm";
import LoginForm from "../Login/LoginForm";
import HomePage from "../Home/HomePage";
export default function Routes() {
  return (
    <div>
      <Route
        path="/register"
        render={(props) => (
          <RegisterForm {...props} loggedInStatus={this.state.isUserLoggedIn} />
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
  );
}

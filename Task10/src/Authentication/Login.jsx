import React, { Component } from "react";
import { Navigate } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        usernameOrEmail: "",
        password: "",
      },
      redirectToDashboard: false,
      redirectToSignup: false,
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { usernameOrEmail, password } = this.state.userData;

    const savedData = localStorage.getItem("userData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);

      console.log("🚀 ~ Login ~ usernameOrEmail:", usernameOrEmail);
      console.log("🚀 ~ Login ~ parsedData.useremail:", parsedData.email);
      console.log("🚀 ~ Login ~ parsedData.password:", parsedData.password);
      console.log("🚀 ~ Login ~ password:", password);
      if (
        usernameOrEmail === parsedData.email &&
        password === parsedData.password
      ) {
        this.setState({ redirectToDashboard: true });
      } else {
        alert("Invalid email or password.");
      }
    } else {
      alert("No user data found. Please sign up first.");
    }
  };
  handleSignupClick = () => {
    this.setState({ redirectToSignup: true });
  };
  render() {
    if (this.state.redirectToSignup) {
      return <Navigate to="/" />;
    }
    if (this.state.redirectToDashboard) {
      return <Navigate to="/Dashboard" />;
    }
    return (
      <section className="auth-page">
        <form className="auth-card" onSubmit={this.handleSubmit}>
          <h2 className="auth-title">Login</h2>

          <input
            className="auth-input"
            type="text"
            name="usernameOrEmail"
            placeholder="Enter Email"
            value={this.state.userData.usernameOrEmail}
            onChange={(e) => {
              this.setState({
                userData: {
                  ...this.state.userData,
                  usernameOrEmail: e.target.value,
                },
              });
            }}
          />

          <input
            className="auth-input"
            type="password"
            name="password"
            placeholder="Enter Password"
            value={this.state.userData.password}
            onChange={(e) => {
              this.setState({
                userData: {
                  ...this.state.userData,
                  password: e.target.value,
                },
              });
            }}
          />
          <button className="auth-button" type="submit">
            Login
          </button>
          <p className="auth-inline-text">
            New here? Create a new account.
            <button
              className="auth-link-btn"
              type="button"
              onClick={this.handleSignupClick}
            >
              Signup
            </button>
          </p>
        </form>
      </section>
    );
  }
}

import React, { Component } from "react";
import { Navigate } from "react-router-dom";

export default class ForgotPW extends Component {
  constructor(props) {
    super(props);
    this.state = {
      useremail: "",
      storedEmail: "",
      password: "",
      error: "",
      redirectToLogin: false,
    };
  }

  componentDidMount() {
    const savedData = localStorage.getItem("userData");

    if (savedData) {
      const parsedData = JSON.parse(savedData);

      this.setState({
        storedEmail: parsedData.email,
      });
    }
  }

  handleForgotPassword = (e) => {
    e.preventDefault();

    const { useremail, password, storedEmail } = this.state;

    if (!useremail) {
      this.setState({ error: "Email is required" });
      return;
    }

    if (!password) {
      this.setState({ error: "Password is required" });
      return;
    }

    if (useremail !== storedEmail) {
      this.setState({ error: "Email does not match our records" });
      return;
    }

    const savedData = localStorage.getItem("userData");

    if (savedData) {
      const parsedData = JSON.parse(savedData);

      const updatedData = {
        ...parsedData,
        password: password,
      };

      localStorage.setItem("userData", JSON.stringify(updatedData));

      alert("Password reset successful!");
      this.setState({ redirectToLogin: true });
    } else {
      this.setState({ error: "No user found" });
    }
  };

  render() {
    if (this.state.redirectToLogin) {
      return <Navigate to="/Login" />;
    }

    return (
      <section className="auth-page">
        <form className="auth-card" onSubmit={this.handleForgotPassword}>
          <h1 className="auth-title">Forgot Password</h1>

          <input
            className="auth-input"
            type="email"
            placeholder="Enter your email"
            value={this.state.useremail}
            onChange={(e) =>
              this.setState({ useremail: e.target.value, error: "" })
            }
          />

          <input
            className="auth-input"
            type="password"
            placeholder="Enter new password"
            value={this.state.password}
            onChange={(e) =>
              this.setState({ password: e.target.value, error: "" })
            }
          />

          <button className="auth-button" type="submit">
            Reset Password
          </button>

          <p className="auth-error">{this.state.error}</p>
        </form>
      </section>
    );
  }
}

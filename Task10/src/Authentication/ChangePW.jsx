import React, { Component } from "react";
import { Navigate } from "react-router-dom";

export default class ChangePW extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
      error: "",
      redirectToLogin: false,
    };
  }
  handleChangePassword = (e) => {
    e.preventDefault();
    const { currentPassword, newPassword, confirmNewPassword } = this.state;

    if (!currentPassword) {
      this.setState({ error: "Current password is required" });
      return;
    }
    if (!newPassword) {
      this.setState({ error: "New password is required" });
      return;
    }
    if (!confirmNewPassword) {
      this.setState({ error: "Please confirm your new password" });
      return;
    }
    const savedData = localStorage.getItem("userData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);

      if (currentPassword !== parsedData.password) {
        this.setState({ error: "Current password is incorrect" });
        return;
      }
      if (newPassword !== confirmNewPassword) {
        this.setState({ error: "New passwords do not match" });
        return;
      }
      localStorage.setItem(
        "userData",
        JSON.stringify({ ...parsedData, password: newPassword }),
      );
      alert("Password changed successfully!");
      this.setState({ redirectToLogin: true });
    }
  };

  render() {
    if (this.state.redirectToLogin) {
      return <Navigate to="/Login" />;
    }
    return (
      <section className="auth-page">
        <form className="auth-card" onSubmit={this.handleChangePassword}>
          <h1 className="auth-title">Change Password</h1>
          <input
            className="auth-input"
            type="password"
            name="currentPassword"
            placeholder="Current Password"
            value={this.state.currentPassword}
            onChange={(e) => this.setState({ currentPassword: e.target.value })}
          />
          <input
            className="auth-input"
            type="password"
            name="newPassword"
            placeholder="New Password"
            value={this.state.newPassword}
            onChange={(e) => this.setState({ newPassword: e.target.value })}
          />
          <input
            className="auth-input"
            type="password"
            name="confirmNewPassword"
            placeholder="Confirm New Password"
            value={this.state.confirmNewPassword}
            onChange={(e) =>
              this.setState({ confirmNewPassword: e.target.value })
            }
          />
          <button className="auth-button" type="submit">
            Change Password
          </button>
          <p className="auth-error">{this.state.error}</p>
        </form>
      </section>
    );
  }
}

import React, { Component } from "react";
import { Navigate } from "react-router-dom";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      redirectToLogin: false,
      redirectToForgotPassword: false,
      redirectToChangePassword: false,
    };
  }

  componentDidMount() {
    const savedData = localStorage.getItem("userData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      this.setState({ name: parsedData.firstName });
    }
  }
  handleLogout = () => {
    localStorage.removeItem("userData");
    this.setState({ redirectToLogin: true });
  };

  render() {
    if (this.state.redirectToLogin) {
      return <Navigate to="/Login" />;
    }
    if (this.state.redirectToForgotPassword) {
      return <Navigate to="/ForgotPassword" />;
    }
    if (this.state.redirectToChangePassword) {
      return <Navigate to="/Change-Password" />;
    }

    return (
      <div>
        Dashboard
        <h2>Welcome, {this.state.name}!</h2>
        <button
          onClick={() =>
            this.setState({
              redirectToForgotPassword: true,
            })
          }
        >
          Forgot Password
        </button>
        <button
          onClick={() =>
            this.setState({
              redirectToChangePassword: true,
            })
          }
        >
          Change Password
        </button>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}

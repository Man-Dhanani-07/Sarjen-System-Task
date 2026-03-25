import React, { Component, use } from "react";
import { Navigate } from "react-router-dom";

export default class Validation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        username: "",
        email: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        password: "",
      },
      errors: {},
      submittedData: {},
      redirectToLogin: false,
    };
  }
  validateForm = (e) => {
    e.preventDefault();
    //Validate
    const { userData } = this.state;
    let errors = {};
    if (!userData.username) {
      errors.username = "Username is required !";
    }
    if (!userData.firstName) {
      errors.firstName = "first name is required";
    }
    if (!userData.lastName) {
      errors.lastName = "last name is required";
    }
    if (!userData.email) {
      errors.email = "email is reuqired";
    }
    if (!userData.phoneNumber) {
      errors.phoneNumber = "phone number is required";
    }
    if (!userData.password) {
      errors.password = "password is required";
    }
    this.setState({ errors });
    console.log(
      "🚀 ~ Validation ~ constructor ~ userData.email:",
      userData.email,
    );

    if (Object.keys(errors).length === 0) {
      this.setState({
        submittedData: userData,
      });
    }
    localStorage.setItem("userData", JSON.stringify(userData));
    this.setState({ redirectToLogin: true });
  };
  componentDidMount() {
    const savedData = localStorage.getItem("userData");
    if (savedData) {
      this.setState({
        submittedData: JSON.parse(savedData),
      });
    }
  }

  render() {
    if (this.state.redirectToLogin) {
      return <Navigate to="/Login" />;
    }
    return (
      <>
        <section className="validation-wrap">
          <form
            className="validation-form"
            method="POST"
            onSubmit={this.validateForm}
          >
            <h2 className="validation-title">Signup</h2>

            <label htmlFor="username" className="validation-label">
              Username
            </label>
            <input
              id="username"
              type="text"
              name="username"
              value={this.state.userData.username}
              className="validation-input"
              placeholder="Enter username"
              onChange={(e) => {
                this.setState({
                  userData: {
                    ...this.state.userData,
                    username: e.target.value,
                  },
                });
              }}
            />
            <p style={{ color: "red" }}>{this.state.errors.username}</p>

            <label htmlFor="email" className="validation-label">
              Email
            </label>
            <input
              id="email"
              type="text"
              name="email"
              value={this.state.userData.email}
              className="validation-input"
              placeholder="Enter email"
              onChange={(e) => {
                this.setState({
                  userData: {
                    ...this.state.userData,
                    email: e.target.value,
                  },
                });
              }}
            />
            <p style={{ color: "red" }}>{this.state.errors.email}</p>
            <label htmlFor="firstName" className="validation-label">
              FirstName
            </label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={this.state.userData.firstName}
              className="validation-input"
              placeholder="Enter first name"
              onChange={(e) => {
                this.setState({
                  userData: {
                    ...this.state.userData,
                    firstName: e.target.value,
                  },
                });
              }}
            />
            <p style={{ color: "red" }}>{this.state.errors.firstName}</p>
            <label htmlFor="lastName" className="validation-label">
              LastName
            </label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={this.state.userData.lastName}
              className="validation-input"
              placeholder="Enter last name"
              onChange={(e) => {
                this.setState({
                  userData: {
                    ...this.state.userData,
                    lastName: e.target.value,
                  },
                });
              }}
            />
            <p style={{ color: "red" }}>{this.state.errors.lastName}</p>
            <label htmlFor="phoneNumber" className="validation-label">
              PhoneNumber
            </label>
            <input
              id="phoneNumber"
              type="tel"
              name="phoneNumber"
              value={this.state.userData.phoneNumber}
              className="validation-input"
              placeholder="Enter phone number"
              onChange={(e) => {
                this.setState({
                  userData: {
                    ...this.state.userData,
                    phoneNumber: e.target.value,
                  },
                });
              }}
            />
            <p style={{ color: "red" }}>{this.state.errors.phoneNumber}</p>
            <label htmlFor="password" className="validation-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={this.state.userData.password}
              className="validation-input"
              placeholder="Enter password"
              onChange={(e) => {
                this.setState({
                  userData: {
                    ...this.state.userData,
                    password: e.target.value,
                  },
                });
              }}
            />
            <p style={{ color: "red" }}>{this.state.errors.password}</p>
            <button type="submit" className="validation-btn">
              Signup
            </button>
          </form>
        </section>
      </>
    );
  }
}

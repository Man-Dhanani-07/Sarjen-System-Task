import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header className="navbar">
        <div className="brand-wrap">
          <h1 className="navbar-title">Task Board</h1>
          <p className="navbar-subtitle">Mini React Practice Project</p>
        </div>

        <nav className="innerdiv">
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/" end className="nav-link">
                Authentication
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/form" className="nav-link">
                Show Information
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Todo" className="nav-link">
                Todo Application
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

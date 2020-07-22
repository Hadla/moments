import React from "react";
import { NavLink } from "react-router-dom";
import SignUpForm from "../components/SignUpForm";
import Carousel from "../components/Carousel";

import "../App.css";

function SignUpPage() {
  return (
    <div className="App">
      <div className="App__Aside">
        <Carousel />
      </div>
      <div className="App__Form">
        <div className="PageSwitcher">
          <NavLink
            to="/sign-in"
            activeClassName="PageSwitcher__Item--Active"
            className="PageSwitcher__Item"
          >
            Sign In
          </NavLink>
          <NavLink
            to="/sign-up"
            activeClassName="PageSwitcher__Item--Active"
            className="PageSwitcher__Item"
          >
            Sign Up
          </NavLink>
        </div>
        <div className="FormTitle">
          <NavLink
            to="/sign-in"
            activeClassName="FormTitle__Link--Active"
            className="FormTitle__Link"
          >
            Sign In
          </NavLink>{" "}
          or{" "}
          <NavLink
            to="/sign-up"
            activeClassName="FormTitle__Link--Active"
            className="FormTitle__Link"
          >
            Sign Up
          </NavLink>
        </div>
        <SignUpForm />
      </div>
    </div>
  );
}

export default SignUpPage;

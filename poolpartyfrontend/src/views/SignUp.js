// React component in App.js
import React, { Fragment } from "react";
import "../styles/base.css";
import NavBar from "../components/NavBar";
import SignUpForm from "../components/SignUpForm";
import { LinkContainer } from "react-router-bootstrap";

function SignUp() {
  return (
    <Fragment>
      <NavBar />
      <div className="base-page">
        <h1>Sign up to create or join any of our competitions!</h1>
        <div>
          Already have an account? Log in{" "}
          <LinkContainer to="/login">
            <a>here</a>
          </LinkContainer>{" "}
        </div>
        <SignUpForm />
      </div>
    </Fragment>
  );
}

export default SignUp;

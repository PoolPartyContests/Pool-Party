// React component in App.js
import React, { Fragment } from "react";
import "../styles/base.css";
import NavBar from "../components/NavBar/NavBar";
import LoginForm from "../components/LoginForm/LoginForm";
import { LinkContainer } from "react-router-bootstrap";

function Login() {
  return (
    <Fragment>
      <NavBar />
      <div className="base-page">
        <h1>Log in to join any of our competitions!</h1>
        <div>
          Don't have an account? Sign up{" "}
          <LinkContainer to="/signup">
            <a>here</a>
          </LinkContainer>{" "}
        </div>
        <LoginForm />
      </div>
    </Fragment>
  );
}

export default Login;

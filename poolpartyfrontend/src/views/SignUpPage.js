// React component in App.js
import React, { Fragment } from "react";
import "../styles/base.css";
import NavBar from "../components/NavBar";
import SignUpForm from "../components/SignUpForm";

function AboutUs() {
  return (
    <Fragment>
      <NavBar />
      <div className="base-page">
        <SignUpForm />
      </div>
    </Fragment>
  );
}

export default AboutUs;

// React component in App.js
import React, { Fragment } from "react";
import "../styles/base.css";
import SignUpForm from "../components/SignUpForm/SignUpForm";

function AboutUs() {
  return (
    <Fragment>
      <div className="base-page">
        <SignUpForm />
      </div>
    </Fragment>
  );
}

export default AboutUs;

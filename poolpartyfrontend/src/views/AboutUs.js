// React component in App.js
import React, { Fragment } from "react";
import "../styles/base.css";
import NavBar from "../components/NavBar";

function AboutUs() {
  return (
    <Fragment>
      <NavBar />
      <div className="base-page">
        <h1 className="welcome-header">About Us</h1>
        <div className="welcome-text-box">About Us Placeholder</div>
      </div>
    </Fragment>
  );
}

export default AboutUs;

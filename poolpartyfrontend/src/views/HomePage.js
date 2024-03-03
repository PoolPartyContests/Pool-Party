// React component in App.js
import React, { Fragment } from "react";
import "../styles/base.css";
import NavBar from "../components/NavBar";
import ComingSoon from "../components/ComingSoon";

function HomePage() {
  return (
    <Fragment>
      <NavBar />
      <div className="base-page">
        <div className="welcome">
          <h1 className="welcome-header">Welcome to Pool Party!</h1>
          <div className="welcome-text-box">
            We enable football fans to host their own survivor, daily, and
            playoff competitions. We host public competitions that any user can
            join.
          </div>
        </div>
        <ComingSoon />
      </div>
    </Fragment>
  );
}

export default HomePage;

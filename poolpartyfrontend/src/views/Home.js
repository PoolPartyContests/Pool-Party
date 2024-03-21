// React component in App.js
import React, { Fragment } from "react";
import "../styles/base.css";
import ComingSoon from "../components/ComingSoon/ComingSoon";

function Home() {
  return (
    <Fragment>
      <div className="base-page">
        <div className="welcome">
          <h1 className="welcome-header">Welcome to PoolParty!</h1>
          <div className="welcome-text-box">
            We enable football fans to host their own survivor, daily, and
            playoff competitions.
          </div>
        </div>
        <ComingSoon />
      </div>
    </Fragment>
  );
}

export default Home;

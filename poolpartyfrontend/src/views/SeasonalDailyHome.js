// React component in App.js
import React, { Fragment } from "react";
import "../styles/base.css";

function SeasonalDailyHome() {
  return (
    <Fragment>
      <div className="base-page">
        <h1 className="welcome-header">Welcome to Seasonal Daily!</h1>
        <div className="welcome-text-box">
          Here we host seasonal daily competitions.
        </div>
      </div>
    </Fragment>
  );
}

export default SeasonalDailyHome;

// React component in App.js
import React, { Fragment } from "react";
import "../styles/base.css";

function PlayoffChallengeHome() {
  return (
    <Fragment>
      <div className="base-page">
        <h1 className="welcome-header">Welcome to Playoff Challenge!</h1>
        <div className="welcome-text-box">
          Here we host our playoff challenge.
        </div>
      </div>
    </Fragment>
  );
}

export default PlayoffChallengeHome;

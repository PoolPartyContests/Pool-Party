import React, { Fragment, useContext } from "react";
import "../styles/base.css";
import { LinkContainer } from "react-router-bootstrap";
import AuthContext from "../AuthContext";

function Profile() {
  const { loggedInDetails } = useContext(AuthContext);

  return (
    <Fragment>
      <div className="base-page">
        <h1 className="welcome-header">My Profile</h1>
        {loggedInDetails.isAuthenticated ? (
          <div className="welcome-text-box">
            Welcome {loggedInDetails.username}
          </div>
        ) : (
          <div className="welcome-text-box">
            {" "}
            <LinkContainer to="/login">
              <a>Log in here</a>
            </LinkContainer>{" "}
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default Profile;

import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css";
import { LinkContainer } from "react-router-bootstrap";
import axiosInstance from "../../axiosConfig";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const [sessionDetails, setSessionDetails] = useState({
    isAuthenticated: false,
    username: "",
  });

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axiosInstance.get("/api/get-session", {
          withCredentials: true,
        });
        const data = response.data;
        setSessionDetails(response.data);
      } catch (error) {
        console.error("Failed to check login status:", error);
      }
      setIsLoading(false);
    };

    checkLoginStatus();
  }, []);

  const getCsrfToken = async function () {
    try {
      const response = await axiosInstance.get("/api/get-csrf");
      const csrfToken = response.headers.get("X-CSRFToken");
      return csrfToken;
    } catch (error) {
      console.log(error);
    }
    return "";
  };

  const logoutHandler = async () => {
    try {
      const csrf = await getCsrfToken();
      const response = await axiosInstance.post(
        "/api/logout",
        {},
        {
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrf,
          },
          withCredentials: true,
        }
      );
      setSessionDetails({
        isAuthenticated: false,
        username: "",
      });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Navbar expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              src="/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="pool party logo"
            />
            PoolParty
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Competitions" id="basic-nav-dropdown">
              <LinkContainer to="/survivor-pools">
                <NavDropdown.Item>Survivor Pools</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/seasonal-daily">
                <NavDropdown.Item>Seasonal Daily</NavDropdown.Item>
              </LinkContainer>{" "}
              <LinkContainer to="/playoff-challenge">
                <NavDropdown.Item>Playoff Challenge</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer to="/about-us">
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>{" "}
          </Nav>

          {!isLoading && (
            <Nav className="custom-margin">
              {sessionDetails.isAuthenticated ? (
                <NavDropdown title={sessionDetails.username}>
                  <NavDropdown.Item>View Profile</NavDropdown.Item>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>Log In</Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

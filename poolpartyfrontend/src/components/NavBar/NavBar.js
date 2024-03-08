import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css";
import { LinkContainer } from "react-router-bootstrap";
import axiosInstance from "../../axiosConfig";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const username = sessionStorage.getItem("username");
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const response = await axiosInstance.post(
        "http://localhost:8000/api/logout",
        { withCredentials: true } // This is important for session authentication
      );
      sessionStorage.removeItem("username");
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
              src="logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="pool party logo"
            />
            PoolParty
          </Navbar.Brand>
        </LinkContainer>
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
          <Nav className="custom-margin">
            {username ? (
              <NavDropdown title={username}>
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

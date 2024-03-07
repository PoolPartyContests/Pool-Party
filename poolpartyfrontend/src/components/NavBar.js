import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../styles/components.css";
import { LinkContainer } from "react-router-bootstrap";
import "../styles/components.css";

function HomeNavBar() {
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
            </LinkContainer>
          </Nav>
          <Nav className="ml-auto">
            <LinkContainer to="/login">
              <Nav.Link>Log In</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HomeNavBar;

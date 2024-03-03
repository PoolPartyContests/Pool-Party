import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../styles/components.css";

function HomeNavBar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="pool party logo"
          />
          Pool Party
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Competitions" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Playoff Challenge
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Survivor Pools
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Seasonal Daily
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HomeNavBar;

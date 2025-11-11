import { Navbar, Nav } from 'react-bootstrap';
import './general.css';

const Header = () => (
  <Navbar bg="dark" variant="dark" expand="lg" className="navbar-centered">
    <Navbar.Brand href="/">Cedric Nagata</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
      <Nav>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/projects">Projects</Nav.Link>
        {/* <Nav.Link href="/resume">Resume</Nav.Link> */}
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;

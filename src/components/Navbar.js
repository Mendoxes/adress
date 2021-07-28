
// import Navbar from 'react-bootstrap/Navbar'
// import * as ReactBootStrap from "react-bootstrap";
import { Navbar,Nav,NavDropdown } from 'react-bootstrap';


function Navb() {
    return (
<Navbar className="Navi" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">LAPPA AVOCADO</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">Offer</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#contact">Contact Us</Nav.Link>
      <Nav.Link eventKey={2} href="#About">
        About
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        );
    }
    
    export default Navb;
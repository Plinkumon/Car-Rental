import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navbar.css";
import { Link } from 'react-router-dom';


function Navbar1() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar navbar-expand-lg navbar-dark">
      <Container>
        <Navbar.Brand> <Link to='/home'className='logo'><h1 style={{
          fontFamily: 'Montserrat', fontWeight: '700', letterSpacing: '1px', color: '#d4af37',textDecoration:'none'
        }}> <i>AUTORENTZ</i></h1></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Cars" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Economy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Compact
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sedan</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.4">
                SUV
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Luxury</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Sports</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">Convertible</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.8">EV</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>

            <Link to="/login" className="btn btn-outline-light me-2">Login</Link>
            <Link to="/signup" className="btn btn-warning">
          Sign Up
       </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;

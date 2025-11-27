import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import cars from "../data/cars";


function Navbar1() {
  const [username, setUsername] = useState(null);
  useEffect(() => {
    const savedUser = localStorage.getItem("username");
    if (savedUser) setUsername(savedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername(null);
  };



  //Filter Logic
   const [category, setCategory] = useState("All");
  const filteredCars = cars.filter((car) => {
    

    const matchCategory =
      category === "All" || car.type === category;

    return matchCategory;
  });





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
                <Nav.Link href="#cars">Cars</Nav.Link>
           
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
 <div className="nav-right">
  {username ? (
          <>
            <span className="welcome">Welcome, {username}</span>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </>
        ) : (
          <> <Link to="/login" className="btn btn-outline-light me-2">Login</Link>
            <Link to="/signup" className="btn btn-warning">
           
          Sign Up
       </Link></>)}
        </div>
       
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;

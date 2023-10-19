import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSpring, animated } from '@react-spring/web';







export  function MyNav() {
  const springs = useSpring({
    from: { transform: 'translateZ(-1000px)', opacity: 0 },
    to: { transform: 'translateZ(0)', opacity: 1 },
    config: { duration: 1000 },
  
  });
  
  return (
    
    <animated.div style={springs}>
    <Navbar  expand="lg" className="bg-body-tertiary">
    <Container >
      <Navbar.Brand href="#home" className='w-75 w-lg-100 '><h1 className="fw-bolder" >DL</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav"  className='w-100'>
        
          <Nav className="me-auto  d-flex w-100 justify-content-around">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#exp">Experience</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>

       
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </animated.div>
    
    
  )
}

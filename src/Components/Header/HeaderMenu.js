import React from 'react';
import './HeaderMenu.css'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Logo from '../Image/Logo.png'
import {Link} from 'react-router-dom'

const HeaderMenu = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand as={Link} to="/home" className='LogoSizing'><img src={Logo} alt="logo" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto hi">
        <Nav.Link as={Link} to="/home"><span className="MenuBarContent">HOME</span></Nav.Link >
        <Nav.Link as={Link} to="/about"> <span className="MenuBarContent">ABOUT US</span></Nav.Link>
        <Nav.Link as={Link} to="/courses"><span className="MenuBarContent">COURSES</span></Nav.Link>
        <Nav.Link as={Link} to="/instructors"><span className="MenuBarContent">INSTRUCTORS</span></Nav.Link>
        <Nav.Link as={Link} to="/blog"><span className="MenuBarContent">BLOG</span></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default HeaderMenu;

/*
*/
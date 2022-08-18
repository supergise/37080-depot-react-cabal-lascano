import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navBar.css';

function NavBar() {
    return (
    <>
        <Navbar bg="light" variant="light">
        <Container>
            <Navbar.Brand href="#home">
            <img
            src="./logo.png"
            className="d-inline-block align-top logo"
            alt="Logo Universo Depot"
            />
                Depot Universe
            </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#prints">Prints</Nav.Link>
                <Nav.Link href="#about">About me</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
        </Container>
        </Navbar>
    </>
    );
}

export default NavBar;
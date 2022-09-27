import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import './navBar.css';

function NavBar() {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container fluid>

                    <Navbar.Brand as={ Link } to="/">
                        <img
                            src="/logo.png"
                            className="d-inline-block align-center logo"
                            alt="Logo Universo Depot"
                        />
                            Depot Universe
                    </Navbar.Brand>

                    <Nav className="ml-auto">
                        <Nav.Link as={ Link } to="/category/Universes">Universes</Nav.Link>
                        <Nav.Link as={ Link } to="/category/Plants">Plants</Nav.Link>
                        <Nav.Link as={ Link } to="/category/Flowers">Flowers</Nav.Link>
                        <Nav.Link as={ Link } to="/cart">
                            <CartWidget />
                        </Nav.Link>
                    </Nav>

                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;
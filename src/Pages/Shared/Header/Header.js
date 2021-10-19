import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar bg="primary" variant="dark" sticky="top" collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/home">
                    Health Queires
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
                    <Nav.Link as={Link} to="/services">Services</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    {
                        user.displayName ?
                            <button onClick={logOut} className="btn btn-danger">Logout </button>
                            :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    }
                    <Navbar.Text>
                        {
                            user.displayName ?
                                <span> Signed in as < a href="/login">{user.displayName && (user.displayName)}</a></span>
                                :
                                ''
                        }
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;
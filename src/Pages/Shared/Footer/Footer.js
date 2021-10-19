import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="#home">Health Queires</Navbar.Brand>

                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        © 2021 Health Queries. All rights reserved
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Footer;
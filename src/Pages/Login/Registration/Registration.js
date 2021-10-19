import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row, Button, Spinner } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
const Registration = () => {

    const auth = getAuth();
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLodaing] = useState(false);

    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || '/home';

    const handelEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handelPassword = (e) => {
        setPassword(e.target.value);
    }
    const handelNameChange = (e) => {
        setName(e.target.value);
    }
    const handelRegistration = (e) => {
        e.preventDefault();
        setError('');
        if (!name) {
            setError('Name is required!')
            return;
        }
        if (!email) {
            setError('Email is required!')
            return;
        }
        if (password.length < 6) {
            setError('Password Must be at least 6 charecters long.')
            return;
        }
        setIsLodaing(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const SignUpUser = result.user;
                setUser(SignUpUser);
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    setUser(auth.currentUser);
                    setIsLodaing(false);
                }).catch((error) => {
                    setError(error.message);
                    setIsLodaing(false);
                });
                history.push(redirectUrl)
            })
            .catch(error => {
                setError(error.message);
                setIsLodaing(false);
            })
    }
    return (
        <Container className="mt-4">
            <Row>
                <Col className="col-md-5 login-container">
                    <h2>Register</h2>
                    <Form onSubmit={handelRegistration}>
                        <Form.Group className="mb-3 text-start" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" onBlur={handelNameChange} />
                        </Form.Group>
                        <Form.Group className="mb-3 text-start" controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onBlur={handelEmailChange} />
                        </Form.Group>
                        <Form.Group className="mb-3 text-start" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onBlur={handelPassword} />
                        </Form.Group>
                        <div className="text-danger">
                            {error}
                        </div>
                        {
                            isLoading ?
                                <Spinner animation="border" variant="danger" />
                                :
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                        }

                    </Form>
                    <p>You have already registered? <Link to="/login">Login</Link></p>
                </Col>
            </Row>
        </Container>
    );
};

export default Registration;
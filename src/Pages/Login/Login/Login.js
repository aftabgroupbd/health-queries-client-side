import React, { useState } from 'react';
import { Col, Container, Form, Row, Button, Spinner } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';
const Login = () => {

    const { signinUsingGoogle } = useAuth();
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLodaing] = useState(false);
    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || '/home';

    const handelGoogleLogIn = () => {
        signinUsingGoogle()
            .then((result) => {
                history.push(redirectUrl)
            }).catch((error) => {

            });
    }
    const handelEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handelPassword = (e) => {
        setPassword(e.target.value);
    }
    const handelEmailLogin = (e) => {
        e.preventDefault();
        setError('');
        if (!email) {
            setError('Email is required!')
            return;
        }
        if (password.length < 6) {
            setError('Password Must be at least 6 charecters long.')
            return;
        }
        setIsLodaing(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const loginUser = userCredential.user;
                setUser(loginUser);
                setIsLodaing(false);
                history.push(redirectUrl)
            })
            .catch((error) => {
                setIsLodaing(false);
                setError(error.message);
            });
    }
    return (
        <Container className="mt-4">
            <Row>
                <Col className="col-md-5 login-container">
                    <h2>Login</h2>
                    <Form onSubmit={handelEmailLogin}>

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
                    <br />
                    <p>New User? <Link to="/register">Create Account</Link></p>
                    --------------- OR ---------------
                    <p>Sign in using</p>
                    <Button onClick={handelGoogleLogIn} variant="warning" title="you can sign in using google" className="google-signin" type="button">
                        <i className="fab fa-google"></i>
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
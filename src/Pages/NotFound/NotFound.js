import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Error404 from '../../images/404.jpg';
import './NotFound.css';
const NotFound = () => {
    return (
        <Container>
            <Row>
                <Col className="col-md-10 m-auto">
                    <img className="error-image" src={Error404} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound;
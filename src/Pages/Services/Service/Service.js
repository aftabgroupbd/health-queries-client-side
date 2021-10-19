import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';
const Service = (props) => {
    const { id, name, price, img } = props.service;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <h5>{name}</h5>
                    <p><small>{price}$</small></p>
                    <Link to={`/service/${id}`}><Button variant="info">More Info</Button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;
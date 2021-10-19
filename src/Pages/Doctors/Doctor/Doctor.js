import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Doctor.css';
const Doctor = (props) => {
    const { id, name, title, specialist, img } = props.doctor;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <h5>{name}</h5>
                    <p><b>{specialist}</b></p>
                    <p><small>{title}</small></p>
                    <Link to={`/doctor/${id}`}><Button variant="info">Detail</Button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Doctor;
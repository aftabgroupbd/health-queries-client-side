import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Spinner, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [services, setServices] = useState([]);
    const [service, setService] = useState({});
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/aftabgroupbd/doctors-list/main/services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    useEffect(() => {
        if (services.length) {
            const findService = services.find(singleService => singleService.id === parseInt(serviceId));
            if (findService) {
                setService(findService);
            }
        }
    }, [services]);
    if (!Object.keys(service).length) {
        return <Spinner animation="border" variant="danger" />
    }
    return (
        <Container className="mt-4">
            <Card className="py-3">
                <Row>
                    <Col className="col-md-5">

                        <Card.Img variant="top" src={service.img} />

                    </Col>
                    <Col className="col-md-7">
                        <Card.Body>
                            <h5>{service.name}</h5>
                            <p><b>{service.price}$</b></p>
                            <p>{service.details}</p>
                            <Link to="/services"><Button variant="info">Service List</Button></Link>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
};

export default ServiceDetail;
import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Service from './Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/aftabgroupbd/doctors-list/main/services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    console.log(services);
    if (services.length === 0) {
        return <Spinner animation="border" variant="danger" />
    }
    return (
        <Container className="mt-3">
            <h3 className="text-start">Services:</h3>
            <hr />
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </Row>
        </Container>
    );
};

export default Services;
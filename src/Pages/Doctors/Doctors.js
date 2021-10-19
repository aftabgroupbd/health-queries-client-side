import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Doctor from './Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    const [isLoading, setIsLodaing] = useState(true);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/aftabgroupbd/doctors-list/main/doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data), setIsLodaing(false));
    }, []);
    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
    }
    return (
        <Container className="mt-3">
            <h3 className="text-start">Doctors:</h3>
            <hr />
            <Row xs={1} md={4} className="g-4">
                {
                    doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                }
            </Row>
        </Container>
    );
};

export default Doctors;
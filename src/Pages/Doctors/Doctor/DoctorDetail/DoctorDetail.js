import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Spinner, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './DoctorDetail.css';
const DoctorDetail = () => {

    const { doctorId } = useParams();
    const [doctors, setDoctors] = useState([]);
    const [doctor, setDoctor] = useState({});
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/aftabgroupbd/doctors-list/main/doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, []);
    useEffect(() => {
        if (doctors.length) {
            const findDoctor = doctors.find(singleDoctor => singleDoctor.id === parseInt(doctorId));
            if (findDoctor) {
                setDoctor(findDoctor);
            }
        }
    }, [doctors]);

    if (!Object.keys(doctor).length) {
        return <Spinner animation="border" variant="danger" />
    }
    return (
        <Container className="mt-4">
            <Card className="py-3">
                <Row>
                    <Col className="col-md-5">

                        <Card.Img variant="top" src={doctor.img} />

                    </Col>
                    <Col className="col-md-7">
                        <Card.Body>
                            <h5>{doctor.name}</h5>
                            <p><b>{doctor.specialist}</b></p>
                            <p><small>{doctor.title}</small></p>
                            <p>{doctor.details}</p>
                            <Link to="/doctors"><Button variant="info">Doctor List</Button></Link>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
};

export default DoctorDetail;
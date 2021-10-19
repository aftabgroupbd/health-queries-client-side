import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import banner1 from '../../../images/banners/1.jpg';
import banner2 from '../../../images/banners/2.jpg';
import banner3 from '../../../images/banners/3.jpg';
import './Banner.css';
const Banner = () => {
    return (
        <Container>
            <div className="banner">
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Collecting Patient blood</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Maintain test sequence</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Carefully prepared test report</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </Container>
    );
};

export default Banner;
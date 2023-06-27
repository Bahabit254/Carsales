import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import CarCard from './CarCard'; // assuming CarCard is a separate component for displaying car information
import beamer from './beamer.jpg';

class Welcome extends Component {

    render() {
        return (
            <Container fluid style={{ padding: 'auto 20px' }}>
                <section style={{ minHeight: '400px' }} id="hero">
                    <Row className="hero-row align-items-center" style={{ backgroundImage: `url(${beamer})`, minHeight: '350px', objectFit: 'cover' }}>
                        <Col lg={10} className="mx-15 text-center text-font">
                            <h1>Welcome to Maisha Car Dealers</h1>
                            <p>Where quality and great customer service are our priorities</p>
                        </Col>
                    </Row>
                </section>
            </Container>
        );
    }
}

export default Welcome;

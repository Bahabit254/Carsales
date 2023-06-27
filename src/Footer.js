import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './index.css';
import { BsFillEnvelopeFill, BsFillPinMapFill, BsFillTelephonePlusFill } from 'react-icons/bs';

export default class Footer extends Component {
    render() {
        return (
            <footer className="bg-dark text-white">
                <Container fluid style={{ padding: '5px' }}>
                    <Row style={{ padding: '5px 5px' }}>
                        <Col md={3}>
                            <img className='custom-size rounded' src='/images/maisha.png' alt='Maisha cars logo'></img>
                        </Col>
                        <Col md={3}>
                            <h2>About Us</h2>
                            <p className='text-justify'>Welcome to our car sales company! We are a team of dedicated professionals who are passionate about helping you find your perfect car. With years of experience in the industry, we understand the needs and preferences of our customers, and we pride ourselves on providing a personalized and hassle-free car buying experience.</p>
                        </Col>
                        <Col md={3}>
                            <h4>Quick Links</h4>
                            <ul className="list-unstyled">
                                <li><a className='nav-link' href='/cars'>Cars for Sale</a></li>
                                <li><a className='nav-link' href='/quotation'>Get A Quotation</a></li>
                                <li><a className='nav-link' href='/about'>About Us</a></li>
                                <li><a className='nav-link' href='/contacts'>Contact Us</a></li>
                            </ul>
                        </Col>
                        <Col md={3}>
                            <h4>Contact Us</h4>
                            <ul className="list-unstyled">
                                <li><BsFillPinMapFill /> 123 Main Street, Anytown, Kenya</li>
                                <li><BsFillEnvelopeFill /> info@maishacars.com</li>
                                <li><BsFillTelephonePlusFill /> (123) 456-7890</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }

};



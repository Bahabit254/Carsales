import React, { Component } from "react";
import { Container } from 'react-bootstrap';

export default class Vision extends Component {
    render() {
        return (
            <Container fluid className="bg-secondary shadow">

                <section className='text-center' style={{ minHeight: '300px', width: '100%' }}>
                    <h2 className="pt-5">Why Choose Us?</h2>
                    <p className='py-2 px-5'>
                        Our mission is to offer a wide range of high-quality cars at affordable prices, providing exceptional customer service every step on the way. Whether you are looking for a newly imported or used car, our knowledgeable sales team is here to help you find the right car to fit your lifestyle and budget. At our car sales company, we believe transparency and honesty is the best policy, which is why we provide detailed information about our cars and their history, so you can make an informed decision when purchasing a vehicle. We also offer financing options to make the car buying is as smooth and easy as possible.
                    </p>
                </section>


            </Container>
        )
    }

}


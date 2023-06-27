import React from 'react';
import './css/AboutUs.css';

const AboutUs = () => {
    return (
        <div className="container container-size bg-dark text-center text-light mw-100 px-25">
            <div className="row">
                <div className="col-md-6">
                    <h2 className='p-10'>About Us</h2>
                    <p className='p-15'>
                        Maisha Car Dealership is a leading provider of high-quality vehicles. We have been serving customers for
                        over 10 years, offering a wide selection of cars from various brands. Our mission is to provide the best
                        car buying experience to our customers.
                    </p>
                    <p className='p-15'>
                        At Maisha Car Dealership, we understand that buying a car is a significant decision. That's why we ensure
                        that all our vehicles undergo thorough inspections and are in excellent condition. We also offer flexible
                        financing options to make owning a car more affordable.
                    </p>
                </div>
                <div className="col-md-6">
                    <img
                        className="img-fluid"
                        src="/images/crown2.jpg"
                        alt="About Us"
                    />
                </div>
            </div>
            <div className='content-spacing'>
                <h1 className="text-center">Mission Statement</h1>
                <p>
                    "Our mission at Maisha Car Dealership is to provide our customers with the highest quality vehicles and exceptional customer service.
                    We aim to be a trusted source for reliable and well-maintained cars, ensuring that our customers find the perfect vehicle to suit their needs.
                    We strive to create a seamless and enjoyable car buying experience, guiding our customers throughout the process and offering competitive financing options. Our goal is to exceed customer expectations and establish long-lasting relationships built on trust and satisfaction."
                </p>
            </div>
            <div className='content-spacing'>
                <h1 className="text-center">Vision Statement</h1>
                <p>
                    "Our vision at Maisha Car Dealership is to be the preferred destination for individuals and families seeking to purchase their dream cars.
                    We envision ourselves as a leading car dealership that offers a diverse selection of vehicles from various brands, catering to different preferences and budgets.
                    We strive to continuously enhance our services, leveraging the latest technologies and industry trends to provide innovative solutions that meet our customers' evolving needs.
                    We aim to be recognized for our integrity, professionalism, and commitment to delivering exceptional value to every customer.
                    Through our unwavering dedication, we aspire to become a trusted name in the automotive industry, known for excellence and customer satisfaction."
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
import React from 'react';
import './index.css';
import { BsFillEnvelopeAtFill, BsTelephoneFill } from "react-icons/bs";
import MapComponent from './MapComponent';

const ContactUs = () => {
    return (
        <div className='component-box'>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Contact Us</h2>
                        <p>Maisha Car Dealership<br />P.O BOX Private Bag - 12345<br />Nairobi, Kenya.</p>
                        <p><BsFillEnvelopeAtFill /> contact@maishacars.com</p>
                        <p><BsTelephoneFill /> 123-456-7890</p>

                        <h2>Feedback</h2>
                        <form>
                            <div class="mb-3">
                                <label for="InputName1" class="form-label">First Name</label>
                                <input type="name" class="form-control" id="InputName1" />
                            </div>
                            <div class="mb-3">
                                <label for="InputName2" class="form-label">Second Name</label>
                                <input type="name" class="form-control" id="InputName2" />
                            </div>
                            <div class="mb-3">
                                <label for="InputEmail" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>

                    <div className="col-md-6">
                        <h2>Location</h2>
                        < MapComponent />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ContactUs;

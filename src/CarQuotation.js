import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase-config';

function CarQuotation() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const carId = searchParams.get('carId');
    const carBrand = searchParams.get('brand');
    const carModel = searchParams.get('model');

    const [contactInfo, setContactInfo] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Save the form data to Firestore
            const docRef = await addDoc(collection(db, 'formSubmissions'), {
                carId,
                carBrand,
                carModel,
                contactInfo,
            });

            console.log('Form submitted successfully. Document ID:', docRef.id);

            // Reset the form
            setContactInfo({
                name: '',
                email: '',
                phone: '',
            });
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactInfo((prevContactInfo) => ({
            ...prevContactInfo,
            [name]: value,
        }));
    };

    return (
        <div className='d-flex justify-content-center align-items-center vh-70'>
            <div>
                <h1 className='py-5'>Car Contact Form</h1>
                <img className='custom-size p-2' src='/images/maisha.png' alt='maisha logo' />
                <h3 className='py-3'>
                    {carBrand} {carModel}
                </h3>
                <form onSubmit={handleSubmit}>
                    <div className='mb-5 p-2'>
                        <label className='form-label' htmlFor='name'>Name:</label>
                        <input className='form-control'
                            type='text'
                            id='name'
                            name='name'
                            value={contactInfo.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='mb-5 p-2'>
                        <label className='form-label' htmlFor='email'>Email:</label>
                        <input className='form-control'
                            type='email'
                            id='email'
                            name='email'
                            value={contactInfo.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='mb-5 p-2'>
                        <label className='form-label' htmlFor='phone'>Phone:</label>
                        <input className='form-control'
                            type='tel'
                            id='phone'
                            name='phone'
                            value={contactInfo.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button className='btn btn-primary mb-5' type='submit'>Submit</button>
                </form>
            </div>

        </div>
    );
}

export default CarQuotation;

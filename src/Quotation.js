import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase-config';

const Quotation = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [features, setFeatures] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !phone) {
            setShowErrorMessage(true);
            setTimeout(() => {
                setShowErrorMessage(false);
            }, 3000);
            return;
        }

        try {
            // Save the form data to Firestore
            const docRef = await addDoc(collection(db, 'quotations'), {
                name,
                email,
                phone,
                brand,
                model,
                features,
            });

            console.log('Form submitted successfully. Document ID:', docRef.id);

            // Reset the form
            setName('');
            setEmail('');
            setPhone('');
            setBrand('');
            setModel('');
            setFeatures('');

            setShowSuccess(true);
            setTimeout(() => {
                setShowSuccess(false);
            }, 3000);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-60">
            <div style={{ width: '500px' }}>
                <h1 className="text-center">Request a Quotation</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Full Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email Address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="brand" className="form-label">
                            Brand
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="brand"
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="model" className="form-label">
                            Model
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="model"
                            value={model}
                            onChange={(e) => setModel(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="features" className="form-label">
                            Special Features
                        </label>
                        <textarea
                            type="text"
                            className="form-control"
                            id="features"
                            value={features}
                            onChange={(e) => setFeatures(e.target.value)}
                        />
                    </div>
                    <div className='py-2'>
                        <button type="submit" className="btn btn-primary px-5">
                            Submit
                        </button>
                        {showErrorMessage && (
                            <h4 className='error'>Please fill in the required fields.</h4>
                        )}
                        {showSuccess && (
                            <h4 className='success'>Successfully Submitted!</h4>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Quotation;

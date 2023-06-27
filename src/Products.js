import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";

const Products = () => {
    const [cars, setCars] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [carsPerPage] = useState(6);
    const usersRef = collection(db, "cars");
    const navigate = useNavigate();

    useEffect(() => {
        const getCars = async () => {
            const carData = await getDocs(usersRef);
            setCars(carData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getCars();
    }, []);

    const handleBuy = (car) => {
        navigate(
            `/car?carId=${car.id}&brand=${encodeURIComponent(
                car.brand
            )}&model=${encodeURIComponent(car.model)}`
        );
    };

    // Calculate the index of the last car on the current page
    const lastIndex = currentPage * carsPerPage;
    // Calculate the index of the first car on the current page
    const firstIndex = lastIndex - carsPerPage;
    // Get the cars to be displayed on the current page
    const currentCars = cars.slice(firstIndex, lastIndex);

    const nextPage = () => {
        if (lastIndex < cars.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className="row">
            {currentCars.map((car) => (
                <div key={car.id} className="col-lg-6 py-2">
                    <div className="card shadow py-2">
                        <div className="card-body">
                            <h5 className="card-title">{car.brand}</h5>
                            <h5 className="card-title">{car.model}</h5>
                            <ul>
                                {car.features.map((feature, index) => (
                                    <li className="list-unstyled" key={index}>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <p className="card-text float-start bold">KES: {car.price}</p>
                            <button
                                className="btn btn-primary float-end"
                                onClick={() => handleBuy(car)}
                            >
                                BUY
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            <div className="pagination py-2">
                {lastIndex < cars.length && (
                    <button
                        className="btn btn-primary"
                        onClick={nextPage}
                        style={{ margin: '0 auto' }}
                    >
                        NEXT
                    </button>
                )}
            </div>
        </div>
    );
};

export default Products;

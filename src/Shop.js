import React from 'react';
import './index.css';
import Products from './Products';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function Shop() {
    return (
        <div className="App">
            <div class="container-fluid p-10 carousel-size">
                <div id="carouselControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="/images/project-2.png" class="d-block w-100" alt="banner" />
                        </div>
                        <div class="carousel-item">
                            <img src="/images/project-1.png" class="d-block w-100" alt="banner" />
                        </div>
                        <div class="carousel-item">
                            <img src="/images/project-3.png" class="d-block w-100" alt="banner" />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div class="container-fluid my-5">
                <div class="row">
                    <div class="col">
                        <div class="img-container">
                            <img src="/images/banner-1.png" class="img-thumbnail" alt="banner" />
                        </div>
                    </div>
                    <div class="col order-5">
                        <div class="img-container">
                            <img src="/images/banner-2.png" class="img-thumbnail" alt="banner" />
                        </div>
                    </div>
                    <div class="col order-1">
                        <div class="img-container">
                            <img src="/images/banner-3.png" class="img-thumbnail" alt="banner" />
                        </div>
                    </div>
                </div>
            </div>


            <section className='container-fluid'>
                < Products />

            </section>
        </div>
    );
}
export default Shop;
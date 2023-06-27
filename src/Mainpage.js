import React from "react";
import './App.css';
import Welcome from "./Welcome";
import Products from "./Products";
import Vision from "./Vision";

export default function Shopcart() {

    return (
        <div className="container-fluid mydiv">
            <Welcome />
            <Products />
            <Vision />
        </div>
    )

}


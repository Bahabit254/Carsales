import React from "react";
import './index.css';
import { BsFillHouseDoorFill, BsFillCarFrontFill } from "react-icons/bs";
import { FaInfoCircle, FaAlignJustify, FaClipboardCheck, FaPhone } from "react-icons/fa";


export default function Navbar() {

    return (
        <nav className="navbar navbar-expand-md navbar-light" id="neubar">
            <div className="container">
                <a className="navbar-brand" href="/"><img src="/images/maisha.svg" height="60" alt='logo' /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className=" collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto ">
                        <li className="nav-item">
                            <a className="nav-link mx-2" aria-current="page" href="/"><BsFillHouseDoorFill />Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-2" href="/cars"><BsFillCarFrontFill />Cars</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-2" href="/about"><FaInfoCircle /> About Us</a>
                        </li>
                        <li className="nav-item dropdown">
                            <button
                                className="nav-link mx-2 dropdown-toggle btn btn-link"
                                id="navbarDropdownMenuLink"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <FaAlignJustify /> Company
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li>
                                    <a className="dropdown-item" href="/quotation" >
                                        <FaClipboardCheck /> Get Quotation
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/contacts">
                                        <FaPhone /> Contact us
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

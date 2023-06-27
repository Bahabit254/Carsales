import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Mainpage from './Mainpage';
import Product from './Product';
import Shop from './Shop';
import Navbar from './Navbar';
import Footer from "./Footer";
import NotFound from './NotFound';
import AboutUs from './AboutUs';
import Quotation from './Quotation';
import ContactUs from './ContactUs';
import CarQuotation from './CarQuotation';

export default class App extends Component {
  render() {
    return (
      < Router>
        <div> < Navbar /> </div>

        <Routes>
          <Route path="/" element={< Mainpage />} />
          <Route path="/cars" element={< Shop />} />
          <Route path="/product" element={< Product />} />
          <Route path="/about" element={< AboutUs />} />
          <Route path="/quotation" element={< Quotation />} />
          <Route path="/contacts" element={< ContactUs />} />
          <Route path="/car" element={< CarQuotation />} />
          <Route path="*" element={< NotFound />} />
        </Routes>
        <div>
          <Footer />
        </div>
      </Router>

    );
  };
}


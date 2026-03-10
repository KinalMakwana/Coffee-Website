import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import { HashRouter } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom"
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Services from './Services';
import Menus from './Menus';
import Reservation from './Reservation';
import Testimonial from './Testimonial';
import Contact from './Contact';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <Home /> */}

    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/Menus" element={<Menus/>} />
        <Route path="/Reservation" element={<Reservation/>} />
        <Route path="/Testimonial" element={<Testimonial/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
      <Footer />
      
    </HashRouter>
  </>
);


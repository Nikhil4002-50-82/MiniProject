import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import MainData from './components/MainData';
import Spot from './components/Spot';
import AboutCompany from './components/AboutCompany';
import Footer from './components/Footer';
import AboutProductHome from './components/AboutProductHome';

const App = () => {
    return (
        <div className='font-custom'>
            <BrowserRouter future={{ v7_relativeSplatPath: true }}>
                <Header />
                <Routes>
                    <Route path="/" element={<MainData />} />
                    <Route path="/requestSpot" element={<Spot title="Fill the form to Request a Parking Spot" />} />
                    <Route path='/registerSpot' element={<Spot title="Fill the form to Register your Parking Spot" />} />
                    <Route path="/about" element={<AboutCompany />} />
                    <Route path='/features' element={<AboutProductHome />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;

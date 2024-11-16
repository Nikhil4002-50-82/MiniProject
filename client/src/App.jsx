import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import MainData from './components/MainData';
import RequestSpot from './components/RequestSpot';
import RegisterSpot from './components/RegisterSpot';
import AboutCompany from './components/AboutCompany';
import Footer from './components/Footer';
import AboutProductHome from './components/AboutProductHome';

const App = () => {
    return (
        <div>
            <BrowserRouter future={{ v7_relativeSplatPath: true }}>
                <Header />
                <Routes>
                    <Route path="/" element={<MainData />} />
                    <Route path="/requestSpot" element={<RequestSpot />} />
                    <Route path='registerSpot' element={<RegisterSpot />} />
                    <Route path="/about" element={<AboutCompany />} />
                    <Route path='/features' element={<AboutProductHome />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;

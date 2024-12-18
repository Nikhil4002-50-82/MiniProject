import React,{useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import reqBtnContext from './components/context/reqBtnContext';
import subBtnContext from './components/context/subBtnContext';
import { location,topp } from './components/context/reqContext';

import Header from './components/Header';
import Home from './components/Home';
import Spot from './components/Spot';
import Register from './components/Register';
import Request1 from './components/Request1';
import Request2 from './components/Request2';
import SubmitResponse from './components/SubmitResponse';
import AboutCompany from './components/AboutCompany';
import Footer from './components/Footer';
import AboutProductHome from './components/AboutProductHome';
import SearchProject from './components/SearchProject';

const App = () => {
    const [reqBtn,setReqBtn]=useState(false);
    const [subBtn,setSubBtn]=useState(false);
    const [loc,setLoc]=useState("");
    const [top,setTop]=useState("")
    return (
        <location.Provider value={{loc,setLoc}} >
            <topp.Provider value={{top,setTop}} >
            <subBtnContext.Provider  value={{subBtn,setSubBtn}}>
            <reqBtnContext.Provider value={{reqBtn,setReqBtn}}>
                <div className='font-custom'>
                    <BrowserRouter
                     future={{
                        v7_relativeSplatPath: true, // Opt-in to the new v7 relative splat path behavior
                        v7_startTransition: true,   // Opt-in to wrapping state updates in React.startTransition
                    }}
                    >
                        <Header />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/requestSpot" element={subBtn?<SubmitResponse />:<Spot title="Fill the form to Request a Parking Spot" Component={reqBtn?Request2:Request1} />} />
                            <Route path='/registerSpot' element={subBtn?<SubmitResponse />:<Spot title="Fill the form to Register a Parking Spot" Component={Register} />} />
                            <Route path="/about" element={<AboutCompany />} />
                            <Route path='/features' element={<AboutProductHome />} />
                            <Route path="/search" element={<SearchProject />} />
                        </Routes>
                        <Footer />
                    </BrowserRouter>
                </div>
            </reqBtnContext.Provider>
        </subBtnContext.Provider>  
            </topp.Provider>
        </location.Provider>
    );
};

export default App;

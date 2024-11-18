import React from 'react';
import { useNavigate } from "react-router-dom";

import { IoMdCall } from "react-icons/io";

const Header = () => {
    const navigate = useNavigate();
    
    function handleChange(event) {
        const value = event.target.value;
        if (value)navigate(value);
    }

    return (
        <div className='w-[100%] h-[4.5em] p-4 pl-10 pr-10 z-10 bg-white flex justify-between items-center fixed'>
            <div className='flex'>
                <h1 className='text-4xl mr-10 items-center font-semibold'>ZoomSpot</h1>
                <ul className='flex w-full items-center'>
                    <li className='mr-5'>
                        <select name="" id="" className='bg-white focus:outline-none font-semibold text-lg' onChange={handleChange} defaultValue="">
                            <option value="/">Company</option>
                            <option value="/about">Go to About</option>
                            <option value="/features">Features</option>
                        </select>
                    </li>
                    <li className='mr-5 font-semibold text-lg'><a href="/requestSpot">Request Spot</a></li>
                    <li className='font-semibold text-lg'><a href="/registerSpot">Register Spot</a></li>
                </ul>
            </div>
            <div className='flex'>
                <p className='flex items-center justify-between mr-3'><IoMdCall className='text-2xl'/>+91 77952 78310</p>
                <button className='ml-3 font-bold bg-[#FFE08A] p-4 pt-2 pb-2 rounded-lg'>Log in</button>
            </div>
        </div>
    );
};

export default Header;

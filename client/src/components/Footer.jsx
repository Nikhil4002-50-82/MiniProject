import React from 'react';

import { PiPhoneCallFill } from "react-icons/pi";

const Footer = () => {
  return (
    <div><div className='grid grid-rows-[1fr_1fr] gap-5 p-[3em] bg-[#1F2E3B] text-white'>
    <div className=' grid grid-cols-3 gap-10'>
        <div className='p-3'>
            <h1 className='text-4xl mr-10 mb-4 items-center'>ZoomSpot</h1>
            <p className='text-gray-400'>We provide the cheap and best parking spot in India.
            You can't park cheaper!</p>
        </div>
        <div className='p-3'>
            <h1 className='text-3xl mr-10 mb-4 items-center'>Top Searched Places</h1>
            <ul className='text-gray-400'>
                <li className='mb-1 hover:text-[#FFE08A]'>Parking Spot in JP-Nagar</li>
                <li className='mb-1 hover:text-[#FFE08A]'>Parking Spot in BTM</li>
                <li className='mb-1 hover:text-[#FFE08A]'>Parking Spot in Rajajinagar</li>
                <li className='mb-1 hover:text-[#FFE08A]'>Parking Spot in Banashankari</li>
            </ul>
        </div>
        <div className='p-3'>
            <h1 className='text-3xl mr-10 mb-4 items-center '>Contact Info</h1>
            <p className='text-gray-400'>Customer Service:</p>
            <p className='text-gray-400 mt-2 flex items-center'><PiPhoneCallFill className='text-blue-600 text-4xl'/>+91 76315 44765</p>
            <p className='text-gray-400 mt-2 flex items-center'><PiPhoneCallFill className='text-blue-600 text-4xl'/>+91 77952 78310</p>
            <p className='text-gray-400 mt-2 flex items-center'><PiPhoneCallFill className='text-blue-600 text-4xl'/>+91 00000 00000</p>
        </div>
    </div>
    <div>
        <h1 className='text-3xl mr-10 mb-4 items-center'>Discover</h1>
        <ul className='text-gray-400 list-disc'>
            <li className='mb-1 hover:text-[#FFE08A] marker:text-[#FFE08A]'>Features</li>
            <li className='mb-1 hover:text-[#FFE08A] marker:text-[#FFE08A]'>Blogs</li>
            <li className='mb-1 hover:text-[#FFE08A] marker:text-[#FFE08A]'>Request Spot</li>
            <li className='mb-1 hover:text-[#FFE08A] marker:text-[#FFE08A]'>Register Spot</li>
            <li className='mb-1 hover:text-[#FFE08A] marker:text-[#FFE08A]'>FAQ</li>
            <li className='mb-1 hover:text-[#FFE08A] marker:text-[#FFE08A]'>Contact Us</li>
        </ul>
    </div>
</div>
<div className='bg-[#162029] text-gray-400 h-[8em] flex justify-center items-center'>
    <div>
        <p>©2023 ALL RIGHTS RESERVED Terms & Conditions | Privacy Policy</p>
    </div>
</div>
</div>
    
  )
}

export default Footer;

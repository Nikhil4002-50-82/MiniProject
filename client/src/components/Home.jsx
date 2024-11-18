import React,{useState} from 'react';

import AboutWebAppHome from './AboutWebAppHome';
import AboutProductHome from './AboutProductHome';
import AboutCompany from './AboutCompany';

import { FaCar } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";

const Home = () => {
  const [findClicked,setFindClicked]=useState(false);
  const [rentClicked,setRentClicked]=useState(false);
  return (
    <div className='w-[100%] h-full pt-[4.5em]'>
        <div className='p-[5em] pl-[10em]'>
            <div className='w-[60%] flex justify-around shadow-custom rounded-xl'>
              <div className={`flex flex-col p-5 justify-center items-center cursor-pointer ${findClicked?'text-[#0085AD]':''}`} onClick={()=>{
                setRentClicked(false);
                setFindClicked(true);
              }}>
                <FaCar className='text-2xl mb-4' />
                <p>Find Spot</p>
              </div>
              <div className={`flex flex-col p-5 justify-center items-center cursor-pointer ${rentClicked?'text-[#0085AD]':''}`} onClick={()=>{
                setFindClicked(false);
                setRentClicked(true);
              }}>
                <FaMapLocation className='text-2xl mb-4' />
                <p>Rent Spot</p>
              </div>
            </div>
            <hr className='w-[60%]'/>
        </div>
        <div className='grid grid-cols-4 gap-10  p-[5em] pb-0 mb-[3em]'>
            <AboutWebAppHome title="Save money" description="Save up to 30% on our site compared to the cost of other parking platform." />
            <AboutWebAppHome title="Save Time" description="It's easy to compare parking spot. Booking a reservation is quick and simple." />
            <AboutWebAppHome title="Save Stress" description="Guarantee your parking spot by booking in advance. Can't make it? Cancellations are free." />
            <AboutWebAppHome title="Safety & Security" description="Don't worry, we got you covered. Choose the safety features like CCTV, Securtiy guard etc." />
        </div>
        <div className='mb-[1em]'>
            <AboutProductHome />
        </div>
        <AboutCompany />
    </div>
  );
}

export default Home;

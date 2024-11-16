import React from 'react';

import AboutWebAppHome from './AboutWebAppHome';
import AboutProductHome from './AboutProductHome';
import AboutCompany from './AboutCompany';

const Home = () => {
  return (
    <div className='w-[100] h-full pt-[4.5em]'>
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

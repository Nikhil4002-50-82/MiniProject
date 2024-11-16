import React from 'react';
import AboutCompanyHome from './AboutCompanyHome';
import AboutWebAppHome from './AboutWebAppHome';
import AboutProductHome from './AboutProductHome';

const Home = () => {
  return (
    <div className='w-[100] h-full pt-[4.5em]'>
        <div className='grid grid-cols-4 gap-10  p-[5em] mb-[3em]'>
            <AboutWebAppHome title="Save money" description="Save up to 30% on our site compared to the cost of other parking platform." />
            <AboutWebAppHome title="Save Time" description="It's easy to compare parking spot. Booking a reservation is quick and simple." />
            <AboutWebAppHome title="Save Stress" description="Guarantee your parking spot by booking in advance. Can't make it? Cancellations are free." />
            <AboutWebAppHome title="Safety & Security" description="Don't worry, we got you covered. Choose the safety features like CCTV, Securtiy guard etc." />
        </div>
        <div className='mb-[1em]'>
            <AboutProductHome />
        </div>
        <div className='grid grid-cols-[4fr_6fr] grid-rows-2 p-[5em] pt-10 pb-10 gap-5'>
            <div className='row-span-2 p-5 pt-0 pb-3'><img src="https://cdni.iconscout.com/illustration/premium/thumb/man-search-map-route-illustration-download-in-svg-png-gif-file-formats--find-location-navigation-and-pack-maps-illustrations-6631864.png" alt="" />
            </div>
            <AboutCompanyHome title="Company Overview:" description="Welcome to ZoomSpot, your ultimate destination for hassle-free monthly car parking solutions. At ParkSpot, our mission is to revolutionize the parking experience by providing convenient and reliable monthly car parking services. We value efficiency, reliability, and customer satisfaction above all else." />
            <AboutCompanyHome title="Our Services:" description="ParkSpot offers a range of monthly car parking services designed to meet your needs. With our user-friendly platform, finding and booking a parking spot is quick and easy. Experience the convenience and benefits of secure parking tailored to your requirements." />
        </div>
    </div>
  );
}

export default Home;

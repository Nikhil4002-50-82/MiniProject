import React from 'react';
import AboutCompanyHome from './AboutCompanyHome';

const AboutCompany = () => {
  return (
    <div className='grid grid-cols-[4fr_6fr] grid-rows-2 p-[5em] pt-[5em] pb-10 gap-5'>
            <div className='row-span-2 p-5 pt-0 pb-3'><img src="https://cdni.iconscout.com/illustration/premium/thumb/man-search-map-route-illustration-download-in-svg-png-gif-file-formats--find-location-navigation-and-pack-maps-illustrations-6631864.png" alt="" />
            </div>
            <AboutCompanyHome title="Company Overview:" description="Welcome to ZoomSpot, your ultimate destination for hassle-free monthly car parking solutions. At ZoomSpot, our mission is to revolutionize the parking experience by providing convenient and reliable monthly car parking services. We value efficiency, reliability, and customer satisfaction above all else." />
            <AboutCompanyHome title="Our Services:" description="ZoomSpot offers a range of monthly car parking services designed to meet your needs. With our user-friendly platform, finding and booking a parking spot is quick and easy. Experience the convenience and benefits of secure parking tailored to your requirements." />
        </div>
  )
}

export default AboutCompany;

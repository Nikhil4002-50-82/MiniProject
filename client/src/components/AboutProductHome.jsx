import React from 'react'; 
import ProductComponentHome from './ProductComponentHome';

const AboutProductHome = () => {
  return (
    <div className='flex flex-col justify-center items-center pt-[4.5em]'>
        <h1 className='font-semibold text-[#0085AD] mb-2 '>Types of Products</h1>
        <p className='text-4xl font-medium mb-4'>Our Parking Services</p>
        <div className='grid grid-cols-3 gap-2 p-[5em] pt-[3em]'>
            <ProductComponentHome src="https://c4.wallpaperflare.com/wallpaper/763/507/696/nissan-nissan-skyline-car-skyline-wallpaper-preview.jpg" title="ParkSpot for Owners" description="Want to monetize your idle parking spots?" />
            <ProductComponentHome src="https://c1.wallpaperflare.com/preview/497/596/33/building-chennai-photos-india.jpg" title="ParkSpot for Societies" description="Secure your society and enable seamless entry/exit for residents." />
            <ProductComponentHome src="https://c0.wallpaperflare.com/preview/848/772/956/human-person-urban-gurgaon.jpg" title="ParkSpot for Corporates" description="Give your employees the gift of easy parking." />
        </div>
    </div>
  )
}

export default AboutProductHome;

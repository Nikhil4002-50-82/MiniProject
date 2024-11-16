import React from 'react'; 

const AboutProductHome = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='font-semibold text-[#0085AD] mb-2 '>Types of Products</h1>
        <p className='text-4xl font-medium mb-4'>Our Parking Services</p>
        <div className='grid grid-cols-3 gap-10 p-[5em] pt-[3em]'>
            <div><img className='h-[100%] rounded-lg' src="https://c4.wallpaperflare.com/wallpaper/763/507/696/nissan-nissan-skyline-car-skyline-wallpaper-preview.jpg" alt="" /></div>
            <div><img className='h-[100%] rounded-lg' src="https://c1.wallpaperflare.com/preview/497/596/33/building-chennai-photos-india.jpg" alt="" /></div>
            <div><img className='h-[100%] rounded-lg' src="https://c0.wallpaperflare.com/preview/848/772/956/human-person-urban-gurgaon.jpg" alt="" /></div>
        </div>
    </div>
  )
}

export default AboutProductHome;

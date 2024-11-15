import React from 'react';

const MainData = () => {
  return (
    <div className='w-[100] h-full pt-[4.5em]'>
        <div className='grid grid-cols-[4fr_6fr] grid-rows-2 p-[5em] pt-10 pb-10 gap-5'>
            <div className='row-span-2 p-5 pt-3 pb-3'>img</div>
            <div>
                <h1 className='text-3xl mb-4 font-semibold'>Company Overview:</h1>
                <p className='mb-8'>Welcome to ZoomSpot, your ultimate destination for hassle-free monthly car parking solutions. At ParkSpot, our mission is to revolutionize the parking experience by providing convenient and reliable monthly car parking services. We value efficiency, reliability, and customer satisfaction above all else.</p>
                <hr />
            </div>
            <div>
                <h1 className='text-3xl mb-4 font-semibold'>Our Services:</h1>
                <p>ParkSpot offers a range of monthly car parking services designed to meet your needs. With our user-friendly platform, finding and booking a parking spot is quick and easy. Experience the convenience and benefits of secure parking tailored to your requirements.</p>
            </div>
        </div>
    </div>
  )
}

export default MainData;

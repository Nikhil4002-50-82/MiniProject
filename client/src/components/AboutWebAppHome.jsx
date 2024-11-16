import React from 'react';

const AboutWebAppHome = ({title,description}) => {
  return (
        <div className='flex flex-col justify-center items-center p-10 pt-5 pb-5 border-dashed border-2 border-[#0085AD] rounded-xl hover:bg-[#FFE08A] hover:text-[#0085AD] hover:scale-110 hover:border-none'>
            <h1 className='text-xl font-semibold mb-2'>{title}</h1>
            <p className='text-justify'>{description}</p>
        </div>
  );
}

export default AboutWebAppHome;

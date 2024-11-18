import React from 'react';

const ProductComponentAbout = ({title,description}) => {
  return (
    <div className='w-[70%] xl:h-[45%] bg-white p-[2em] relative top-[-5em] left-[3.3em] xl:left-[3.5em] z-8 shadow-custom rounded-xl flex flex-col justify-center '>
        <h1 className='font-semibold text-xl '>{title}</h1>
        <p className='text-sm text-gray-600 '>{description}</p>
    </div>   
  )
}

export default ProductComponentAbout;

import React from 'react';
import ProductComponentAbout from './ProductComponentAbout';

const ProductComponentHome = ({src,title,description}) => {
  return (
    <div className='h-[18em]'>
        <img className='h-[100%] w-[100%] rounded-lg' src={src} alt="" />
        <ProductComponentAbout title={title} description={description} />
    </div>
  )
}

export default ProductComponentHome;

import React from 'react';

const AboutCompanyHome = ({title,description}) => {
  return (
    <div>
        <h1 className='text-3xl mb-4 font-semibold'>{title}</h1>
        <p className='mb-8'>{description}</p>
        <hr />
    </div>
  )
}

export default AboutCompanyHome;

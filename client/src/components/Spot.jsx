import React from 'react';

const Spot = ({title,Component}) => {
  return (
    <div className='p-[3em] pt-[6em] flex flex-col items-center justify-center bg-[url("https://img.freepik.com/premium-vector/modern-blue-abstract-background-vector-illustration-design-presentation-banner-cover-web-flyer-card-poster-wallpaper-texture-slide-magazine-powerpoint_181182-19660.jpg?w=1060")] bg-cover bg-center'>
      <h1 className='text-5xl m-3 mb-10 font-semibold'>{title}</h1>
      <Component />
    </div>
  )
}

export default Spot;

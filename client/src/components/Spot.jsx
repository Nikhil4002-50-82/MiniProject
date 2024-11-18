import React from 'react';

const Spot = ({title}) => {
  return (
    <div className='p-[3em] pt-[6em] flex flex-col items-center justify-center bg-[url("https://img.freepik.com/premium-vector/modern-blue-abstract-background-vector-illustration-design-presentation-banner-cover-web-flyer-card-poster-wallpaper-texture-slide-magazine-powerpoint_181182-19660.jpg?w=1060")] bg-cover bg-center'>
      <h1 className='text-5xl m-3 mb-10 font-semibold'>{title}</h1>
        <div className='w-[50%] p-[2em] shadow-custom rounded-md bg-white'>
            <h1 className='text-3xl font-semibold text-center'>Contact Details</h1>
            <form action="">
              <label htmlFor="name" >Full Name</label>
              <input type="text" name='name' placeholder='Full Name' className='w-[100%] h-10 p-2 mt-2 mb-1 border-[0.1em] border-gray-300 text-gray-400  focus:outline-none focus:text-black rounded-md'  required />
              <label htmlFor="email">Email</label>
              <input type="text" name='email' placeholder='Email' className='w-[100%] h-10 p-2 mt-2 mb-1 border-[0.1em] border-gray-300 text-gray-400  focus:outline-none focus:text-black rounded-md'  required />
              <label htmlFor="contact">Contact No.</label>
              <input type="text" name='contact' placeholder='Contact No.' className='w-[100%] h-10 p-2 mt-2 mb-1 border-[0.1em] border-gray-300 text-gray-400  focus:outline-none focus:text-black rounded-md' required  />
              <label htmlFor="address">Address</label>
              <input type="text" name='address' placeholder='Address' className='w-[100%] h-10 p-2 mt-2 mb-1 border-[0.1em] border-gray-300 text-gray-400  focus:outline-none focus:text-black rounded-md'  required />  
              <div className='flex justify-between mt-5'>
                <button className='h-[2.5em] w-[6em] border-[0.1em] border-red-400 text-red-400 hover:bg-red-400 hover:text-white hover:font-semibold rounded-md' onClick={(event)=>{
                    event.preventDefault();
                }}>Prev</button>
                <button className='h-[2.5em] w-[7em] border-[0.1em] border-green-400 text-green-400 hover:bg-green-400 hover:text-white hover:font-semibold rounded-md'>Submit</button>
              </div>
            </form>
        </div>
    </div>
  )
}

export default Spot;

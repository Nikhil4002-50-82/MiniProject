import React,{ useContext } from 'react';

import subBtnContext from './context/subBtnContext';

const Register = () => {
  const {subBtn,setSubBtn}=useContext(subBtnContext);
  return (
    <div className='w-[50%] p-[2em] shadow-custom rounded-md bg-white'>
            <h1 className='text-3xl mb-2 font-semibold text-center'>Contact Details</h1>
            <form action="">
              <label htmlFor="registerName" >Full Name</label>
              <input type="text" name='registerName' placeholder='Full Name' className='w-[100%] h-10 p-2 mt-2 mb-1 border-[0.1em] border-gray-300 text-gray-400  focus:outline-none focus:text-black rounded-md'  required />
              <label htmlFor="registerEmail">Email</label>
              <input type="text" name='registerEmail' placeholder='Email' className='w-[100%] h-10 p-2 mt-2 mb-1 border-[0.1em] border-gray-300 text-gray-400  focus:outline-none focus:text-black rounded-md'  required />
              <label htmlFor="registerContact">Contact No.</label>
              <input type="text" name='registerContact' placeholder='Contact No.' className='w-[100%] h-10 p-2 mt-2 mb-1 border-[0.1em] border-gray-300 text-gray-400  focus:outline-none focus:text-black rounded-md' required  />
              <label htmlFor="registerAddress">Address</label>
              <input type="text" name='registerAddress' placeholder='Address' className='w-[100%] h-10 p-2 mt-2 mb-1 border-[0.1em] border-gray-300 text-gray-400  focus:outline-none focus:text-black rounded-md'  required />  
              <div className='flex justify-between mt-5'>
                <button className='h-[2.5em] w-[6em] border-[0.1em] border-red-400 text-red-400 hover:bg-red-400 hover:text-white hover:font-semibold rounded-md' onClick={(event)=>{
                    event.preventDefault();
                }}>Prev</button>
                <button className='h-[2.5em] w-[7em] border-[0.1em] border-green-400 text-green-400 hover:bg-green-400 hover:text-white hover:font-semibold rounded-md' onClick={(event)=>{
                    event.preventDefault();
                    setSubBtn(true);
                }}>Submit</button>
              </div>
            </form>
        </div>
  )
}

export default Register;

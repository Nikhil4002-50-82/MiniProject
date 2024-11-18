import React,{useContext} from 'react';
import { useNavigate } from 'react-router-dom';

import subBtnContext from './context/subBtnContext';

const SubmitResponse = () => {
    const {subBtn,setSubBtn}=useContext(subBtnContext);
    const navigate=useNavigate();
  return (
    <div className='flex flex-col justify-center items-center p-[5em] pb-0'>
        <div className='h-[20em]'>
            <img className='h-[100%]' src="https://cdni.iconscout.com/illustration/premium/thumb/man-search-map-route-illustration-download-in-svg-png-gif-file-formats--find-location-navigation-and-pack-maps-illustrations-6631864.png" alt="" />
        </div>
        <p className='text-7xl mb-4'>Thank You, enjoy!</p>
        <p className='text-gray-500 mb-6'>We are happy to receive your request. Our team is diligently working on your query and will get back within 12 hours.</p>
        <button className='w-[10em] font-bold bg-[#FFE08A] p-4 pt-2 pb-2 mb-10 rounded-lg' onClick={(event)=>{
            event.preventDefault();
            setSubBtn(false);
            navigate("/");
        }}>Back Home</button>
        <p className='text-gray-500 mb-10'>If you have any issues. Call <span className='text-blue-600'>+91 91480 18043</span></p>
    </div>
  )
}

export default SubmitResponse;

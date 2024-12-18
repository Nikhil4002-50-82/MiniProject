import React,{useContext} from 'react';
import { useNavigate } from 'react-router-dom';

import reqBtnContext from './context/reqBtnContext';
import subBtnContext from './context/subBtnContext';

import {topp,location} from "./context/reqContext";
const Request2 = () => {

  const {top,setTop}=useContext(topp);
  const {loc,setLoc}=useContext(location);

    const navigate=useNavigate();
    const {reqBtn,setReqBtn}=useContext(reqBtnContext);
    const {subBtn,setSubBtn}=useContext(subBtnContext);
  return (
    <div className='w-[50%] p-[2em] shadow-custom rounded-md bg-white'>
            <h1 className='text-3xl mb-2 font-semibold text-center'>Additional Details</h1>
            <form action="">
              <label htmlFor="parkingType">Types of parking</label>
              <select name="parkingType" className="w-[100%] h-10 p-2 mt-2 mb-1 border-[0.1em] border-gray-300 text-gray-400 focus:outline-none focus:text-black rounded-md"  value={top}  onChange={(event)=>{
                setTop(event.target.value);
              }}  required>
                    <option value="">Select parking type</option>
                    <option value="Open">Open</option>
                    <option value="Covered">Covered</option>
                </select>
                <label htmlFor="parkingDuration">Duration</label>
              <select name="parkingDuration" className="w-[100%] h-10 p-2 mt-2 mb-1 border-[0.1em] border-gray-300 text-gray-400 focus:outline-none focus:text-black rounded-md" required>
                    <option value="">Select parking duration</option>
                    <option value="open">less than 1 month</option>
                    <option value="covered">2 - 3 months</option>
                    <option value="covered">3 - 5 months</option>
                    <option value="open">More than 6 months</option>
                </select>
              <label htmlFor="vehicleName">Vehicle model</label>
              <input type="text" name='vehicleName' placeholder='Vehicle Model' className='w-[100%] h-10 p-2 mt-2 mb-1 border-[0.1em] border-gray-300 text-gray-400  focus:outline-none focus:text-black rounded-md' required  /> 
              <label htmlFor="locName">Location</label>
              <input type="text" name='locName' placeholder='enter location' className='w-[100%] h-10 p-2 mt-2 mb-1 border-[0.1em] border-gray-300 text-gray-400  focus:outline-none focus:text-black rounded-md' required value={loc} onChange={(event)=>{
                setLoc(event.target.value);
              }}  /> 
              <div className='flex justify-between mt-5'>
                <button className='h-[2.5em] w-[6em] border-[0.1em] border-red-400 text-red-400 hover:bg-red-400 hover:text-white hover:font-semibold rounded-md' onClick={(event)=>{
                    event.preventDefault();
                    setReqBtn(false);
                }}>Prev</button>
                <button className='h-[2.5em] w-[7em] border-[0.1em] border-green-400 text-green-400 hover:bg-green-400 hover:text-white hover:font-semibold rounded-md' onClick={(event)=>{
                    event.preventDefault();
                    setSubBtn(true);
                    navigate("/search");
                }}>Finish</button>
              </div>
            </form>
        </div>
  );
}

export default Request2;

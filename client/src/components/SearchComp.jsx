import React from 'react';
import { FaRupeeSign, FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const SearchComp = ({ name, price, top, mainLoc, subLoc, phNum }) => {
  return (
    <div className="w-[80%] mb-6 text-green-950 bg-white shadow-custom rounded-2xl mb-4 hover:border-[#FFE08A] hover:border-[0.2em]">
      <div className="flex justify-between">
        {/* Left Section */}
        <div className="grid grid-cols-2 grid-rows-[2fr_3fr] w-[65%] p-8 pt-4 pb-4">
          <div className="col-span-2 flex justify-between items-center mb-3">
            <h1 className="text-3xl font-semibold">{name}</h1>
            <p className="text-lg font-semibold flex items-center">
              <FaPhoneAlt className="mr-2 text-[#0F4FB4] text-2xl" />
              {phNum}
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-md flex items-center">
              <IoLocationSharp className="mr-2 text-xl text-gray-600" />
              Main Address
            </h2>
            <div className="h-10 overflow-auto">
              <p className="text-sm">{mainLoc}</p>
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-md flex items-center">
              <IoLocationSharp className="mr-2 text-xl text-gray-600" />
              Sub Address
            </h2>
            <div className="h-10 overflow-auto">
              <p className="text-sm">{subLoc}</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="p-8 pt-4 pb-4">
          <h1 className="text-4xl font-semibold flex items-center">
            <FaRupeeSign />
            {price}
          </h1>
          <p className="mt-2 text-md font-semibold text-gray-500">{top}</p>
        </div>
      </div>

      {/* Divider */}
    </div>
  );
};

export default SearchComp;

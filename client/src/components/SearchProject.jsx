import React, { useContext, useState, useEffect } from 'react';
import supabase from '../../utils/supabase';
import SearchComp from './SearchComp';

import { topp, location } from './context/reqContext';

const SearchProject = () => {
  const [data, setData] = useState([]); // State to hold the fetched data
  const { loc } = useContext(location);
  const { top } = useContext(topp);

  const getData = async () => {
    try {
      const { data: irfan, error } = await supabase.from('irfan').select('*').eq('mainadress',loc).eq('typeofpak',top);

      if (error) throw error; // If there's an error, throw it to catch it below

      setData(irfan); // Update state with fetched data
    } catch (err) {
      console.error('Error fetching data:', err.message);
      setError(err.message); // Update error state
    }
  };

  useEffect(() => {

    getData();
  });
  const card = (list) => (
    <SearchComp
      key={list.id} // Ensure a unique key for each item
      name={list.name}
      top={list.typeofpak}
      phNum={list.phnum}
      mainLoc={list.mainadress}
      subLoc={list.subaddress}
      price={list.price}
    />
  );

  return (
    <div className="h-[auto] w-[100%] pt-[6em] flex-col items-center justify-center">
      {Array.isArray(data) && data.length > 0 ? (
        data.map(card) // Map over the fetched data
      ) : (
        <p className="text-center text-gray-500">No results found</p> // Fallback if no data is available
      )}
    </div>
  );
};

export default SearchProject;

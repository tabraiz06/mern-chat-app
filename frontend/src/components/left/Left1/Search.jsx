import React from 'react'
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="px-[20px] py-[10px]">
      <form action="">
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <IoSearch className='cursor-pointer' />
        </label>
      </form>
    </div>
  );
}

export default Search

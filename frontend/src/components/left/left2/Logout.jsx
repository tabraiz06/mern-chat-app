import React from 'react'
import { RiLogoutBoxRFill } from "react-icons/ri";
const Logout = () => {
  return (
    <div className="p-5 hover:bg-black relative group inline-block">
      <RiLogoutBoxRFill className="h-[40px] w-[40px] cursor-pointer text-white  group-hover:text-red-600 transition-colors" />
      <span class="absolute bottom-14 left-1/2  transform -translate-x-1/2 mt-1 px-2 py-1 text-xs text-red-600  rounded opacity-0 group-hover:opacity-100 transition-opacity">
        Logout
      </span>
    </div>
  );
}

export default Logout

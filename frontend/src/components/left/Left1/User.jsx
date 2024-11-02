import React from 'react'

const User = () => {
  return (
    <div className="user cursor-pointer flex space-x-6 px-5 text-center py-4 hover:bg-slate-500 duration-300  cursor-pointer">
      <div className="avatar online ">
        <div className="w-16 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div className="flex items-center">
        <h1 className="text-white font-bold ">test user  vvvvvvvvvvvvvvvvnnnnnnnnnnn</h1>
      </div>
    </div>
  );
}

export default User

import React from 'react'
import User from '../left/Left1/User'
import Message from './Message';
import { IoMdAdd } from "react-icons/io";
import { MdSend } from "react-icons/md";
//  import InfiniteScroll from "react-infinite-scroll-component";
const Chatuser = () => {
  return (
    <div>
      <div className="relative bg-slate-300">
        <User />
        <span className="absolute bottom-3 left-[8rem] font-bold text-green-600">
          Online
        </span>
      </div>

      <div className="messages p-4 overflow-y-scroll max-h-[80vh] scrollbar-hidden scroll-none">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <label className="form-control w-[100%]  bg-slate-300 flex items-center flex-row space-x-10 p-4">
        <IoMdAdd className="font-extrabold text-5xl border rounded-md cursor-pointer" />
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-[90%] "
        />
        <MdSend className="font-extrabold text-5xl cursor-pointer" />
      </label>
    </div>
  );
}

export default Chatuser

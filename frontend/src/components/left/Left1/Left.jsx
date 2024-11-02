import React from "react";
import Search from "./Search";
import Users from "./Users";

const Left = () => {
  return (
    <div className="w-[30%] bg-blue-950 ">
      <h1 className="text-3xl font-bold text-center text-white p-4">Chats</h1>
      <Search />
      <hr />
      <Users />
    </div>
  );
};

export default Left;

import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Left from "./components/left/Left1/Left";
import Right from "./components/right/Right";
import Left2 from "./components/left/left2/Left2";
import Register from "./components/credentials/Register";
import Login from "./components/credentials/Login";

function App() {
  return (
    <div className="h-screen flex w-full overflow-hidden scroll-none">
      {/* <Left2 />
      <Left />
      <Right /> */}
      <BrowserRouter>
      {/* <Register/> */}
      <Login/>
      </BrowserRouter>
    </div>
  );
}

export default App;

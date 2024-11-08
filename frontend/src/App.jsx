import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Left from "./components/left/Left1/Left";
import Right from "./components/right/Right";
import Left2 from "./components/left/left2/Left2";
import Register from "./components/credentials/Register";
import Login from "./components/credentials/Login";
import { contextApi } from "./context/AuthPrivider";
import HomePage from "./pages/HomePage";

function App() {
  const {authUser}= contextApi()
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            authUser ? (
              <HomePage />
                
              
            ) : (
              <Login />
            )
          }
        />
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
      </Routes>
      {/*  */}
    </BrowserRouter>
  );
}

export default App;

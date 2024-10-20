// import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./screens/home/Home";

export default function App() {
  return (
    <BrowserRouter>
      <div className="w-full fixed top-0 z-[1000] shadow-md bg-lightPrimary bg-opacity-90 backdrop-blur-[6px]">
        <Navbar />
      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

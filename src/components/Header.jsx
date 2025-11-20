import React from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const deskOptions = (
    <div className="flex justify-around items-center w-full text-teal-950">
      <Link to="/" className="px-8 border-r-2 border-gray-500 pb-1 inline-block md:hover:border-r-0 md:hover:border-b-8 md:hover:border-blue-950 transition-all duration-200">Home</Link>
      <Link to="/newcars" className="px-4 border-r-2 border-gray-500 pb-1 inline-block md:hover:border-r-0 md:hover:border-b-8 md:hover:border-blue-950 transition-all duration-200">New Cars</Link>
      <Link to="/usedcars" className="px-4 border-r-2 border-gray-500 inline-block pb-1 md:hover:border-r-0 md:hover:border-b-8 md:hover:border-blue-950 transition-all duration-200">Used Cars</Link>
      <a href="/login" className="px-4 border-r-2 border-gray-500 inline-block pb-1 md:hover:border-r-0 md:hover:border-b-8 md:hover:border-blue-950 transition-all duration-200">Login</a>
      <a href="/signup" className="px-4 md:hover:border-b-8 pb-1 inline-block md:hover:border-blue-950 transition-all duration-200">Sign Up</a>
    </div>
  )
  
  
  return (
  <div className="border-gray-300 shadow-lg shadow-gray-400/65 md:h-24">
   <div className="flex justify-between">
     <div className=" flex items-center justify-start ">
        <img src="/images/carlogo.jpeg" alt="Carlogo" className="w-5% h-24" />
        <h1 className="text-[1rem] md:text-xl text-blue-950 font-bold">YourNextCar</h1>
      </div>
       <div className="hidden md:flex w-[50%]">
          {deskOptions}
        </div>
        <button type="button" className="text-3xl text-blue-950 md:hidden p-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <AiOutlineMenuFold />
        </button>
   </div>
   <div className={`flex flex-col items-center gap-1 text-sm overflow-hidden transition-all duration-300 ${isMenuOpen ? "h-28 opacity-100 bg-linear-to-r from-gray-50 to-indigo-50" : "h-0 opacity-0"} md:hidden`}>
    <Link to="/" className="text-indigo-800 transition-colors duration-200">Home</Link>
    <Link to="/newcars" className="text-indigo-800 transition-colors duration-200">New Cars</Link>
    <Link to="/usedcars" className="text-indigo-800 transition-colors duration-200">Used Cars</Link>
    <Link to="/mobileform" className="text-indigo-800 transition-colors duration-200">Login/Sign Up</Link>
   </div>
  </div> 
  );
}

export default Header;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { LogIn , AtSignIcon } from 'lucide-react'

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full shadow-md bg-blue-100">
      <nav className="flex items-center justify-between px-4 md:px-10 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-800 cursor-pointer">
          StockTrade
        </h1>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          <button
            onClick={() => navigate('/login')}
            className="flex items-center gap-4 px-5 py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition"
          >
          Login  <LogIn size={20}/> 
          </button>

          <button
            onClick={() => navigate('/signIn')}
            className="px-5 py-2 rounded-lg border border-blue-500 text-blue-500 font-medium hover:bg-blue-500 hover:text-white transition"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Items */}
      {open && (
        <div className="md:hidden flex flex-col items-start px-4 pb-4 gap-3 bg-white shadow-md">

          <button
            onClick={() => { setOpen(false); navigate('/login'); }}
            className="w-full text-left px-4 py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition"
          >
            Login
          </button>

          <button
            onClick={() => { setOpen(false); navigate('/signIn'); }}
            className="w-full text-left px-4 py-2 rounded-lg border border-blue-500 text-blue-500 font-medium hover:bg-blue-500 hover:text-white transition"
          >
            Sign Up 
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

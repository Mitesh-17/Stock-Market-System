import React, { useState } from "react";
import { Menu, Home, User, ShoppingCart } from "lucide-react";
import { Briefcase, RefreshCw, LogOut } from "lucide-react";
import HomePage from "./Home";
import ProfilePage from "./Profile";
import MarketPage from "./Market";
import PortfolioPage from "./Portfolio";
import TransactionPage from "./Transaction";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activePage, setActivePage] = useState("Home");

  return (
    <div className="flex">

      {/* Sidebar */}
      <>
        <button
          className="md:hidden p-3 fixed top-4 left-4 bg-emerald-900 text-white rounded-lg z-50"
          onClick={() => setOpen(!open)}
        >
          <Menu size={22} />
        </button>

        <div
          className={`bg-cyan-950 text-white fixed top-0 left-0 h-screen
            flex flex-col items-center p-6 transition-all duration-300
            md:w-[16vw] w-[65vw] z-40 
        `}
        >
          <img
            src="/profile.jpg"
            alt="User"
            className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover"
          />

          <h1 className="mt-4 text-xl font-semibold">UserName</h1>

          <div className="mt-10 w-full flex flex-col gap-4 text-lg font-medium">
            <div onClick={() => setActivePage("Home")}
                className="flex items-center gap-4 hover:bg-emerald-800 p-2 rounded-md cursor-pointer">
                <Home size={20} /> Home
            </div>

            <div onClick={() => setActivePage("Profile")}
                className="flex items-center gap-4 hover:bg-emerald-800 p-2 rounded-md cursor-pointer">
              <User size={20} /> Profile
            </div>

            <div onClick={() => setActivePage("Market")} 
            className="flex items-center gap-4 hover:bg-emerald-800 p-2 rounded-md cursor-pointer">
              <ShoppingCart size={20} /> Market
            </div>

            <div onClick={() => setActivePage("Portfolio")} 
            className="flex items-center gap-4 hover:bg-emerald-800 p-2 rounded-md cursor-pointer">
              <Briefcase size={20} /> Portfolio
            </div>

            <div onClick={() => setActivePage("Transaction")} 
            className="flex items-center gap-4 hover:bg-emerald-800 p-2 rounded-md cursor-pointer">
              <RefreshCw size={20} /> Transactions
            </div>

            <div onClick={() => alert("Are you want to Logout?")} 
            className="flex items-center gap-4 hover:bg-emerald-800 p-2 rounded-md cursor-pointer">
              <LogOut size={20} /> Logout
            </div>
          </div>
        </div>
      </>

      {/* MAIN CONTENT (RIGHT SIDE) */}
      <div className="ml-[16vw] w-full h-screen p-6">
        {activePage === "Home" && <HomePage />}
        {activePage === "Profile" && <ProfilePage/>}
        {activePage === "Market" && <MarketPage/>}
        {activePage === "Portfolio" && <PortfolioPage/>}
        {activePage === "Transaction" && <TransactionPage/>}
      </div>
    </div>
  );
};

export default Navbar;

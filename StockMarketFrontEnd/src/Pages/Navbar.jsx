import React, { useState } from "react";
import { Menu, Home, User, ShoppingCart, Briefcase, RefreshCw, LogOut } from "lucide-react";
import HomePage from "./Home";
import ProfilePage from "./Profile";
import MarketPage from "./Market";
import PortfolioPage from "./Portfolio";
import TransactionPage from "./Transaction";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [activePage, setActivePage] = useState("Home");

  return (
    <div className="flex w-full">

      {/* Mobile Toggle Button */}
      <button
        className="md:hidden p-3 fixed top-4 left-4 bg-emerald-900 text-white rounded-lg z-50"
        onClick={() => setOpen(!open)}
      >
        <Menu size={22} />
      </button>

      {/* SIDEBAR */}
      <div
        className={`bg-cyan-950 text-white fixed top-0 left-0 h-screen 
        flex flex-col items-center p-6 transition-all duration-300 z-40
        md:w-[16vw] w-[65vw]
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* User Profile */}
        <img
          src="/profile.jpg"
          alt="User"
          className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover"
        />

        <h1 className="mt-4 text-xl font-semibold">UserName</h1>

        {/* Menu */}
        <div className="mt-10 w-full flex flex-col gap-4 text-lg font-medium">
          <div
            onClick={() => setActivePage("Home")}
            className="flex items-center gap-4 hover:bg-emerald-800 p-2 rounded-md cursor-pointer"
          >
            <Home size={20} /> Home
          </div>

          <div
            onClick={() => setActivePage("Profile")}
            className="flex items-center gap-4 hover:bg-emerald-800 p-2 rounded-md cursor-pointer"
          >
            <User size={20} /> Profile
          </div>

          <div
            onClick={() => setActivePage("Market")}
            className="flex items-center gap-4 hover:bg-emerald-800 p-2 rounded-md cursor-pointer"
          >
            <ShoppingCart size={20} /> Market
          </div>

          <div
            onClick={() => setActivePage("Portfolio")}
            className="flex items-center gap-4 hover:bg-emerald-800 p-2 rounded-md cursor-pointer"
          >
            <Briefcase size={20} /> Portfolio
          </div>

          <div
            onClick={() => setActivePage("Transaction")}
            className="flex items-center gap-4 hover:bg-emerald-800 p-2 rounded-md cursor-pointer"
          >
            <RefreshCw size={20} /> Transactions
          </div>

          <div onClick={() => {
                if (window.confirm("Are you sure you want to logout?")) {
                  navigate("/login");
                }
              }}className="flex items-center gap-4 hover:bg-emerald-800 p-2 rounded-md cursor-pointer">
              <LogOut size={20} /> Logout
            </div>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 ml-0 md:ml-[16vw] p-6 min-h-screen bg-linear-to-br">
        {activePage === "Home" && <HomePage />}
        {activePage === "Profile" && <ProfilePage />}
        {activePage === "Market" && <MarketPage />}
        {activePage === "Portfolio" && <PortfolioPage />}
        {activePage === "Transaction" && <TransactionPage />}
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { RefreshCw, DollarSign, PieChart , Coins } from "lucide-react";

const Portfolio = () => {
  return (
    <div className=" p-4 md:p-8 flex justify-center items-start">
      <div className="w-full max-w-6xl">

        {/* Header */}
        <div className="flex justify-between items-center bg-[#1c3d5a] text-white p-5 rounded-xl shadow-lg mb-6">
          <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
            <PieChart className="w-7 h-7" /> Portfolio Overview
          </h1>
          <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 transition px-4 py-2 rounded-lg text-white font-medium shadow-md hover:cursor-pointer">
            <RefreshCw className="w-5 h-5" /> Refresh
          </button>
        </div>

        {/* Balance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Total Balance */}
          <div className="bg-white p-6 rounded-xl shadow-md border flex items-center gap-4">
            <div className="bg-green-100 p-4 rounded-full">
              <DollarSign className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <p className="text-gray-600 text-sm font-medium">Total Balance</p>
              <p className="text-2xl font-bold">$100000.00</p>
            </div>
          </div>

          {/* Available Balance */}
          <div className="bg-white p-6 rounded-xl shadow-md border flex items-center gap-4">
            <div className="bg-yellow-100 p-4 rounded-full">
              <Coins className="w-8 h-8 text-yellow-600" />
            </div>
            <div>
              <p className="text-gray-600 text-sm font-medium">Available Balance</p>
              <p className="text-2xl font-bold">$0.00</p>
            </div>
          </div>

          {/* Portfolio Performance */}
          <div className="bg-white p-6 rounded-xl shadow-md border flex items-center gap-4">
            <div className="bg-blue-100 p-4 rounded-full">
              <PieChart className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <p className="text-gray-600 text-sm font-medium">Portfolio Performance</p>
              <p className="text-2xl font-bold text-green-600">+12.5%</p>
            </div>
          </div>
        </div>

        {/* Portfolio Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#1c3d5a] text-white">
              <tr>
                <th className="p-4">Sr. No.</th>
                <th className="p-4">Stock Symbol</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Buy Price</th>
                <th className="p-4">Current Price</th>
                <th className="p-4">Total Investment</th>
                <th className="p-4">Current Value</th>
                <th className="p-4">Profit/Loss</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              <tr className="border-b hover:bg-gray-50 transition">
                <td className="p-4">1</td>
                <td className="p-4">TSLA</td>
                <td className="p-4">1</td>
                <td className="p-4">239.43</td>
                <td className="p-4">239.43</td>
                <td className="p-4">239.43</td>
                <td className="p-4">239.43</td>
                <td className="p-4 text-green-600 font-semibold">0.00</td>
                <td className="p-4 text-blue-600 font-semibold cursor-pointer hover:underline">Sell</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

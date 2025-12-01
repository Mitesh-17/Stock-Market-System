import React from 'react';
import { Search, Filter } from 'lucide-react';

const Transaction = () => {
  return (
    <div className="p-4 flex justify-center">
      <div className="w-full max-w-5xl bg-white shadow-xl rounded-2xl p-6 border border-gray-200">

        {/* Header */}
        <h1 className="text-2xl md:text-3xl p-3 font-bold bg-[#1c3d5a] rounded-2xl text-white mb-6 text-center">Transaction Records</h1>

        {/* Search & Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Search */}
          <div className="relative">
            <Search className="w-5 h-5 absolute top-3 left-3 text-gray-500" />
            <input
              type="text"
              placeholder="Search by Transaction ID / Stock Symbol"
              className="border rounded-xl p-3 pl-10 w-full focus:outline-none shadow-sm"
            />
          </div>

          {/* Transaction Type */}
          <select className="border rounded-xl p-3 w-full shadow-sm focus:outline-none">
            <option>All Types</option>
            <option>Buy</option>
            <option>Sell</option>
          </select>

          {/* Sort */}
          <select className="border rounded-xl p-3 w-full shadow-sm focus:outline-none">
            <option>Sort By</option>
            <option>Latest</option>
            <option>Oldest</option>
            <option>Highest Quantity</option>
            <option>Lowest Quantity</option>
          </select>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-md">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-[#1c3d5a] text-white uppercase text-xs">
                <th className="p-4">Transaction ID</th>
                <th className="p-4">Stock Symbol</th>
                <th className="p-4">Type</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Per Unit Price</th>
                <th className="p-4">Total Price</th>
                <th className="p-4">Transaction Time</th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              {/* Row Example */}
              <tr className="border-b hover:bg-gray-50 transition">
                <td className="p-4">TXN12345</td>
                <td className="p-4">TCS</td>
                <td className="p-4 font-semibold text-green-600">Buy</td>
                <td className="p-4">10</td>
                <td className="p-4">₹3500</td>
                <td className="p-4 font-semibold">₹35,000</td>
                <td className="p-4">2025-12-01 • 10:45 AM</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default Transaction;
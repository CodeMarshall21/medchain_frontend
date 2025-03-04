import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FiHome, FiClipboard, FiCheckCircle, FiBell } from "react-icons/fi";
import RegisterBatch from "./RegisterBatch";
import ManageBatch from "./ManageBatch";
import VerifyBatchTracking from "./VerifyBatchTracking";
export default function Dashboard() {
  const [batches, setBatches] = useState([
    { id: "BATCH001", name: "Covid Vaccine", date: "2025-03-01" },
    { id: "BATCH002", name: "Flu Shot", date: "2025-03-02" },
    { id: "BATCH003", name: "Pain Relief", date: "2025-03-03" },
  ]);

  // Function to add a new batch
  const addBatch = (batch) => {
    setBatches([...batches, batch]);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-69 bg-blue-600 text-white flex flex-col p-6">
        <h1 className="text-1xl font-bold mb-6">MedChain</h1>
        <nav className="space-y-4">
          <Link to="/dashboard" className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded-lg">
            <FiHome className="text-gray-300" />
            <span className="text-white">Home</span>
          </Link>
          <Link to="/dashboard/register-batch" className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded-lg">
            <FiClipboard className="text-gray-300" />
            <span className="text-white">Register Batch</span>
          </Link>
          <Link to="/dashboard/manage-batch" className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded-lg">
            <FiCheckCircle className="text-gray-300" />
            <span className="text-white">Manage Batch</span>
          </Link>
          <Link to="/dashboard/verify-batch" className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded-lg">
            <FiCheckCircle className="text-gray-300" />
            <span className="text-white">Verify Batch</span>
          </Link>
          <Link to="/dashboard/notifications" className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded-lg">
            <FiBell className="text-gray-300" />
            <span className="text-white">Notifications</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <nav className="bg-white shadow-lg py-4 px-6 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-blue-600">Dashboard</h2>
          <Link to="/">
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
              Logout
            </button>
          </Link>
        </nav>

        {/* Page Content */}
        <div className="p-6">
          <Outlet context={{ batches, addBatch }} />
        </div>
      </div>
    </div>
  );
}

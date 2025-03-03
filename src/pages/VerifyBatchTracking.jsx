import React, { useState } from "react";

export default function VerifyBatchTracking() {
  // Sample batch data with tracking information
  const [batches] = useState([
    {
      id: "BATCH001",
      name: "Covid Vaccine",
      tracking: [
        { role: "Distributor", timestamp: "2025-03-01 10:00 AM" },
        { role: "Wholesaler", timestamp: "2025-03-02 03:30 PM" },
        { role: "Retailer", timestamp: "2025-03-03 06:45 PM" },
      ],
    },
    {
      id: "BATCH002",
      name: "Flu Shot",
      tracking: [
        { role: "Distributor", timestamp: "2025-03-04 09:15 AM" },
        { role: "Wholesaler", timestamp: "2025-03-05 12:45 PM" },
        { role: "Retailer", timestamp: "2025-03-06 05:00 PM" },
      ],
    },
  ]);

  const [selectedBatch, setSelectedBatch] = useState(null);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Verify Batch Tracking</h2>

      {/* Batch List */}
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6">
        {batches.map((batch) => (
          <div
            key={batch.id}
            className="bg-white p-6 shadow-lg rounded-lg cursor-pointer hover:bg-gray-100"
            onClick={() => setSelectedBatch(batch)}
          >
            <h3 className="text-lg font-bold text-gray-700">{batch.name}</h3>
            <p className="text-gray-500">Batch ID: {batch.id}</p>
          </div>
        ))}
      </div>

      {/* Batch Details Modal */}
      {selectedBatch && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold text-blue-600">{selectedBatch.name}</h3>
            <p className="text-gray-500">Batch ID: {selectedBatch.id}</p>
            <div className="mt-4">
              <h4 className="font-semibold text-gray-700">Signed By:</h4>
              <ul className="mt-2 space-y-2">
                {selectedBatch.tracking.map((entry, index) => (
                  <li key={index} className="bg-gray-100 p-2 rounded-md">
                    <span className="font-medium">{entry.role}</span> -{" "}
                    <span className="text-gray-500">{entry.timestamp}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              onClick={() => setSelectedBatch(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

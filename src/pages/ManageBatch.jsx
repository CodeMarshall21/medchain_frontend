import React, { useState } from "react";
// import QRCode from "react-qr-code";

export default function ManageBatch() {
  // Sample batch data
  const [batches, setBatches] = useState([
    { id: "BATCH001", name: "Covid Vaccine", date: "2025-03-01" },
    { id: "BATCH002", name: "Flu Shot", date: "2025-03-02" },
    { id: "BATCH003", name: "Pain Relief", date: "2025-03-03" },
  ]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Manage Batches</h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {batches.map((batch) => (
          <div key={batch.id} className="bg-white p-6 shadow-lg rounded-lg text-center">
            <h3 className="text-lg font-bold text-gray-700">{batch.name}</h3>
            <p className="text-gray-500">Batch ID: {batch.id}</p>
            <p className="text-gray-500">Date: {batch.date}</p>
           
          </div>
        ))}
      </div>
    </div>
  );
}

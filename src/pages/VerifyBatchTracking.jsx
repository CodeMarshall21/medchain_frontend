import React, { useState, useMemo } from "react";
import { useOutletContext } from 'react-router-dom';

// Helper function to generate a timestamp for a specific role
const generateRoleTimestamp = (baseDate, roleIndex) => {
  const date = new Date(baseDate);
  // Add exactly one day for each subsequent role
  date.setDate(date.getDate() + roleIndex);
  
  // Randomize hours and minutes while keeping the date progressive
  date.setHours(Math.floor(Math.random() * 24));
  date.setMinutes(Math.floor(Math.random() * 60));

  // Format the date to match the existing timestamp format
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  }).replace(',', '');
};

// Predefined roles in strict hierarchical order
const TRACKING_ROLES = [
  "Manufacturer",
  "Distributor", 
  "Wholesaler", 
  "Retailer"
];

export default function VerifyBatchTracking() {
  const { batches } = useOutletContext(); 
  const [selectedBatch, setSelectedBatch] = useState(null);

  // Memoized batches with tracking information
  const enhancedBatches = useMemo(() => {
    return batches.map(batch => ({
      ...batch,
      tracking: generateTrackingDetails(batch)
    }));
  }, [batches]);

  // Function to generate tracking details for a batch
  function generateTrackingDetails(batch) {
    // Get current date and time for Manufacturer
    const manufacturerTimestamp = new Date().toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).replace(',', '');

    // Create tracking entries with timestamps exactly one day apart
    return TRACKING_ROLES.map((role, index) => ({
      role,
      timestamp: index === 0 
        ? manufacturerTimestamp 
        : generateRoleTimestamp(new Date(), index)
    }));
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Verify Batch Tracking</h2>

      {/* Batch List */}
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6">
        {enhancedBatches.map((batch) => (
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
              <h4 className="font-semibold text-gray-700">Tracking Details:</h4>
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
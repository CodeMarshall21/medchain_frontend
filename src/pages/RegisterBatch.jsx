import React, { useState } from "react";

export default function RegisterBatch() {
  const [medicineName, setMedicineName] = useState("");
  const [manufacturingDate, setManufacturingDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [quantity, setQuantity] = useState("");
  const [signature, setSignature] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Batch Registered:", { medicineName, manufacturingDate, expiryDate, quantity, signature });
    alert("Batch Registered Successfully!");
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full">
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">Register New Batch</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Medicine Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
            value={medicineName}
            onChange={(e) => setMedicineName(e.target.value)}
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Manufacturing Date</label>
            <input
              type="date"
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
              value={manufacturingDate}
              onChange={(e) => setManufacturingDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
            <input
              type="date"
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Quantity</label>
          <input
            type="number"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Add Signature</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
            value={signature}
            onChange={(e) => setSignature(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Register Batch
        </button>
      </form>
    </div>
  );
}

import React, { useState } from "react";
import { FiCheckCircle, FiBell } from "react-icons/fi";

export default function Notifications() {
  // Sample notifications data
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Batch BATCH001 signed by Distributor", read: false },
    { id: 2, message: "Batch BATCH002 signed by Wholesaler", read: false },
    { id: 3, message: "Batch BATCH003 signed by Retailer", read: false },
    { id: 4, message: "Batch BATCH001 signed by Wholesaler", read: false },
    { id: 5, message: "Batch BATCH002 signed by Retailer", read: false },
  ]);

  // Function to mark notification as read
  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-blue-600 flex items-center gap-2">
        <FiBell className="text-blue-500" /> Notifications
      </h2>

      {/* Notifications List */}
      <div className="mt-4 space-y-4">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 rounded-lg shadow-md flex justify-between items-center ${
                notification.read ? "bg-gray-200" : "bg-white"
              }`}
            >
              <p className={`text-gray-700 ${notification.read ? "line-through" : ""}`}>
                {notification.message}
              </p>
              {!notification.read && (
                <button
                  className="bg-green-500 text-white px-3 py-1 rounded-lg flex items-center gap-2 hover:bg-green-600"
                  onClick={() => markAsRead(notification.id)}
                >
                  <FiCheckCircle /> Mark as Read
                </button>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No new notifications</p>
        )}
      </div>
    </div>
  );
}

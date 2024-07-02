import React from "react";

const DeliveryInfo = () => {
  const deliveryInfo = {
    pickupLocation: "Warehouse 42, Industrial Area, Springfield",
    deliveryTime: "3-5 Business Days",
    deliveryCost: "$5.99",
  };

  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-bold mb-2">Pickup Location</h3>
          <p className="text-gray-700">{deliveryInfo.pickupLocation}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-bold mb-2">Delivery Time</h3>
          <p className="text-gray-700">{deliveryInfo.deliveryTime}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-bold mb-2">Delivery Cost</h3>
          <p className="text-gray-700">{deliveryInfo.deliveryCost}</p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfo;

import React from "react";

const ProductStats = () => {
  const productStats = {
    reviewPercentage: 85, // Sample data
    dealerTrust: 90, // Sample data
    storeDetails: {
      name: "Awesome Store",
      location: "123 Main St, Springfield",
      contact: "contact@awesomestore.com",
    },
  };

  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <h3 className="text-lg font-bold mb-2">Review Percentage</h3>
          <div className="text-2xl text-blue-500">
            {productStats.reviewPercentage}%
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <h3 className="text-lg font-bold mb-2">Dealer Trust</h3>
          <div className="text-2xl text-green-500">
            {productStats.dealerTrust}%
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-bold mb-2">Store Details</h3>
          <p className="text-gray-700">
            <strong>Name:</strong> {productStats.storeDetails.name}
          </p>
          <p className="text-gray-700">
            <strong>Location:</strong> {productStats.storeDetails.location}
          </p>
          <p className="text-gray-700">
            <strong>Contact:</strong> {productStats.storeDetails.contact}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductStats;

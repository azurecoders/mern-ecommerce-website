import React from "react";

const vouchers = [
  {
    id: 1,
    storeName: "Store 1",
    description: "Get 20% off on all items",
    expiryDate: "2024-07-31",
  },
  {
    id: 2,
    storeName: "Store 2",
    description: "Buy one get one free",
    expiryDate: "2024-08-15",
  },
  {
    id: 3,
    storeName: "Store 3",
    description: "Free shipping on orders over $50",
    expiryDate: "2024-07-20",
  },
];

const VoucherSection = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Available Vouchers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vouchers.map((voucher) => (
            <div
              key={voucher.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                {voucher.storeName}
              </h3>
              <p className="text-gray-600 mb-4">{voucher.description}</p>
              <p className="text-gray-500 mb-4">
                Expires on: {voucher.expiryDate}
              </p>
              <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">
                Avail Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VoucherSection;

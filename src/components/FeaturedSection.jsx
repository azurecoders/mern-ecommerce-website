import React from "react";

const vendors = [
  {
    id: 1,
    name: "Vendor 1",
    description: "Description about vendor 1",
    imageUrl: "https://picsum.photos/200?random=1",
  },
  {
    id: 2,
    name: "Vendor 2",
    description: "Description about vendor 2",
    imageUrl: "https://picsum.photos/200?random=2",
  },
  {
    id: 3,
    name: "Vendor 3",
    description: "Description about vendor 3",
    imageUrl: "https://picsum.photos/200?random=3",
  },
];

const FeaturedSection = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Featured Vendors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vendors.map((vendor) => (
            <div
              key={vendor.id}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center"
            >
              <img
                src={vendor.imageUrl}
                alt={vendor.name}
                className="w-32 h-32 rounded-full mb-4 border-4 border-gray-200"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                {vendor.name}
              </h3>
              <p className="text-gray-700">{vendor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;

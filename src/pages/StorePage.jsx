import React from "react";
import ProductCard from "../components/ProductCard";

const StorePage = () => {
  // Placeholder data (replace with real data)
  const storeName = "Sample Store";
  const storeOwner = "Sample Owner";
  const storeDescription = "This store is about providing quality products.";
  const products = [
    {
      id: 1,
      name: "Product A",
      description: "Description of Product A",
      price: 19.99,
      imageUrl: "https://picsum.photos/400/300?random=1",
    },
    {
      id: 2,
      name: "Product B",
      description: "Description of Product B",
      price: 24.99,
      imageUrl: "https://picsum.photos/400/300?random=2",
    },
    {
      id: 3,
      name: "Product C",
      description: "Description of Product C",
      price: 14.99,
      imageUrl: "https://picsum.photos/400/300?random=3",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Cover Image */}
        <div className="relative">
          <img
            src="https://picsum.photos/800/400?random=4"
            alt="Store Cover"
            className="w-full h-64 object-cover"
          />
          {/* Profile Image */}
          <div className="absolute top-20 left-10">
            <img
              src="https://picsum.photos/200?random=5"
              alt="Store Profile"
              className="w-32 h-32 rounded-full border-4 border-white"
            />
          </div>
        </div>
        {/* Store Details */}
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold">{storeName}</h2>
              <p className="text-gray-600">Owner: {storeOwner}</p>
            </div>
            <div className="flex space-x-2">
              <span className="px-2 py-1 bg-green-200 text-green-800 rounded-full">
                Verified Badge
              </span>
              <span className="px-2 py-1 bg-blue-200 text-blue-800 rounded-full">
                Official Badge
              </span>
              {/* Add more badges as needed */}
            </div>
          </div>
          <p className="mt-4 text-gray-700">{storeDescription}</p>
          {/* Badges */}
          <div className="mt-4 flex space-x-2">
            <span className="px-2 py-1 bg-yellow-200 text-yellow-800 rounded-full">
              Level 1
            </span>
            <span className="px-2 py-1 bg-yellow-200 text-yellow-800 rounded-full">
              Level 2
            </span>
            <span className="px-2 py-1 bg-yellow-200 text-yellow-800 rounded-full">
              Level 3
            </span>
            {/* Add more levels as needed */}
          </div>
        </div>
        {/* Top Products Section */}
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-4">Top Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Product Cards */}
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                imageUrl={product.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorePage;

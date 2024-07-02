import React from "react";

const ProductCard = ({ name, description, price, imageUrl }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 max-w-xs mx-auto">
      <div className="relative">
        <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
        <div className="absolute top-2 right-2">
          <span className="px-2 py-1 bg-red-500 text-white rounded-full text-xs font-bold">
            New
          </span>
        </div>
      </div>
      <div className="p-4">
        <h4 className="text-xl font-bold mb-2">{name}</h4>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-col gap-2">
          <span className="text-xl font-bold text-blue-500">${price}</span>
          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
              Buy Now
            </button>
            <button className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

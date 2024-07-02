import React from "react";

const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-center h-96 flex items-center justify-center text-white text-center"
      style={{
        backgroundImage: "url(https://picsum.photos/1600/900?random=14)",
      }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Store</h1>
        <p className="text-lg mb-8">
          Discover the best products at unbeatable prices
        </p>
        <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;

import React, { useState } from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Special Product 1",
    description: "This is a special product 1",
    price: "99.99",
    imageUrl: "https://picsum.photos/200/200?random=21",
    category: "Best Sellers",
  },
  {
    id: 2,
    name: "Special Product 2",
    description: "This is a special product 2",
    price: "89.99",
    imageUrl: "https://picsum.photos/200/200?random=22",
    category: "Best Sellers",
  },
  {
    id: 3,
    name: "Special Product 3",
    description: "This is a special product 3",
    price: "79.99",
    imageUrl: "https://picsum.photos/200/200?random=23",
    category: "Best Sellers",
  },
  {
    id: 4,
    name: "Special Product 4",
    description: "This is a special product 4",
    price: "69.99",
    imageUrl: "https://picsum.photos/200/200?random=24",
    category: "Best Sellers",
  },
  {
    id: 5,
    name: "Special Product 5",
    description: "This is a special product 5",
    price: "59.99",
    imageUrl: "https://picsum.photos/200/200?random=25",
    category: "Best Sellers",
  },
  {
    id: 6,
    name: "Special Product 6",
    description: "This is a special product 6",
    price: "99.99",
    imageUrl: "https://picsum.photos/200/200?random=26",
    category: "New Arrivals",
  },
  {
    id: 7,
    name: "Special Product 7",
    description: "This is a special product 7",
    price: "89.99",
    imageUrl: "https://picsum.photos/200/200?random=27",
    category: "New Arrivals",
  },
  {
    id: 8,
    name: "Special Product 8",
    description: "This is a special product 8",
    price: "79.99",
    imageUrl: "https://picsum.photos/200/200?random=28",
    category: "New Arrivals",
  },
  {
    id: 9,
    name: "Special Product 9",
    description: "This is a special product 9",
    price: "69.99",
    imageUrl: "https://picsum.photos/200/200?random=29",
    category: "New Arrivals",
  },
  {
    id: 10,
    name: "Special Product 10",
    description: "This is a special product 10",
    price: "59.99",
    imageUrl: "https://picsum.photos/200/200?random=30",
    category: "New Arrivals",
  },
  {
    id: 11,
    name: "Special Product 11",
    description: "This is a special product 11",
    price: "99.99",
    imageUrl: "https://picsum.photos/200/200?random=31",
    category: "Discounted",
  },
  {
    id: 12,
    name: "Special Product 12",
    description: "This is a special product 12",
    price: "89.99",
    imageUrl: "https://picsum.photos/200/200?random=32",
    category: "Discounted",
  },
  {
    id: 13,
    name: "Special Product 13",
    description: "This is a special product 13",
    price: "79.99",
    imageUrl: "https://picsum.photos/200/200?random=33",
    category: "Discounted",
  },
  {
    id: 14,
    name: "Special Product 14",
    description: "This is a special product 14",
    price: "69.99",
    imageUrl: "https://picsum.photos/200/200?random=34",
    category: "Discounted",
  },
  {
    id: 15,
    name: "Special Product 15",
    description: "This is a special product 15",
    price: "59.99",
    imageUrl: "https://picsum.photos/200/200?random=35",
    category: "Discounted",
  },
  // ... (add more products and categorize them)
];

const JustForYouSection = () => {
  const [selectedTab, setSelectedTab] = useState("Best Sellers");

  const categories = ["Best Sellers", "New Arrivals", "Discounted"];

  const filteredProducts = products.filter(
    (product) => product.category === selectedTab
  );

  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Just for You</h2>
        <div className="flex justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 mx-2 font-semibold rounded-md ${
                selectedTab === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setSelectedTab(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
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
  );
};

export default JustForYouSection;

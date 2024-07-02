import React from "react";
import ProductCard from "./ProductCard"; // Ensure this path is correct

const recommendedProducts = [
  {
    id: 1,
    name: "Premium Quality Headphones",
    description:
      "Experience the best sound quality with these premium headphones.",
    price: 99.99,
    imageUrl: "https://picsum.photos/200/300?random=1",
  },
  {
    id: 2,
    name: "Stylish Hoodie",
    description: "Stay warm and comfortable with this stylish hoodie.",
    price: 59.99,
    imageUrl: "https://picsum.photos/200/300?random=2",
  },
  {
    id: 3,
    name: "Modern Watch",
    description: "Keep track of time in style with this modern watch.",
    price: 129.99,
    imageUrl: "https://picsum.photos/200/300?random=3",
  },
  // Add more products as needed
];

const RecommendedProducts = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Recommended Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recommendedProducts.map((product) => (
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

export default RecommendedProducts;

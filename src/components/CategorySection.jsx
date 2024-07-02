import React from "react";

const categories = [
  {
    id: 1,
    name: "Electronics",
    imageUrl: "https://picsum.photos/200/200?random=6",
  },
  {
    id: 2,
    name: "Fashion",
    imageUrl: "https://picsum.photos/200/200?random=7",
  },
  {
    id: 3,
    name: "Home & Garden",
    imageUrl: "https://picsum.photos/200/200?random=8",
  },
  { id: 4, name: "Sports", imageUrl: "https://picsum.photos/200/200?random=9" },
  { id: 5, name: "Toys", imageUrl: "https://picsum.photos/200/200?random=10" },
  { id: 6, name: "Books", imageUrl: "https://picsum.photos/200/200?random=11" },
  {
    id: 7,
    name: "Health & Beauty",
    imageUrl: "https://picsum.photos/200/200?random=12",
  },
  {
    id: 8,
    name: "Automotive",
    imageUrl: "https://picsum.photos/200/200?random=13",
  },
];

const CategorySection = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <img
                src={category.imageUrl}
                alt={category.name}
                className="w-full h-32 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-lg font-semibold text-center">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;

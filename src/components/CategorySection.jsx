import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTv,
  faTshirt,
  faHome,
  faFootballBall,
  faPuzzlePiece,
  faBook,
  faHeartbeat,
  faCar,
} from "@fortawesome/free-solid-svg-icons";

const categories = [
  { id: 1, name: "Electronics", icon: faTv },
  { id: 2, name: "Fashion", icon: faTshirt },
  { id: 3, name: "Home & Garden", icon: faHome },
  { id: 4, name: "Sports", icon: faFootballBall },
  { id: 5, name: "Toys", icon: faPuzzlePiece },
  { id: 6, name: "Books", icon: faBook },
  { id: 7, name: "Health & Beauty", icon: faHeartbeat },
  { id: 8, name: "Automotive", icon: faCar },
];

const CategorySection = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center"
            >
              <div className="text-4xl mb-4 text-blue-500">
                <FontAwesomeIcon icon={category.icon} />
              </div>
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
